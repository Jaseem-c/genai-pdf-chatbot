from typing import List

from ..services.embedding_service import EmbeddingService
from ..utils.logger import logger


class IndexingService:

    def __init__(self, collection):
        self.collection = collection
        self.embedding_service = EmbeddingService()

    def index_chunks(self,chunks: List[str]) -> int:
        """Generate embeddings and store chunks in ChromaDB."""

        try:

            for index, chunk in enumerate(chunks):

                embedding = (self.embedding_service.generate_embedding(chunk))

                self.collection.add(ids=[f"chunk_{index}"],
                    documents=[chunk],embeddings=[embedding])

            logger.info(
                f"Successfully indexed {len(chunks)} chunks"
            )

            return len(chunks)

        except Exception as e:

            logger.error(
                f"Indexing failed: {str(e)}"
            )

            raise