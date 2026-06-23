import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    PDF_UPLOAD_DIR = os.getenv('PDF_UPLOAD_DIR', 'uploads')
    CHROMA_DB_DIR = os.getenv('CHROMA_DB_DIR', 'chroma_db')
    GEMINI_API_KEY = os.getenv('GEMINI_API_KEY', '')
    
    # FastAPI settings
    APP_NAME = "PDF Chat RAG"
    APP_VERSION = "1.0.0"
    DEBUG = os.getenv('DEBUG', 'False') == 'True'

settings = Settings()
