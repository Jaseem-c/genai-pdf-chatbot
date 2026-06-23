import os
from typing import Dict
from fastapi import UploadFile
from ..core.config import settings
from ..utils.logger import logger
from pypdf import PdfReader

class PDFService:
    def __init__(self):
        self.upload_dir = settings.PDF_UPLOAD_DIR
        os.makedirs(self.upload_dir, exist_ok=True)
    
    async def process_pdf(self, file: UploadFile) -> Dict:
        """Save PDF and extract text."""
        try:
            file_path = os.path.join(self.upload_dir, file.filename)
            
            with open(file_path, "wb") as buffer:
                contents = await file.read()
                buffer.write(contents)
            
            logger.info(f"PDF saved: {file.filename}")

            extracted_text = self.extract_text(file_path)

            logger.info(
                f"Extracted {len(extracted_text)} characters from {file.filename}"
            )
            
            return {
                "filename": file.filename,
                "path": file_path,
                "size": len(contents),
                "text_length": len(extracted_text),
                "text": extracted_text,
            }
        except Exception as e:
            logger.error(f"Error processing PDF: {str(e)}")
            raise

    def extract_text(self, file_path: str) -> str:
        """
        Extract all text from a PDF file.

        Args:
            file_path: Path to the PDF file

        Returns:
            Extracted text as a single string
        """
        try:
            reader = PdfReader(file_path)

            pages_text = []

            for page in reader.pages:
                page_text = page.extract_text()

                if page_text:
                    pages_text.append(page_text)

            extracted_text = "\n".join(pages_text)


            return extracted_text

        except Exception as e:
            logger.error(
                f"PDF extraction failed: {str(e)}"
            )
            raise