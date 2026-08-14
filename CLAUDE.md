# BALAB Homepage — 세션 안내

부경대 BALAB(비즈니스 애널리틱스 연구실) 공식 홈페이지. Astro 4 정적 사이트.

## 콘텐츠 수정 규칙
- **모든 콘텐츠 ↔ 파일 매핑은 `CONTENT.md`에 정의되어 있다. 콘텐츠 작업 전 반드시 읽을 것.**
- 콘텐츠 수정은 `src/content/`(컬렉션)와 `src/data/site.json`에서만 한다. 페이지 템플릿(`src/pages/*.astro`)은 레이아웃 변경 요청일 때만 수정.
- 모든 텍스트는 `{en, ko}` 이중언어 쌍. 두 언어 모두 채우고, 완결형 문장으로 쓴다.
- 수상 소식은 뉴스 md의 `award:` 블록으로만 기록한다 (/awards는 자동 파생 — 별도 파일 없음).
- 구성원 사진: `public/img/people/`에 파일 + team JSON의 `photo` 필드. 비면 이니셜 placeholder.

## 빌드·서빙
- `npm run build` → `dist/` 생성. `./start.sh` → :4002 정적 서빙 (호스트:12011로 노출).
- 서버는 dist를 서빙하므로 **수정 후 반드시 build**. 사용자에게 강력 새로고침 안내.
