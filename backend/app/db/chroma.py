
from ..core.config import settings
from ..utils.logger import logger
import chromadb

class ChromaDB:
    def __init__(self):
        self.db_path = settings.CHROMA_DB_DIR
        self.client = chromadb.PersistentClient(path=self.db_path)
        logger.info(f"ChromaDB initialized at {self.db_path}")

    def create_collection(self, name: str)-> chromadb.Collection:
        """Create a new collection in ChromaDB."""
        try:
            collection = self.client.get_or_create_collection(name)
            logger.info(f"Collection '{name}' created or retrieved successfully.")
            return collection
        except Exception as e:
            logger.error(f"Error creating collection '{name}': {str(e)}")
            raise


   

