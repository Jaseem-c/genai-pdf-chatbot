from typing import List
import numpy as np
from typing import List
from google import genai
from ..core.config import settings
from ..utils.logger import logger


class EmbeddingService:
    def __init__(self):
        self.client = genai.Client(api_key=settings.GEMINI_API_KEY)

    def generate_embedding(self,text: str) -> List[float]:
        """ Generate embedding for a single text."""

        response = self.client.models.embed_content(
            model="gemini-embedding-001",
            contents=text
        )

        embedding = response.embeddings[0].values

        return embedding