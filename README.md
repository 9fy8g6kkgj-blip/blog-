# 🕯️ 오늘의 조각 (Today's Fragments)
### alstjd의 대학 생활 기록 보관소

평범한 일상의 순간들을 소중히 여기며, 그 파편들을 기록으로 엮어내는 개인 다이어리 블로그입니다.

## ✨ 주요 포인트
- **미니멀리즘 디자인**: 'Newsreader' 서체와 'Manrope' 서체를 활용한 세리프 중심의 고전적이고 감성적인 무드.
- **50개의 디자인 스냅샷**: 사이트의 모든 구석구석을 아카이빙한 50개의 디자인 시퀀스 (`_1` ~ `_50`).
- **정적 배포 최적화**: Next.js 기반의 정적 사이트 생성을 통해 빠른 로딩 속도와 안정성 확보.
- **자동화된 배포**: GitHub Actions를 통한 CI/CD 환경 구축 (GitHub Pages).

## 📂 프로젝트 구조
- `src/app`: Next.js 14/15 App Router 기반의 페이지 및 라우팅.
- `src/components`: 재사용 가능한 UI 컴포넌트 (PostCard 등).
- `src/data/posts.json`: 블로그 콘텐츠를 담은 중앙 데이터 소스.
- `_1` ~ `_50`: 사이트의 진화 과정과 주요 페이지의 디자인 스냅샷 보관.

## 🚀 시작하기

### 개발 서버 실행
```bash
npm install
npm run dev
```

### 정적 빌드 및 배포
```bash
npm run build
```
빌드 후 생성된 `out` 디렉토리의 파일을 통해 정적 호스팅이 가능합니다.

## 🛠️ 기술 스택
- **Framework**: Next.js 
- **Styling**: Tailwind CSS, Vanilla CSS
- **Deployment**: GitHub Pages
- **Font**: Google Fonts (Newsreader, Manrope)

---
© 2024 오늘의 조각 by alstjd. All pieces archived.
