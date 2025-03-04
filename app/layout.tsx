import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "옹씌의 쿠키공자",
  description: "프론트엔드 개발자 김온유의 포트폴리오 및 블로그",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'