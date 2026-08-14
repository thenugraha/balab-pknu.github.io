# site.json — 사이트 전반 설정

`site.json` 하나가 다음을 담당합니다:

| 필드 | 화면 |
|---|---|
| `name`, `fullName`/`fullNameKo` | 홈 큰 타이틀 "BALAB · 비즈니스 애널리틱스 연구실", 로고 옆 이름, 푸터 |
| `statement` | 홈 타이틀 아래 연구실 소개문 (한 문단) |
| `stats` | 홈 통계 (피인용·h-지수·i10-지수) — 숫자 갱신은 여기서 |
| `pi.*` | 교수 정보 — 이름·직함·학부·소속·주소·이메일·소개(`bio`)·경력/학력/자문(`career`)·사진(`photo`) |
| `nav` | 상단 메뉴 |
| `socials` | 푸터·버튼의 Email / Google Scholar / CV 링크 |

수정 후 `npm run build`. 전체 안내: **[/CONTENT.md](../../CONTENT.md)**
