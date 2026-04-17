import Link from 'next/link';
import postsData from '@/data/posts.json';

export default function ArchivePage() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>아카이브 목록</h1>
      {postsData.map((post: any) => (
        <div key={post.id} style={{ marginBottom: '15px' }}>
          <Link href={`/posts/${post.slug}`} style={{ fontWeight: 'bold' }}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}