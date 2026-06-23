from .retrieval_service import RetrievalService
from .llm_service import LLMService
from ..prompts.rag_prompt import (build_rag_prompt)
from ..utils.logger import logger

class RAGService:
    def __init__(self, collection):
        self.retrieval_service = RetrievalService(collection)
        self.llm_service = LLMService()
    
    async def generate_response(self, query: str) -> str:
        """Generate a response using RAG."""
        # Retrieve relevant documents
        try:
            context_docs = self.retrieval_service.retrieve(query)
            context = "\n".join(context_docs)
            
            # Format prompt with context
            prompt = build_rag_prompt(context=context,question=query)

            logger.info(
                "RAG prompt built successfully"
            )
            
            # Generate response using LLM
            response = await self.llm_service.generate(prompt)

            return response
        except Exception as e:

            logger.error(f"RAG pipeline failed: {str(e)}")

            raise
    
