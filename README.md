# BALAB 연구실 홈페이지

> ## 📝 콘텐츠를 고치러 왔다면 → **[CONTENT.md](CONTENT.md)**
>
> 코드를 몰라도 됩니다. 화면의 모든 글·사진이 어느 파일에 있는지, 소식·논문·구성원(사진 포함) 추가 방법까지 **CONTENT.md** 한 파일에 전부 있습니다.
>
> 3줄 요약:
> 1. `src/content/`(소식·논문·프로젝트·구성원·연구분야) 또는 `src/data/site.json`(홈 소개·교수 정보·메뉴)에서 해당 파일을 고친다
> 2. `npm run build` 실행
> 3. 브라우저 강력 새로고침(Ctrl+Shift+R)으로 확인한다

Astro 기반 정적 사이트. (al-folio에서 전환 — 이 환경에서 Ruby/도커 빌드가 막혀 Node 스택으로.)

## 미리보기 (이 서버)
```bash
cd /workspace/BALAB_Prof/BALAB_Homepage
npm install          # 최초 1회
npm run build        # dist/ 생성
./start.sh           # :4002 정적 서빙 (이미 떠 있으면 그대로)
```
nginx 게이트웨이 `port_12011.conf` → `127.0.0.1:4002` 연결됨 → **호스트:12011** 로 접속.
수정 후: `npm run build` → 브라우저 강력 새로고침.

## 구조
- `src/data/site.json` — 홈 히어로(소개문·통계)·교수(PI)·메뉴·푸터
- `src/content/` — 나머지 모든 콘텐츠 (파일 1개 = 항목 1개; 스키마는 `src/content/config.ts`)
- `src/pages/*.astro` — 페이지 템플릿 (콘텐츠 수정 시 건드릴 필요 없음)
- `src/styles/global.css` — 디자인 (색·폰트는 상단 `:root`)
- `public/img/` — 이미지 (뉴스 `img/news/`, 구성원 사진 `img/people/`)

## 배포 — GitHub Pages (자동)
- `main` 브랜치에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드·배포합니다.
- 커스텀 도메인: **https://balab.paz.works** (`public/CNAME` + name.com DNS의 `balab` CNAME → `ralbu85.github.io`)
- 저장소 Settings → Pages → Source가 **GitHub Actions**로 되어 있어야 합니다.

## 남은 것
- 프로필·구성원 사진 파일 넣기 — `public/img/people/`에 넣고 `photo` 필드 지정 (CONTENT.md 참고; placeholder는 이미 표시됨)
- 팀 정보 검수
