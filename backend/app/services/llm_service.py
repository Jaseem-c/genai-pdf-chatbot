from ..core.config import settings
from ..utils.logger import logger
from google import genai

class LLMService:
    def __init__(self):
        # TODO: Initialize with OpenAI or other LLM provider
        self.api_key = settings.GEMINI_API_KEY
        self.client = genai.Client(api_key=self.api_key)
    
    async def generate(self, prompt: str) -> str:
        """Generate text using LLM."""
        try:
            # TODO: Implement actual LLM call
            response = self.client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt
            )
            logger.info(
                "LLM response generated successfully"
            )
            return response.text
        except Exception as e:
            logger.error(f"Error generating response: {str(e)}")
            raise
