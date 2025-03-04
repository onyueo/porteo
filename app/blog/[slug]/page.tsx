import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // 실제 구현에서는 params.slug를 사용하여 데이터베이스나 CMS에서 블로그 포스트를 가져옵니다.
  // 여기서는 샘플 데이터를 사용합니다.
  const post = blogPosts.find((post) => post.slug === params.slug) || blogPosts[0]

  return (
    <div className="container py-12">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          블로그로 돌아가기
        </Link>
      </Button>
      <article className="prose prose-gray mx-auto dark:prose-invert lg:prose-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
          <p className="text-muted-foreground">{post.date}</p>
          <div className="mt-4 flex justify-center gap-2">
            {post.categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase()}`}
                className="text-sm text-primary hover:underline"
              >
                #{category}
              </Link>
            ))}
          </div>
        </div>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={1200}
          height={600}
          className="aspect-video rounded-lg object-cover"
        />
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

// 샘플 데이터
const blogPosts = [
  {
    title: "React 18의 새로운 기능들",
    slug: "react-18-new-features",
    date: "2023년 12월 15일",
    excerpt: "React 18에서 추가된 주요 기능들과 이를 활용하는 방법에 대해 알아봅니다.",
    image: "/placeholder.svg?height=600&width=1200",
    categories: ["React", "JavaScript", "프론트엔드"],
    content: `
      <p>React 18이 정식 출시되었습니다! 이번 버전에서는 많은 새로운 기능들이 추가되었는데, 그 중에서도 가장 주목할 만한 기능들을 살펴보겠습니다.</p>
      
      <h2>Concurrent Mode</h2>
      <p>React 18의 가장 큰 변화는 Concurrent Mode의 도입입니다. Concurrent Mode는 React가 여러 작업을 동시에 처리할 수 있게 해주는 기능으로, 사용자 경험을 크게 향상시킬 수 있습니다.</p>
      <p>이전 버전의 React에서는 렌더링 작업이 시작되면 중단 없이 완료되어야 했습니다. 하지만 Concurrent Mode에서는 React가 렌더링 작업을 중단하고, 더 중요한 작업을 먼저 처리한 후 다시 돌아올 수 있습니다. 이를 통해 사용자 입력에 더 빠르게 반응할 수 있게 됩니다.</p>
      
      <h2>자동 배치 처리</h2>
      <p>React 18에서는 자동 배치 처리(Automatic Batching)가 개선되었습니다. 이전 버전에서는 React 이벤트 핸들러 내에서만 상태 업데이트가 배치 처리되었지만, 이제는 Promise, setTimeout, 네이티브 이벤트 핸들러 등 모든 상황에서 배치 처리가 가능해졌습니다.</p>
      <pre><code>// React 17
      setTimeout(() => {
        setCount(c => c + 1); // 리렌더링 발생
        setFlag(f => !f); // 리렌더링 발생
      }, 1000);
      
      // React 18
      setTimeout(() => {
        setCount(c => c + 1); // 리렌더링 발생하지 않음
        setFlag(f => !f); // 두 상태 업데이트가 배치 처리되어 한 번만 리렌더링 발생
      }, 1000);</code></pre>
      
      <h2>Suspense 개선</h2>
      <p>React 18에서는 Suspense 컴포넌트가 크게 개선되었습니다. 이제 서버 사이드 렌더링에서도 Suspense를 사용할 수 있으며, 데이터 페칭과 코드 스플리팅을 더 효율적으로 처리할 수 있게 되었습니다.</p>
      <pre><code>// 데이터 로딩 중에 fallback UI를 보여줍니다.
      &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
        &lt;ProfileDetails /&gt;
      &lt;/Suspense&gt;</code></pre>
      
      <h2>새로운 훅: useTransition과 useDeferredValue</h2>
      <p>React 18에서는 두 가지 새로운 훅이 추가되었습니다.</p>
      <p><strong>useTransition</strong>: 상태 업데이트의 우선순위를 낮추어 UI의 반응성을 유지할 수 있게 해줍니다.</p>
      <pre><code>const [isPending, startTransition] = useTransition();
      
      function handleClick() {
        startTransition(() => {
          // 이 상태 업데이트는 낮은 우선순위로 처리됩니다.
          setTab('photos');
        });
      }</code></pre>
      
      <p><strong>useDeferredValue</strong>: 값의 업데이트를 지연시켜 UI의 반응성을 유지할 수 있게 해줍니다.</p>
      <pre><code>const deferredQuery = useDeferredValue(query);</code></pre>
      
      <h2>결론</h2>
      <p>React 18은 많은 새로운 기능과 개선 사항을 제공합니다. 특히 Concurrent Mode의 도입은 React 애플리케이션의 성능과 사용자 경험을 크게 향상시킬 것으로 기대됩니다. 이러한 새로운 기능들을 적극적으로 활용하여 더 나은 웹 애플리케이션을 만들어 보세요!</p>
    `,
  },
  {
    title: "Next.js App Router 완벽 가이드",
    slug: "nextjs-app-router-guide",
    date: "2023년 11월 20일",
    excerpt: "Next.js의 새로운 App Router를 사용하여 더 효율적인 라우팅 시스템을 구축하는 방법을 알아봅니다.",
    image: "/placeholder.svg?height=600&width=1200",
    categories: ["Next.js", "React", "웹개발"],
    content: `
      <p>Next.js 13에서 소개된 App Router는 기존의 Pages Router를 대체하는 새로운 라우팅 시스템입니다. 이 글에서는 App Router의 주요 기능과 사용 방법에 대해 알아보겠습니다.</p>
      
      <h2>App Router 소개</h2>
      <p>App Router는 React 18의 새로운 기능들을 활용하여 더 효율적인 라우팅 시스템을 제공합니다. 특히 React Server Components를 기본적으로 지원하여 서버 사이드 렌더링과 클라이언트 사이드 렌더링을 더 효과적으로 조합할 수 있게 해줍니다.</p>
      
      <h2>폴더 기반 라우팅</h2>
      <p>App Router는 폴더 기반 라우팅 시스템을 사용합니다. 'app' 디렉토리 내에 폴더를 생성하면 해당 폴더 이름이 URL 경로가 됩니다.</p>
      <pre><code>app/
  page.tsx         // '/' 경로
  about/
    page.tsx       // '/about' 경로
  blog/
    page.tsx       // '/blog' 경로
    [slug]/
      page.tsx     // '/blog/:slug' 경로</code></pre>
      
      <h2>레이아웃</h2>
      <p>App Router에서는 레이아웃을 쉽게 구현할 수 있습니다. 'layout.tsx' 파일을 생성하면 해당 폴더와 그 하위 폴더의 모든 페이지에 레이아웃이 적용됩니다.</p>
      <pre><code>// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    &lt;html lang="en"&gt;
      &lt;body&gt;
        &lt;header&gt;헤더&lt;/header&gt;
        {children}
        &lt;footer&gt;푸터&lt;/footer&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  )
}</code></pre>
      
      <h2>서버 컴포넌트</h2>
      <p>App Router에서는 모든 컴포넌트가 기본적으로 서버 컴포넌트입니다. 서버 컴포넌트는 서버에서 렌더링되어 클라이언트로 전송되므로, 클라이언트 측 JavaScript 번들 크기를 줄일 수 있습니다.</p>
      <pre><code>// 서버 컴포넌트 예시
export default async function Page() {
  const data = await fetchData(); // 서버에서 직접 데이터를 가져올 수 있습니다.
  
  return (
    &lt;div&gt;
      &lt;h1&gt;{data.title}&lt;/h1&gt;
      &lt;p&gt;{data.content}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>클라이언트 컴포넌트</h2>
      <p>클라이언트에서 실행되어야 하는 컴포넌트는 파일 상단에 'use client' 지시어를 추가하여 클라이언트 컴포넌트로 만들 수 있습니다.</p>
      <pre><code>'use client'

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>데이터 페칭</h2>
      <p>App Router에서는 서버 컴포넌트에서 직접 데이터를 가져올 수 있습니다. 이를 통해 클라이언트 측 데이터 페칭의 복잡성을 줄일 수 있습니다.</p>
      <pre><code>// 서버 컴포넌트에서 데이터 페칭
export default async function Page() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return (
    &lt;div&gt;
      &lt;h1&gt;{data.title}&lt;/h1&gt;
      &lt;p&gt;{data.content}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>로딩 상태와 에러 처리</h2>
      <p>App Router에서는 'loading.tsx'와 'error.tsx' 파일을 사용하여 로딩 상태와 에러 처리를 쉽게 구현할 수 있습니다.</p>
      <pre><code>// app/blog/loading.tsx
export default function Loading() {
  return &lt;div&gt;로딩 중...&lt;/div&gt;;
}

// app/blog/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    &lt;div&gt;
      &lt;h2&gt;에러가 발생했습니다.&lt;/h2&gt;
      &lt;p&gt;{error.message}&lt;/p&gt;
      &lt;button onClick={reset}&gt;다시 시도&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>결론</h2>
      <p>Next.js App Router는 React 18의 새로운 기능들을 활용하여 더 효율적인 라우팅 시스템을 제공합니다. 서버 컴포넌트, 레이아웃, 로딩 상태, 에러 처리 등 다양한 기능들을 통해 더 나은 사용자 경험을 제공할 수 있습니다. 이러한 기능들을 적극적으로 활용하여 더 나은 웹 애플리케이션을 만들어 보세요!</p>
    `,
  },
]

