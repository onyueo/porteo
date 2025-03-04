import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="개발자 프로필 이미지"
            width={600}
            height={600}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              안녕하세요, 저는 김온유입니다.
            </h1>
            <p className="text-muted-foreground md:text-xl">프론트엔드 개발자 | UI/UX 엔지니어</p>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              저는 주니어 프론트엔드 개발자로, 웹 애플리케이션을 개발하는 데 SSAFY 수료와 인턴십 5개월 이상의 경험을 가지고
              있습니다. TypeScript, React, Next.js를 주로 사용하며, 사용자 친화적이고 성능이 뛰어난 웹 애플리케이션을
              만드는 것을 목표로 합니다.
            </p>
            <p>
              새로운 기술과 트렌드를 배우는 것을 좋아하며, 개발 커뮤니티에 기여하고 지식을 공유하는 것을 중요하게
              생각합니다. 이 블로그를 통해 제가 배운 것들을 공유하고, 다른 개발자들과 소통하고자 합니다.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">기술 스택</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div key={skill} className="rounded-md bg-muted px-3 py-1 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">경력</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.company} className="space-y-1">
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">교육</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="space-y-1">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution} | {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
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
          <Button asChild>
            <Link href="/contact">연락하기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

// 샘플 데이터
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Figma",
  "Responsive Design",
  "Kotlin"
]

const experience = [
  {
    role: "앱 개발자",
    company: "원 인터네셔널",
    period: "2024년 7월 - 2024년 12월 ",
    description:
      "주니어 개발자로서, 사내 유일 앱 개발자였습니다.",
  },
  {
    role: "프론트엔드 개발자",
    company: "SSAFY - 삼성 청년 소프트웨어 아카데미",
    period: "2018년 - 2021년",
    description:
      "사용자 중심의 웹 애플리케이션을 개발하고 UI/UX 개선 작업을 진행했습니다. React와 Redux를 사용하여 상태 관리를 효율적으로 구현했습니다.",
  },
]

const education = [
  {
    degree: "컴퓨터 공학 학사",
    institution: "전남대학교",
    period: "2016년 - 2022년",
  },
  {
    degree: "웹 개발 부트캠프",
    institution: "삼성청년 소프트웨어 아카데미",
    period: "2023년 ~ 2024년",
  },
]

