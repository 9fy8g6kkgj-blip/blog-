import postsData from "@/data/posts.json";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div style={{ marginTop: '2rem' }}>
      <header style={{ marginBottom: '5rem', borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '800' }}>나의 평범한, 대학 생활 조각들</h1>
        <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.8' }}>
          친구들과의 웃음 섞인 점심 식사, 운동장을 누비는 축구, 그리고 하루의 끝을 장식하는 헬스까지. <br />
          <b>alstjd</b>의 소소하지만 활기찬 대학생 일상을 기록하는 공간입니다.
        </p>
      </header>


      <section>
        {postsData.map((post) => (
          <PostCard 
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            category={post.category}
          />
        ))}
      </section>
    </div>
  );
}

