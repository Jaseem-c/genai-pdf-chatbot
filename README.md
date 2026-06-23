# PDF Chat RAG

A modern, full-stack application for uploading PDFs and having intelligent conversations with your documents using Retrieval-Augmented Generation (RAG) technology.

## 🎯 Features

- **PDF Upload & Processing** – Drag-and-drop or click-to-upload PDF files with automatic text extraction and indexing
- **Intelligent Document Chat** – Ask questions about your PDFs and get contextual answers using RAG
- **Document Library** – Browse, select, and manage all uploaded PDFs from a clean sidebar
- **Real-time Processing** – Automatic chunking, embedding, and ChromaDB indexing on upload
- **Professional UI** – Modern, polished interface built with Next.js and Tailwind CSS
- **Fast Search** – Semantic search and retrieval for accurate document insights

## 🏗️ Tech Stack

### Frontend
- **Next.js 14** – React framework with built-in optimization
- **TypeScript** – Type-safe component development
- **Tailwind CSS** – Utility-first CSS for responsive, professional styling
- **React Hooks** – State management and side effects

### Backend
- **FastAPI** – High-performance Python web framework
- **ChromaDB** – Vector database for embeddings and semantic search
- **PyPDF** – PDF text extraction
- **LangChain/RAG** – Retrieval-augmented generation for intelligent responses

## 📋 Prerequisites

- **Node.js 18+** (for frontend)
- **Python 3.9+** (for backend)
- **pip** – Python package manager

## 🚀 Quick Start

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Start the backend server:
```bash
python -m uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. In a new terminal, navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` (if not already present):
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 📁 Project Structure

```
PDF Chat App/
├── backend/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── chat.py       # Chat endpoint
│   │   │   ├── upload.py     # PDF upload & list endpoints
│   │   │   └── health.py     # Health check
│   │   ├── services/         # Business logic
│   │   │   ├── chunking_service.py
│   │   │   ├── embedding_service.py
│   │   │   ├── indexing_service.py
│   │   │   ├── rag_service.py
│   │   │   ├── pdf_service.py
│   │   │   └── retrieval_service.py
│   │   ├── db/               # Database
│   │   │   └── chroma.py     # ChromaDB setup
│   │   ├── schemas/          # Pydantic models
│   │   ├── core/             # Configuration
│   │   └── main.py           # FastAPI app
│   ├── uploads/              # Uploaded PDFs
│   ├── chroma_db/            # Vector store
│   └── requirements.txt      # Dependencies
│
├── frontend/
│   ├── src/
│   │   ├── app/              # Next.js pages
│   │   │   ├── page.tsx      # Home page
│   │   │   ├── upload/       # Upload page
│   │   │   ├── chat/         # Chat page
│   │   │   └── layout.tsx    # Root layout
│   │   ├── components/       # React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── ChatWindow.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   ├── MessageBubble.tsx
│   │   │   ├── PdfCard.tsx
│   │   │   ├── UploadBox.tsx
│   │   ├── hooks/            # Custom React hooks
│   │   │   ├── useChat.ts
│   │   │   ├── useUpload.ts
│   │   │   └── usePDFList.ts
│   │   ├── lib/              # Utilities
│   │   │   ├── api.ts        # API calls
│   │   │   └── types.ts      # TypeScript types
│   │   └── globals.css       # Global styles
│   ├── public/               # Static assets
│   └── package.json          # Dependencies
│
└── README.md
```

## 🔄 API Endpoints

### Upload
- **POST** `/api/upload` – Upload a PDF file and process it
- **GET** `/api/upload` – List all uploaded PDFs with page counts

### Chat
- **POST** `/api/chat` – Send a message and get a RAG-based response

### Health
- **GET** `/api/health` – Check API health status

## 💬 Usage

1. **Home Page** – Start by clicking "Upload your first PDF" or navigate to `/upload`
2. **Upload Page** – Drag and drop or click to select a PDF file. The file will be processed automatically.
3. **Chat Page** – Browse uploaded PDFs in the sidebar, select one, and start asking questions
4. **Ask Questions** – Type your question in the chat input and press Send. The AI will search the PDF and provide an answer.

## 🎨 Design Features

- Clean, professional UI with subtle gradients and shadows
- Responsive design that works on desktop and tablet
- Real-time feedback (loading states, success messages, error handling)
- Smooth transitions and hover effects
- Accessible color contrast and typography

## 📦 Key Dependencies

### Backend
- `fastapi` – Web framework
- `pydantic` – Data validation
- `pypdf` – PDF reading
- `chromadb` – Vector database
- `langchain` – LLM utilities
- `python-dotenv` – Environment variables

### Frontend
- `next` – React framework
- `react` – UI library
- `tailwindcss` – Styling
- `typescript` – Type safety

## 🔧 Configuration

### Backend
Create a `.env` file in the `backend` directory:
```
DEBUG=True
PDF_UPLOAD_DIR=uploads
CHROMA_DB_DIR=chroma_db
GEMINI_API_KEY=your_api_key_here
```

### Frontend
The frontend uses `.env.local` for environment variables:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

## 🛠️ Development

### Running in Development Mode

**Terminal 1 – Backend:**
```bash
cd backend
venv\Scripts\activate
python -m uvicorn app.main:app --reload
```

**Terminal 2 – Frontend:**
```bash
cd frontend
npm run dev
```

### Build for Production

**Backend:**
```bash
# Use a ASGI server like gunicorn
pip install gunicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.main:app
```

**Frontend:**
```bash
npm run build
npm start
```

## 📝 Notes

- PDFs are stored in the `backend/uploads` directory
- ChromaDB vector store is persisted in `backend/chroma_db`
- The app uses semantic search for retrieving relevant PDF sections
- Message timestamps are normalized to `en-US` format for consistent server/client rendering

## 🤝 Contributing

Feel free to fork, submit issues, and create pull requests. All contributions are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Future Enhancements

- [ ] Support for multiple file formats (DOCX, TXT, Images)
- [ ] PDF annotation and highlighting
- [ ] Conversation history and save/load
- [ ] User authentication and multi-user support
- [ ] Advanced search filters
- [ ] Export chat conversations as PDF
- [ ] Rate limiting and usage analytics

## 🆘 Troubleshooting

### Backend won't start
- Make sure Python 3.9+ is installed
- Verify virtual environment is activated
- Check that port 8000 is not in use

### Frontend shows 404 errors
- Ensure backend is running on `http://localhost:8000`
- Check `.env.local` has correct `NEXT_PUBLIC_API_BASE_URL`
- Clear browser cache and reload

### PDFs not showing in sidebar
- Verify PDFs were uploaded successfully (check backend logs)
- Check `backend/uploads` directory for uploaded files
- Refresh the chat page

---

**Happy chatting! 🚀**
