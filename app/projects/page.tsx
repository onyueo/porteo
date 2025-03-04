import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">프로젝트</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            제가 작업한 다양한 프로젝트들을 소개합니다.
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
  {
    title: "포트폴리오 웹사이트",
    slug: "portfolio-website",
    description: "Next.js와 Tailwind CSS로 만든 개인 포트폴리오 사이트",
    image: "/placeholder.svg?height=225&width=400",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "날씨 앱",
    slug: "weather-app",
    description: "현재 위치 기반 날씨 정보를 제공하는 웹 애플리케이션",
    image: "/placeholder.svg?height=225&width=400",
    tags: ["React", "TypeScript", "Weather API", "Tailwind CSS"],
  },
  {
    title: "할 일 관리 앱",
    slug: "todo-app",
    description: "드래그 앤 드롭 기능을 갖춘 할 일 관리 애플리케이션",
    image: "/placeholder.svg?height=225&width=400",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
  },
]

