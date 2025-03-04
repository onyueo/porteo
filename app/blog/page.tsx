import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">블로그</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            프론트엔드 개발에 관한 생각과 경험을 공유합니다.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl py-8">
        <div className="relative mb-12">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="블로그 포스트 검색..."
            className="w-full appearance-none bg-background pl-8 shadow-none"
          />
        </div>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="overflow-hidden">
              <div className="md:flex">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="aspect-video object-cover md:w-1/3"
                />
                <CardContent className="p-4 md:w-2/3">
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{post.title}</h3>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    {post.categories.map((category) => (
                      <Link
                        key={category}
                        href={`/blog/category/${category.toLowerCase()}`}
                        className="text-xs text-primary hover:underline"
                      >
                        #{category}
                      </Link>
                    ))}
                  </div>
                  <Button asChild className="mt-4" variant="outline" size="sm">
                    <Link href={`/blog/${post.slug}`}>읽기</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// 샘플 데이터
const blogPosts = [
  {
    title: "React 18의 새로운 기능들",
    slug: "react-18-new-features",
    date: "2023년 12월 15일",
    excerpt:
      "React 18에서 추가된 주요 기능들과 이를 활용하는 방법에 대해 알아봅니다. Concurrent Mode, Suspense, 자동 배치 처리 등 다양한 기능들을 살펴보고 실제 프로젝트에 적용하는 방법을 소개합니다.",
    image: "/placeholder.svg?height=225&width=400",
    categories: ["React", "JavaScript", "프론트엔드"],
  },
  {
    title: "Next.js App Router 완벽 가이드",
    slug: "nextjs-app-router-guide",
    date: "2023년 11월 20일",
    excerpt:
      "Next.js의 새로운 App Router를 사용하여 더 효율적인 라우팅 시스템을 구축하는 방법을 알아봅니다. 서버 컴포넌트, 레이아웃, 로딩 상태 등 App Router의 주요 기능들을 자세히 살펴봅니다.",
    image: "/placeholder.svg?height=225&width=400",
    categories: ["Next.js", "React", "웹개발"],
  },
  {
    title: "Tailwind CSS로 다크 모드 구현하기",
    slug: "tailwind-css-dark-mode",
    date: "2023년 10월 5일",
    excerpt:
      "Tailwind CSS를 사용하여 웹사이트에 다크 모드를 쉽게 구현하는 방법을 알아봅니다. 사용자 설정에 따라 자동으로 테마를 변경하는 방법과 테마 전환 애니메이션을 추가하는 방법을 소개합니다.",
    image: "/placeholder.svg?height=225&width=400",
    categories: ["CSS", "Tailwind", "UI/UX"],
  },
  {
    title: "TypeScript 타입 시스템 마스터하기",
    slug: "typescript-type-system",
    date: "2023년 9월 12일",
    excerpt:
      "TypeScript의 고급 타입 기능을 활용하여 더 안전하고 유지보수하기 쉬운 코드를 작성하는 방법을 알아봅니다. 제네릭, 유니온 타입, 인터섹션 타입, 타입 가드 등 다양한 기능들을 실제 예제와 함께 살펴봅니다.",
    image: "/placeholder.svg?height=225&width=400",
    categories: ["TypeScript", "JavaScript", "프로그래밍"],
  },
  {
    title: "프론트엔드 성능 최적화 기법",
    slug: "frontend-performance-optimization",
    date: "2023년 8월 25일",
    excerpt:
      "웹 애플리케이션의 성능을 향상시키는 다양한 기법들을 알아봅니다. 코드 스플리팅, 레이지 로딩, 메모이제이션, 이미지 최적화 등 실제 프로젝트에 적용할 수 있는 다양한 최적화 방법들을 소개합니다.",
    image: "/placeholder.svg?height=225&width=400",
    categories: ["성능최적화", "웹개발", "프론트엔드"],
  },
]

