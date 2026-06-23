from fastapi import APIRouter, HTTPException, Request
from ..services.retrieval_service import RetrievalService
from ..schemas.chat import ChatRequest, ChatResponse
from ..services.rag_service import RAGService

router = APIRouter(prefix="/chat", tags=["chat"])



@router.post("", response_model=ChatResponse)
async def chat(request: Request, payload: ChatRequest):
    """Send a message and get a RAG-based response."""
    try:
        collection = request.app.state.pdf_collection
        rag_service = RAGService(collection=collection)
        response = await rag_service.generate_response(payload.message)
        return ChatResponse(response=response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# @router.get("/test")
# async def test_search(query: str,request: Request):

#     collection = (request.app.state.pdf_collection)

#     retrieval_service = (RetrievalService(collection))

#     results = retrieval_service.retrieve(query=query,top_k=3)

#     return results