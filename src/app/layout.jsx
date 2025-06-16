import "./globals.css"

export const metadata = {
  title: "Mi Portfolio - Desarrollador del Futuro",
  description: "Portfolio personal de desarrollador full stack",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
