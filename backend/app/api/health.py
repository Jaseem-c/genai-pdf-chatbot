from fastapi import APIRouter
from ..schemas.response import HealthResponse

router = APIRouter(prefix="/health", tags=["health"])

@router.get("", response_model=HealthResponse)
async def health_check():
    """Check if the API is healthy."""
    return HealthResponse(status="healthy", message="API is running")
