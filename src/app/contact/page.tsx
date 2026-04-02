export default function ContactPage() {
  return (
    <div style={{ marginTop: '3rem', maxWidth: '600px', margin: '3rem auto 0' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>인사 나누기</h1>
        <p style={{ color: '#888', fontStyle: 'italic', fontFamily: 'var(--font-serif)', lineHeight: '1.7' }}>
          "저의 일상을 읽어주셔서 감사합니다. <br />
          소중한 인사를 남겨주시면 큰 힘이 됩니다."
        </p>
      </header>

      <section style={{ 
        backgroundColor: 'var(--accent-soft)', 
        padding: '3rem', 
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
      }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#444', fontSize: '0.9rem' }}>이름</label>
            <input type="text" placeholder="당신의 이름" style={{ 
              width: '100%', 
              padding: '1rem', 
              borderRadius: '8px', 
              border: '1px solid #ddd',
              outline: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem'
            }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#444', fontSize: '0.9rem' }}>메시지</label>
            <textarea rows={5} placeholder="전하고 싶은 따뜻한 한마디..." style={{ 
              width: '100%', 
              padding: '1rem', 
              borderRadius: '8px', 
              border: '1px solid #ddd',
              outline: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              resize: 'none'
            }}></textarea>
          </div>

          <button type="button" style={{ 
            backgroundColor: 'var(--accent)', 
            color: 'white', 
            padding: '1rem', 
            borderRadius: '8px', 
            border: 'none', 
            fontWeight: '700',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            marginTop: '1rem'
          }}>
            메시지 보내기
          </button>
        </form>
      </section>

      <div style={{ marginTop: '4rem', textAlign: 'center', color: '#aaa', fontSize: '0.9rem' }}>
        <p>또는 이메일로 연락주세요: <b>alstjd0263@naver.com</b></p>
      </div>
    </div>
  );
}
