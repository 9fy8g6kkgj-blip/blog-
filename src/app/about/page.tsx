import Link from 'next/link';
import postsData from '@/data/posts.json';

export default function HomePage() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>내 블로그 50페이지</h1>
      <ul>
        {postsData.map((post: any) => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <Link href={`/posts/${post.slug}`} style={{ fontSize: '18px', color: 'blue' }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}