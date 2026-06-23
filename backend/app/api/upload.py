from fastapi import APIRouter, UploadFile, File, HTTPException, Request
from ..schemas.upload import UploadResponse
from ..services.pdf_service import PDFService
from ..services.chunking_service import ChunkingService
from ..services.indexing_service import IndexingService
from ..utils.logger import logger

router = APIRouter(prefix="/upload", tags=["upload"])

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
