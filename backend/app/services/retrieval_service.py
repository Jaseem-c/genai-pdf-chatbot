from typing import List
from ..services.embedding_service import EmbeddingService
from ..utils.logger import logger


class RetrievalService:

    def __init__(self, collection):
        self.collection = collection
        self.embedding_service = EmbeddingService()

    def retrieve(self,query: str,top_k: int = 3) -> List[str]:
        """Retrieve most relevant chunks."""

        try:

            query_embedding = (self.embedding_service.generate_embedding(query))

            results = self.collection.query(query_embeddings=[query_embedding],n_results=top_k)
            documents = (results["documents"][0])
            
            logger.info(
                f"Retrieved {len(documents)} chunks"
            )

            return documents

        except Exception as e:

            logger.error(
                f"Retrieval failed: {str(e)}"
            )

            raise