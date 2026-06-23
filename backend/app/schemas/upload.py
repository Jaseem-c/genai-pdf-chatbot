from pydantic import BaseModel

class UploadResponse(BaseModel):
    filename: str
    status: str
    message: str
