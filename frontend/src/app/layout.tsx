import '../globals.css'

export const metadata = {
  title: 'PDF Chat RAG',
  description: 'Upload PDFs and chat with them using advanced RAG technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
