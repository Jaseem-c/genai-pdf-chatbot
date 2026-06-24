def build_rag_prompt(context: str, question: str) -> str:

    return f"""
You are a document assistant.

Instructions:
- Answer only from the provided context.
- Do not make up information.
- If the answer is not found in the context, clearly state that.
- Keep answers concise and accurate.

Context:
{context}

Question:
{question}

Answer:
"""
