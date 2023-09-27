import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-background font-sans antialiased bg-spacial-2">
          <Main className="bg-spacial-2" />
        <NextScript />
      </body>
    </Html>
  )
}
