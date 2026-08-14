# 이 폴더가 홈페이지 콘텐츠 전부입니다

**파일 1개 = 화면의 항목 1개.** 파일을 추가/수정/삭제하고 저장소 루트에서 `npm run build`를 실행하면 반영됩니다.

| 폴더 | 화면 | 형식 |
|---|---|---|
| `news/` | 소식 (`/news`) + 홈 최근 소식 · `award:` 블록이 있으면 수상(`/awards`)에도 자동 표시 | `YYYY-MM-DD-slug.md` |
| `publications/` | 논문 (`/publications`) · `"selected": true`면 홈 대표 논문 | `NN.json` |
| `projects/` | 프로젝트 (`/projects`) | `NN.json` |
| `team/` | 구성원 (`/people`) · 사진은 `public/img/people/`에 넣고 `"photo"`에 경로 지정 | `NN.json` |
| `alumni/` | 졸업생 (`/people` 하단) | `NN.json` |
| `research/` | 홈 연구 분야 카드 | `NN.json` |

- `NN` 번호 순서 = 화면 표시 순서. 새 항목은 다음 번호로 만드세요.
- 모든 텍스트는 `{ "en": "...", "ko": "..." }` 영/한 쌍으로, 완결된 문장으로 씁니다.
- 필드 정의(스키마)와 주석: [`config.ts`](config.ts)
- 전체 안내와 복사용 템플릿: **[/CONTENT.md](../../CONTENT.md)**

※ 홈 상단 소개문, 교수(PI) 정보, 메뉴는 여기 없고 `src/data/site.json`에 있습니다.
