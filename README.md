# Nicolap

React + TypeScript + Vite + Supabase + React Router v7 기반 프로젝트

## 🚀 기술 스택

- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구
- **React Router v7** - 라우팅 (Lazy Loading 지원)
- **Supabase** - 인증 및 데이터베이스
- **Tailwind CSS** - 스타일링
- **shadcn/ui** - UI 컴포넌트
- **Sonner** - 토스트 알림

## 📋 시작하기

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Supabase 설정 방법:**

1. [Supabase](https://supabase.com) 에서 프로젝트 생성
2. Project Settings > API 에서 다음 정보 확인:
   - `Project URL` → `VITE_SUPABASE_URL`
   - `anon public` 키 → `VITE_SUPABASE_ANON_KEY`
3. Authentication > Providers 에서 Google OAuth 활성화
   - Google Cloud Console에서 OAuth 2.0 클라이언트 ID 생성
   - Authorized redirect URIs에 Supabase 콜백 URL 추가
   - Client ID와 Client Secret을 Supabase에 등록

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 열기

## 📁 프로젝트 구조

```
src/
├── components/        # 재사용 가능한 컴포넌트
│   └── ui/           # shadcn/ui 컴포넌트
├── features/         # 기능별 모듈
│   └── auth/         # 인증 관련 (useAuth hook)
├── lib/              # 유틸리티 및 설정
│   ├── supabase.ts   # Supabase 클라이언트
│   └── utils.ts      # 헬퍼 함수
├── pages/            # 페이지 컴포넌트
│   ├── index.tsx     # 메인 페이지 (인증 필요)
│   ├── login/        # 로그인 페이지
│   └── notfound.tsx  # 404 페이지
├── routes.ts         # React Router v7 라우트 설정
└── main.tsx          # 앱 진입점
```

## 🔐 인증 기능

### Google OAuth 로그인

- `/login` - 구글 계정으로 로그인
- 로그인 후 자동으로 메인 페이지(`/`)로 리다이렉트
- 로그인하지 않은 경우 자동으로 로그인 페이지로 리다이렉트

### 사용자 인증 훅

```tsx
import { useAuth } from "@/features/auth/useAuth";

function MyComponent() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  // user: 현재 로그인한 사용자 정보
  // loading: 인증 상태 로딩 중
  // signInWithGoogle: 구글 로그인 함수
  // signOut: 로그아웃 함수
}
```

## 🛠️ 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 📝 추가 명령어

```bash
# ESLint 검사
npm run lint

# 프로덕션 미리보기
npm run preview
```

## 🌟 주요 특징

- ✅ **React Router v7** - 최신 라우팅, 자동 코드 스플리팅
- ✅ **Supabase 인증** - 간편한 Google OAuth 로그인
- ✅ **TypeScript** - 완전한 타입 안전성
- ✅ **모던 UI** - Tailwind CSS + shadcn/ui
- ✅ **반응형 디자인** - 모바일/데스크톱 지원
- ✅ **토스트 알림** - Sonner를 이용한 사용자 피드백

## 📖 더 알아보기

- [React Router v7 문서](https://reactrouter.com)
- [Supabase 문서](https://supabase.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com)
- [Tailwind CSS 문서](https://tailwindcss.com)
