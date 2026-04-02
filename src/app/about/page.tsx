import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0' }}>
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '800' }}>안녕하세요, alstjd입니다.</h1>
        <p style={{ color: '#888', fontSize: '1.2rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
          "평범함 속에서 특별한 조각을 찾는 대학생"
        </p>
      </header>

      <section style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '15px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <Image 
            src="/about_profile_diary.png" 
            alt="My Daily Life" 
            fill 
            style={{ objectFit: 'cover' }}
          />
        </div>


        <div className="entry-content" style={{ fontSize: '1.15rem', color: '#555', lineHeight: '2', textAlign: 'left', width: '100%' }}>
          <p style={{ marginBottom: '2rem' }}>
            저는 대학교를 다니고 있는 아주 평범한 대학생입니다. 하지만 저의 하루는 제가 사랑하는 일들로 가득 차 있죠. <br />
            학교 강의가 끝나면 친구들과 함께 설레는 점심 메뉴를 고민하고, 시끌벅적하게 웃으며 식사하는 시간을 가장 좋아합니다.
          </p>

          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', borderLeft: '4px solid var(--accent)', paddingLeft: '1.2rem', color: '#2a2a2a' }}>⚽ 그라운드 위의 열정</h3>
          <p style={{ marginBottom: '2.5rem' }}>
            점심을 든든히 먹은 후에는 운동장으로 향합니다. 친구들과 땀 흘리며 축구공을 쫓다 보면, 학업에서 오는 스트레스가 한 방에 날아가는 기분이 듭니다. 승패도 중요하지만, 함께 호흡을 맞추는 그 순간이 저에게는 가장 큰 활력소입니다.
          </p>

          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', borderLeft: '4px solid var(--accent)', paddingLeft: '1.2rem', color: '#2a2a2a' }}>💪 오늘 하루의 완성, 헬스</h3>
          <p style={{ marginBottom: '3rem' }}>
            해가 저물면 저는 헬스장으로 향합니다. 매일 스스로의 한계를 조금씩 넘어서는 그 정직한 시간이 좋습니다. '오운완(오늘 운동 완료)'을 외치며 흘리는 땀방울은 제 하루를 가장 뿌듯하게 마무리하는 의식과도 같습니다.
          </p>

          <p style={{ textAlign: 'center', marginTop: '5rem', fontStyle: 'italic', color: '#999' }}>
            이 블로그는 저의 이런 소소하고도 뜨거운 일상의 조각들을 모아두는 곳입니다. <br />
            방문해 주셔서 감사합니다.
          </p>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <Link href="/" style={{ color: 'var(--accent)', fontWeight: '600', borderBottom: '2px solid var(--accent)', paddingBottom: '3px' }}>
          일기 피드로 돌아가기
        </Link>
      </div>
    </div>
  );
}
