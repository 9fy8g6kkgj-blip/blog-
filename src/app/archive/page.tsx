import postsData from "@/data/posts.json";
import Link from 'next/link';

export default function ArchivePage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...postsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div style={{ marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0' }}>
      <header style={{ marginBottom: '5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>기록 보관소</h1>
        <p style={{ color: '#888', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
          "차곡차곡 쌓여가는 소중한 순간들"
        </p>
      </header>

      <section style={{ marginBottom: '5rem' }}>
        {sortedPosts.map((post) => (
          <div key={post.slug} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'baseline',
            padding: '1.5rem 0',
            borderBottom: '1px solid var(--divider)'
          }}>
            <Link href={`/posts/${post.slug}`} style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2a2a2a' }}>
              {post.title}
            </Link>
            <span style={{ fontSize: '0.9rem', color: '#aaa', fontFamily: 'var(--font-serif)' }}>
              {post.date}
            </span>
          </div>
        ))}
      </section>

      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <Link href="/" style={{ color: 'var(--accent)', fontWeight: '600', borderBottom: '2px solid var(--accent)', paddingBottom: '3px' }}>
          일기 피드로 돌아가기
        </Link>
      </div>
    </div>
  );
}
