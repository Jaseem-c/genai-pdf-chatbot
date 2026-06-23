
import re
from typing import List
from ..utils.logger import logger


class ChunkingService:
    def __init__(
        self,
        chunk_size: int = 500,
        overlap_sentences: int = 1
    ):
        self.chunk_size = chunk_size
        self.overlap_sentences = overlap_sentences

    def chunk_text(self, text: str) -> List[str]:
        """
        Split text into sentence-based chunks with overlap.
        """

        if not text:
            return []

        # Split text into sentences
        sentences = re.split(
            r"(?<=[.!?])\s+",
            text.strip()
        )

        chunks = []
        current_chunk = []
        current_length = 0

        for sentence in sentences:
            sentence_length = len(sentence)

            # Create a new chunk if adding this sentence
            # would exceed the chunk size
            if current_length + sentence_length > self.chunk_size:

                chunks.append(
                    " ".join(current_chunk)
                )

                # Keep overlap sentences
                current_chunk = (
                    current_chunk[-self.overlap_sentences:]
                    if current_chunk
                    else []
                )

                current_length = len(
                    " ".join(current_chunk)
                )

            current_chunk.append(sentence)
            current_length += sentence_length

        # Add the final chunk
        if current_chunk:
            chunks.append(
                " ".join(current_chunk)
            )

        logger.info(
            f"Created {len(chunks)} chunks"
        )

        return chunks