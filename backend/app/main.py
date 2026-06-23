from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import upload, chat
from .core.config import settings
from .utils.logger import logger
from contextlib import asynccontextmanager
from .db.chroma import ChromaDB

#initialize ChromaDB and collections on startup
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    app.state.chroma_db = ChromaDB()
    app.state.pdf_collection = (
        app.state.chroma_db.create_collection(
            "pdf_documents"
        )
    )
    yield


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    debug=settings.DEBUG,
    lifespan=lifespan
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
# app.include_router(health.router)
app.include_router(upload.router, prefix="/api")
app.include_router(chat.router, prefix="/api")


@app.get("/")
async def root():
    """Root endpoint."""
    return {
        "message": "PDF Chat RAG API",
        "version": settings.APP_VERSION,
        "status": "running"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
