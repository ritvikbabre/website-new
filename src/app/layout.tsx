import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Ritvik's Website",
    description: 'Building in Progress',
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

