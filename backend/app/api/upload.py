from fastapi import APIRouter, UploadFile, File, HTTPException, Request
from ..schemas.upload import UploadResponse
from ..services.pdf_service import PDFService
from ..services.chunking_service import ChunkingService
from ..services.indexing_service import IndexingService
from ..utils.logger import logger
from ..core.config import settings
from pypdf import PdfReader
import os
from typing import List

router = APIRouter(prefix="/upload", tags=["upload"])

@router.get("")
async def list_pdfs():
    """List all uploaded PDFs."""
    try:
        if not os.path.exists(settings.PDF_UPLOAD_DIR):
            return []
        
        pdf_files = []
        for f in os.listdir(settings.PDF_UPLOAD_DIR):
            if not f.endswith('.pdf'):
                continue

            file_path = os.path.join(settings.PDF_UPLOAD_DIR, f)
            pages = 0
            try:
                reader = PdfReader(file_path)
                pages = len(reader.pages)
            except Exception as exc:
                logger.warning(f"Unable to read page count for {f}: {exc}")

            pdf_files.append({
                "filename": f,
                "path": file_path,
                "size": os.path.getsize(file_path),
                "pages": pages,
            })

        return pdf_files
    except Exception as e:
        logger.error(f"Error listing PDFs: {str(e)}")
        return []

@router.post("", response_model=UploadResponse)
async def upload_pdf(request: Request,file: UploadFile = File(...)):
    """Upload and process a PDF file."""
    if not file.filename.endswith('.pdf'):
        raise HTTPException(status_code=400, detail="Only PDF files are allowed")
    
    # Save PDF + extract text
    pdf_service = PDFService()
    result = await pdf_service.process_pdf(file)

    # Create chunks
    chunking_service = ChunkingService()
    chunks = chunking_service.chunk_text(
        result["text"]
    )

    # Create embeddings
    # Index chunks into ChromaDB
    collection = request.app.state.pdf_collection

    indexing_service = IndexingService(
        collection=collection
    )

    indexed_count = indexing_service.index_chunks(
        chunks
    )
    

    return UploadResponse(
        filename=result["filename"],
        status="processed",
        message=(
            f"PDF uploaded successfully. "
            f"Extracted {result['text_length']} characters "
            f"into {indexed_count} chunks.and indexed into ChromaDB."
        )
    )
