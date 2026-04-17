import postsData from '@/data/posts.json';
import { notFound } from 'next/navigation';

// 50페이지 자동 생산 지시서
export function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = postsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{post.title}</h1>
      <hr style={{ marginBottom: '2rem' }} />
      <div style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
        {post.content}
      </div>
      <div style={{ marginTop: '3rem' }}>
        <a href="/" style={{ color: '#0070f3' }}>← 메인으로 돌아가기</a>
      </div>
    </main>
  );
}