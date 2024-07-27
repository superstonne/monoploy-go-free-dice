// app/[lang]/layout.js
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Monopoly Go Free Dice',
  description: 'Get your daily Monopoly Go free dice and rolls',
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang} data-theme="monopolygo">
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  )
}