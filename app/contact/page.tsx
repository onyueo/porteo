"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    toast({
      title: "메시지가 전송되었습니다",
      description: "빠른 시일 내에 답변 드리겠습니다.",
    })
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">연락하기</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            프로젝트 협업이나 질문이 있으시면 언제든지 연락해주세요.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">주소</h3>
              <p className="text-muted-foreground">서울특별시 강남구 테헤란로 123</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">이메일</h3>
              <p className="text-muted-foreground">email@example.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">전화번호</h3>
              <p className="text-muted-foreground">010-1234-5678</p>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-bold">근무 시간</h3>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <div>월요일 - 금요일</div>
              <div>9:00 - 18:00</div>
              <div>토요일 - 일요일</div>
              <div>휴무</div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="홍길동"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">제목</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="문의 제목"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">메시지</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="문의 내용을 입력해주세요"
                className="min-h-32"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              메시지 보내기
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

