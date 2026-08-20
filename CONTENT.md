# CONTENT.md — 어떤 파일이 화면 어디에 연결되는가

홈페이지에 보이는 **모든 글·데이터는 아래 파일에서 나옵니다.** 페이지 템플릿(`src/pages/*.astro`)은 건드릴 필요 없이 해당 파일만 수정하면 됩니다.

수정 후 반영:

```bash
npm run build     # dist/ 재생성 → 브라우저 강력 새로고침(Ctrl+Shift+R)
./start.sh        # 서버가 꺼져 있을 때만 필요
```

모든 텍스트는 `{ "en": "...", "ko": "..." }` **영어/한국어 쌍**입니다. 두 언어 모두 채우고, 문장은 완결형(마침표로 끝냄)으로 씁니다.

---

## 홈 (`/`) — 위에서 아래 순서대로

| 화면 요소 | 파일 : 필드 |
|---|---|
| 눈썹줄 "부경대학교" | `src/data/site.json` : `pi.institution` |
| 큰 타이틀 "BALAB · 비즈니스 애널리틱스 연구실" | `src/data/site.json` : `name`, `fullName`/`fullNameKo` |
| 타이틀 아래 연구실 소개문 (한 문단) | `src/data/site.json` : `statement` |
| 통계 (피인용 740+ · h-지수 · i10-지수) | `src/data/site.json` : `stats` |
| 교수 소개 — 이름·소개글·경력·학력·자문 | `src/data/site.json` : `pi.name`, `pi.bio`, `pi.career` |
| 교수 소개 오른쪽 — 직함·학부·주소·이메일·CV 링크 | `src/data/site.json` : `pi.title`, `pi.dept`, `pi.office`, `pi.email` / CV 파일은 `public/cv/JihwanLee_CV.pdf` |
| 연구 분야 카드 4개 | `src/content/research/01.json`–`04.json` — **파일 1개 = 카드 1개**, 번호 순서 = 표시 순서 |
| 대표 논문 | `src/content/publications/NN.json` 중 `"selected": true`인 것 |
| 최근 소식 4건 | `src/content/news/`에서 날짜 최신순 4건 자동 표시 |

## 논문 (`/publications`)

| 화면 요소 | 파일 |
|---|---|
| 논문 1편 | `src/content/publications/NN.json` — 파일 1개 = 논문 1편, 연도별 자동 그룹핑 |
| ★ 대표 표시 / 심사중 배지 | 같은 파일의 `"selected": true` / `"status": "under review"` |

## 프로젝트 (`/projects`)

| 화면 요소 | 파일 |
|---|---|
| 과제 1건 | `src/content/projects/NN.json` — 파일 1개 = 과제 1건 |
| "진행 중" / "국가과제" / "산업체" 섹션 구분 | 같은 파일의 `"status": "current"/"completed"`, `"category": "National"/"Industry"` |

## 구성원 (`/people`)

| 화면 요소 | 파일 |
|---|---|
| 교수(PI) 카드 | `src/data/site.json` : `pi.*` (사진은 `pi.photo`) |
| 구성원 1명 | `src/content/team/NN.json` — 파일 1개 = 사람 1명, 번호 순서 = 표시 순서 |
| **구성원 사진** | 사진 파일을 `public/img/people/`에 넣고 해당 JSON의 `"photo": "/img/people/파일명.jpg"` 지정. 비워두면(`""`) 이니셜 원형 아바타가 placeholder로 표시됨. 정사각형 권장 |
| 졸업생 | `src/content/alumni/NN.json` — 사진은 구성원과 동일하게 `public/img/people/` + `"photo"` 필드 (비우면 이니셜 아바타). 졸업논문 제목은 `"thesis"` 필드 (국문 제목이 없으면 en/ko 모두 공식 영문 제목) |

## 소식 (`/news`) · 수상 (`/awards`)

| 화면 요소 | 파일 |
|---|---|
| 소식 1건 | `src/content/news/YYYY-MM-DD-slug.md` — 파일 1개 = 소식 1건, 날짜 자동 정렬 |
| 소식 사진 | 사진을 `public/img/news/`에 넣고 frontmatter의 `image:`(1장) 또는 `images:`(여러 장)에 경로 지정 |
| **수상 페이지** | **별도 파일 없음** — 뉴스 md에 `award:` 블록이 있으면 `/awards`에 자동으로 나타남 (한 번만 쓰면 소식+수상 양쪽에 표시) |

## 모든 페이지 공통

| 화면 요소 | 파일 : 필드 |
|---|---|
| 상단 메뉴 | `src/data/site.json` : `nav` |
| 푸터 링크 (Email · Scholar · CV) | `src/data/site.json` : `socials` |
| 로고 이미지 | `public/img/balab-mark.png`, `balab-logo.png` |
| 색·폰트 등 디자인 토큰 | `src/styles/global.css` 상단 `:root` |
| 각 컬렉션의 필드 정의(스키마) | `src/content/config.ts` (주석 포함) |

---

## 자주 하는 작업 예시

### 소식 추가 (수상 포함)

`src/content/news/2026-09-01-my-news.md` 파일을 새로 만들면 끝:

```markdown
---
date: 2026-09-01
title:
  en: "Short headline"
  ko: "짧은 제목"
image: /img/news/my-photo.jpg        # 사진 1장 (public/img/news/에 파일 넣기)
# images: [/img/news/a.jpg, /img/news/b.jpg]   # 여러 장이면 images 사용
en: "Full sentence description. Inline <strong>HTML</strong> allowed."
ko: "완결된 문장으로 쓴 설명입니다."
award:                               # 수상 소식일 때만 — /awards에 자동 반영
  - rank: { en: "Grand Prize", ko: "대상" }
    competition: { en: "...", ko: "..." }
    host: { en: "...", ko: "..." }
    members: "참여 학생 이름"
---
```

### 구성원 추가 / 사진 넣기

`src/content/team/07.json`처럼 다음 번호로 파일 추가:

```json
{
  "name": { "en": "Gildong Hong", "ko": "홍길동" },
  "role": { "en": "M.S. student", "ko": "석사과정" },
  "focus": { "en": "Applied machine learning", "ko": "응용 머신러닝" },
  "email": "hong@pukyong.ac.kr",
  "photo": "/img/people/gildong-hong.jpg"
}
```

### 논문 추가

`src/content/publications/`에 다음 번호 JSON 추가. 홈 대표 논문에 올리려면 `"selected": true`.

```json
{
  "year": 2026,
  "status": "published",
  "selected": false,
  "title": "Paper title",
  "authors": "A. Author, B. Author, Jihwan Lee",
  "venue": "Journal Name",
  "url": "https://doi.org/..."
}
```

### 연구 분야 문구 수정

`src/content/research/01.json`–`04.json`의 `blurb` 수정. 카드 추가/삭제 = 파일 추가/삭제.
