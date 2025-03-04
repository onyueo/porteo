import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, PenTool } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            옹씌의 쿠키공장 
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-primary transition-colors">
              홈
            </Link>
            <Link href="/projects" className="font-medium hover:text-primary transition-colors">
              프로젝트
            </Link>
            <Link href="/blog" className="font-medium hover:text-primary transition-colors">
              블로그
            </Link>
            <Link href="/about" className="font-medium hover:text-primary transition-colors">
              소개
            </Link>
          </nav>
          <Button asChild>
            <Link href="/contact">연락하기</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-block" variant="outline">
                    프론트엔드 개발자
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    안녕하세요, <br />
                    저는 <span className="text-primary">김온유</span>입니다
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    사용자 경험을 중요시하는 프론트엔드 개발자입니다. TypeScript, React, Next.js를 주로 사용하며 웹
                    애플리케이션을 개발합니다.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/projects">
                      프로젝트 보기
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/blog">블로그 읽기</Link>
                  </Button>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <PenTool className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="mailto:email@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="개발자 프로필 이미지"
                width={600}
                height={600}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">주요 프로젝트</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  최근에 작업한 프로젝트들을 소개합니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.title} className="overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="aspect-video object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild className="mt-4 w-full" variant="outline" size="sm">
                      <Link href={`/projects/${project.slug}`}>자세히 보기</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/projects">모든 프로젝트 보기</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">최근 블로그 포스트</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  프론트엔드 개발에 관한 생각과 경험을 공유합니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.title} className="overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="aspect-video object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-bold">{post.title}</h3>
                      <p className="text-xs text-muted-foreground">{post.date}</p>
                      <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </div>
                    <Button asChild className="mt-4 w-full" variant="outline" size="sm">
                      <Link href={`/blog/${post.slug}`}>읽기</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/blog">모든 포스트 보기</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} 
            <Link href="https://github.com/YooByWk" target="_blank" rel="noopener noreferrer" >
            {" " + "뱅어포 직판장. "}
            </Link>
             All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/onyueo" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <PenTool className="h-5 w-5" />
              <span className="sr-only">Blog</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// 샘플 데이터
const projects = [
  {
    title: "이커머스 웹사이트",
    slug: "ecommerce-website",
    description: "React와 Next.js를 사용한 현대적인 이커머스 플랫폼",
    image: "/placeholder.svg?height=225&width=400",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "대시보드 UI",
    slug: "dashboard-ui",
    description: "데이터 시각화와 관리를 위한 반응형 대시보드",
    image: "/placeholder.svg?height=225&width=400",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
  },
  {
    title: "소셜 미디어 앱",
    slug: "social-media-app",
    description: "실시간 기능을 갖춘 소셜 네트워킹 애플리케이션",
    image: "/placeholder.svg?height=225&width=400",
    tags: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
  },
]

const blogPosts = [
  {
    title: "React 18의 새로운 기능들",
    slug: "react-18-new-features",
    date: "2023년 12월 15일",
    excerpt: "React 18에서 추가된 주요 기능들과 이를 활용하는 방법에 대해 알아봅니다.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    title: "Next.js App Router 완벽 가이드",
    slug: "nextjs-app-router-guide",
    date: "2023년 11월 20일",
    excerpt: "Next.js의 새로운 App Router를 사용하여 더 효율적인 라우팅 시스템을 구축하는 방법을 알아봅니다.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    title: "Tailwind CSS로 다크 모드 구현하기",
    slug: "tailwind-css-dark-mode",
    date: "2023년 10월 5일",
    excerpt: "Tailwind CSS를 사용하여 웹사이트에 다크 모드를 쉽게 구현하는 방법을 알아봅니다.",
    image: "/placeholder.svg?height=225&width=400",
  },
]

