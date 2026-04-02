import './globals.css'

export const metadata = {
  title: 'ITZFIZZ — Scroll Hero',
  description: 'Scroll-driven hero animation for ITZFIZZ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
