import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // 실제 구현에서는 params.slug를 사용하여 데이터베이스나 CMS에서 프로젝트를 가져옵니다.
  // 여기서는 샘플 데이터를 사용합니다.
  const project = projects.find((project) => project.slug === params.slug) || projects[0]

  return (
    <div className="container py-12">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          프로젝트로 돌아가기
        </Link>
      </Button>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
          <div className="mt-4 grid grid-cols-2 gap-4">
            {project.gallery.map((image, index) => (
              <Image
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${project.title} 갤러리 이미지 ${index + 1}`}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="mt-2 text-muted-foreground">{project.period}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">프로젝트 개요</h2>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">주요 기능</h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">사용 기술</h2>
            <div className="space-y-2">
              {project.technologies.map((tech) => (
                <div key={tech.category} className="space-y-1">
                  <h3 className="font-medium">{tech.category}</h3>
                  <p className="text-sm text-muted-foreground">{tech.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            {project.demoUrl && (
              <Button asChild>
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  라이브 데모
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold">프로젝트 상세</h2>
        <div
          className="prose prose-gray max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </div>
    </div>
  )
}

// 샘플 데이터
const projects = [
  {
    title: "이커머스 웹사이트",
    slug: "ecommerce-website",
    description:
      "React와 Next.js를 사용한 현대적인 이커머스 플랫폼입니다. 사용자 친화적인 UI와 다양한 기능을 제공합니다.",
    period: "2023년 6월 - 2023년 9월",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    features: [
      "상품 검색 및 필터링",
      "장바구니 및 결제 시스템",
      "사용자 계정 관리",
      "상품 리뷰 및 평점",
      "관리자 대시보드",
    ],
    technologies: [
      {
        category: "프론트엔드",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      },
      {
        category: "백엔드",
        items: ["Node.js", "Express", "MongoDB", "Mongoose"],
      },
      {
        category: "결제 및 인증",
        items: ["Stripe API", "NextAuth.js", "JWT"],
      },
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    content: `
      <h3>프로젝트 배경</h3>
      <p>이 프로젝트는 현대적인 이커머스 플랫폼을 구축하기 위해 시작되었습니다. 기존의 이커머스 사이트들이 사용자 경험 측면에서 부족한 점이 많다고 느껴, 더 나은 사용자 경험을 제공하는 플랫폼을 만들고자 했습니다.</p>
      
      <h3>개발 과정</h3>
      <p>프로젝트는 다음과 같은 단계로 진행되었습니다:</p>
      <ol>
        <li>요구사항 분석 및 기획</li>
        <li>디자인 시스템 구축</li>
        <li>프론트엔드 개발</li>
        <li>백엔드 API 개발</li>
        <li>결제 시스템 연동</li>
        <li>테스트 및 배포</li>
      </ol>
      
      <h3>주요 도전 과제</h3>
      <p>프로젝트를 진행하면서 몇 가지 주요 도전 과제가 있었습니다:</p>
      <ul>
        <li>다양한 상품 카테고리와 필터링 옵션을 효율적으로 구현하는 것</li>
        <li>장바구니 상태 관리와 결제 프로세스의 원활한 연동</li>
        <li>모바일 환경에서의 최적화된 사용자 경험 제공</li>
        <li>대량의 상품 데이터를 효율적으로 로딩하고 관리하는 것</li>
      </ul>
      
      <h3>해결책</h3>
      <p>이러한 도전 과제를 해결하기 위해 다음과 같은 접근 방식을 사용했습니다:</p>
      <ul>
        <li>Redux Toolkit을 사용하여 전역 상태 관리를 효율적으로 구현</li>
        <li>서버 사이드 렌더링을 활용하여 초기 로딩 속도 개선</li>
        <li>Stripe API를 사용하여 안전하고 사용자 친화적인 결제 시스템 구현</li>
        <li>반응형 디자인 원칙을 철저히 적용하여 모든 디바이스에서 최적의 경험 제공</li>
      </ul>
      
      <h3>결과 및 성과</h3>
      <p>이 프로젝트를 통해 다음과 같은 성과를 얻었습니다:</p>
      <ul>
        <li>페이지 로딩 시간 50% 감소</li>
        <li>모바일 사용자 전환율 30% 증가</li>
        <li>장바구니 포기율 25% 감소</li>
        <li>사용자 만족도 조사에서 4.8/5 점수 획득</li>
      </ul>
      
      <h3>배운 점</h3>
      <p>이 프로젝트를 통해 다음과 같은 점을 배웠습니다:</p>
      <ul>
        <li>대규모 이커머스 플랫폼의 아키텍처 설계 방법</li>
        <li>결제 시스템 연동 시 보안 고려사항</li>
        <li>성능 최적화 기법과 사용자 경험 개선 방법</li>
        <li>팀 협업과 효율적인 프로젝트 관리 방법</li>
      </ul>
    `,
  },
  {
    title: "대시보드 UI",
    slug: "dashboard-ui",
    description:
      "데이터 시각화와 관리를 위한 반응형 대시보드입니다. 다양한 차트와 그래프를 통해 데이터를 효과적으로 표현합니다.",
    period: "2023년 3월 - 2023년 5월",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    features: [
      "실시간 데이터 시각화",
      "커스터마이징 가능한 위젯",
      "다양한 차트 및 그래프",
      "데이터 필터링 및 정렬",
      "반응형 레이아웃",
    ],
    technologies: [
      {
        category: "프론트엔드",
        items: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "React Query"],
      },
      {
        category: "백엔드",
        items: ["Node.js", "Express", "PostgreSQL"],
      },
      {
        category: "기타",
        items: ["Socket.io", "Jest", "React Testing Library"],
      },
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    content: `
      <h3>프로젝트 배경</h3>
      <p>이 프로젝트는 기업의 데이터를 효과적으로 시각화하고 관리할 수 있는 대시보드를 개발하기 위해 시작되었습니다. 기존의 대시보드 솔루션들이 사용자 경험과 커스터마이징 측면에서 부족하다고 느껴, 더 나은 솔루션을 만들고자 했습니다.</p>
      
      <h3>개발 과정</h3>
      <p>프로젝트는 다음과 같은 단계로 진행되었습니다:</p>
      <ol>
        <li>사용자 요구사항 분석</li>
        <li>UI/UX 디자인</li>
        <li>컴포넌트 설계 및 개발</li>
        <li>데이터 시각화 구현</li>
        <li>백엔드 API 연동</li>
        <li>테스트 및 최적화</li>
      </ol>
      
      <h3>주요 도전 과제</h3>
      <p>프로젝트를 진행하면서 몇 가지 주요 도전 과제가 있었습니다:</p>
      <ul>
        <li>대량의 데이터를 효율적으로 처리하고 시각화하는 것</li>
        <li>실시간 데이터 업데이트를 지연 없이 구현하는 것</li>
        <li>다양한 화면 크기에서 최적의 사용자 경험을 제공하는 것</li>
        <li>복잡한 차트와 그래프를 성능 저하 없이 렌더링하는 것</li>
      </ul>
      
      <h3>해결책</h3>
      <p>이러한 도전 과제를 해결하기 위해 다음과 같은 접근 방식을 사용했습니다:</p>
      <ul>
        <li>데이터 처리 로직을 최적화하여 대량의 데이터도 빠르게 처리할 수 있도록 함</li>
        <li>Socket.io를 사용하여 실시간 데이터 업데이트 구현</li>
        <li>반응형 디자인 원칙을 적용하여 모든 디바이스에서 최적의 경험 제공</li>
        <li>Chart.js와 D3.js를 효율적으로 활용하여 성능 최적화</li>
      </ul>
      
      <h3>결과 및 성과</h3>
      <p>이 프로젝트를 통해 다음과 같은 성과를 얻었습니다:</p>
      <ul>
        <li>데이터 분석 시간 40% 단축</li>
        <li>사용자 의사결정 속도 35% 향상</li>
        <li>대시보드 사용 만족도 4.7/5 점수 획득</li>
      </ul>
    `,
  },
]

