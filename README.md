# PDF Chat RAG

A sophisticated Retrieval-Augmented Generation (RAG) application that enables users to upload PDF documents and interact with them through an intelligent chat interface.

## Features

- **PDF Upload**: Seamlessly upload PDF documents through an intuitive interface
- **RAG Technology**: Advanced retrieval-augmented generation for accurate, context-aware responses
- **Vector Database**: Chroma DB integration for efficient semantic search
- **Modern UI**: Next.js frontend with Tailwind CSS styling
- **RESTful API**: FastAPI backend with OpenAPI documentation

## Project Structure

### Backend

```
backend/
├── app/
│   ├── api/              # API endpoints
│   ├── services/         # Business logic
│   ├── db/               # Database integrations
│   ├── schemas/          # Pydantic models
│   ├── prompts/          # LLM prompts
│   ├── core/             # Configuration
│   └── utils/            # Utilities
├── uploads/              # Uploaded PDFs
├── chroma_db/            # Vector database
├── requirements.txt
└── .env
```

### Frontend

```
frontend/
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # React components
│   ├── lib/              # Utilities and API
│   └── hooks/            # Custom React hooks
├── public/               # Static assets
├── package.json
└── .env.local
```

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Configure environment variables in `.env`:
   ```
   PDF_UPLOAD_DIR=./uploads
   CHROMA_DB_DIR=./chroma_db
   OPENAI_API_KEY=your-api-key-here
   DEBUG=False
   ```

4. Run the backend:
   ```bash
   uvicorn app.main:app --reload
   ```

   The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
   ```

4. Run the frontend:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `POST /api/upload` - Upload PDF
- `POST /api/chat` - Send chat message

## Technologies

### Backend
- **FastAPI** - Web framework
- **Pydantic** - Data validation
- **ChromaDB** - Vector database
- **OpenAI** - LLM integration

### Frontend
- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management

## Development

### Backend Development

- Add new API endpoints in `app/api/`
- Implement business logic in `app/services/`
- Add Pydantic schemas in `app/schemas/`
- Update `requirements.txt` with new dependencies

### Frontend Development

- Create new pages in `src/app/`
- Add components in `src/components/`
- Create custom hooks in `src/hooks/`
- Update `package.json` with new dependencies

## Environment Variables

### Backend (.env)
- `PDF_UPLOAD_DIR` - Directory for uploaded PDFs
- `CHROMA_DB_DIR` - Directory for Chroma database
- `OPENAI_API_KEY` - OpenAI API key
- `DEBUG` - Debug mode (True/False)

### Frontend (.env.local)
- `NEXT_PUBLIC_API_BASE_URL` - Backend API base URL

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License

## Support

For questions or issues, please open an issue on the repository.
