# React - Coin tracker (Challenge)

### Vite + React + TypeScript로 코인 시세 웹 사이트를 만듭니다. (Challenge)

<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Styled&dash;Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>  
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/React&dash;Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/React&dash;Query-FF4154?style=flat-square&logo=reactquery&logoColor=white"/> <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white"/> <img src="https://img.shields.io/badge/React&dash;Helmet&dash;Async-61DAFB?style=flat-square&logoColor=white"/> <img src="https://img.shields.io/badge/ApexChart-00e396?style=flat-square&logoColor=white"/>

---

- **23-11-20 : #2.0 ~ #2.7 / Styled-Components (+ Quiz)**
  - Vite로 프로젝트 생성
    - `npm create vite@latest`
    - React + TypeScript + SWC
    - 더미 파일 삭제
  - Styled-Components 패키지
    - React에서 CSS 스타일을 작성하는 데 사용하는 JS 라이브러리
      - 스타일을 컴포넌트에 직접 삽입하는 방식으로 작동하며, 이로써 컴포넌트 기반의 스타일링을 쉽게 구현할 수 있음
    - 설치법 : `npm i styled-components`
    - 선언법 : `` const 컴포넌트명 = styled.HTML태그명` ... `; ``
    - 사용법 : 컴포넌트명을 return문에서 HTML태그 대신에 그대로 사용
      - 자동으로 랜덤한 클래스명을 가짐 (클래스명을 지정할 필요가 없음)
  - props(프로퍼티)를 사용해 스타일링
    - 컴포넌트에서 props(프로퍼티)를 사용하여, Styled-Components에 값을 전달 할 수 있음
    - 사용법 (TypeScript)
      ```
      const 컴포넌트명 = styled.HTML태그명<{ 프로퍼티명: 타입}>`
        CSS속성명 : ${props => props.프로퍼티명}
      `;
      ```
    - 프로퍼티명의 접두사에 '$'기호 사용을 권장
  - 상속 스타일링
    - 기존 컴포넌트의 모든 것을 가져와, 새로운 것을 더하거나 수정하기 위해 사용
    - 사용법 : `` const 컴포넌트명 = styled(상속컴포넌트명)` ... `; ``
  - 컴포넌트의 'as' 프로퍼티
    - 상속하여 스타일링 시 HTML의 태그명을 바꾸고 싶을 때 사용
    - 사용법 : `<컴포넌트명 as="HTML태그명" />`
  - .attrs()
    - Styled-Components가 컴포넌트 생성 시 속성값을 설정할 수 있게하는 방법
    - 사용법 : `` const 변수명 = styled.HTML태그명.attrs({ 프로퍼티 })` ... `; ``
  - 애니메이션
    - `import { keyframes } from "styled-components";`
    - 선언법 : `` const 변수명 = keyframes` ... `; ``
  - 선택자 : SCSS처럼 선택자를 사용 가능
  - theme
    - 모든 색상들을 가지고 있는 object
      - 추후에 색상을 바꿀 때, 하나씩 바꿀 필요없이 object만 바꿔주면 되므로 편리함
    - 설정법
      1. 'index.tsx'에서 '&lt;ThemeProvider&gt;'로 &lt;App /&gt;을 감싸주기
         ```
         import { ThemeProvider } from "styled-components";
         <ThemeProvider>
           <App />
         <ThemeProvider />
         ```
      2. '&lt;ThemeProvider&gt;'의 필수 속성인 'theme' 제공하기
         - theme 객체를 생성하고, 해당 객체를 theme속성값으로 제공해야 함
    - 사용법 : `CSS속성명 : ${props => props.theme.키명}`
    - &lt;ThemeProvider&gt;의 'theme' 속성값만 바꾸면, 자동으로 다 바뀜
      - theme 객체들은 같은 프로퍼티명을 사용해야 함
      - 스타일링에서는 참조할 뿐임
- **23-11-21 : #3.0 ~ #3.7 / TypeScript (+ Quiz)**
  - TypeScript
    - JavaScript를 기반으로 한 프로그래밍 언어
    - 프로그래밍 언어가 작동하기 전에 타입을 확인함
    - 컴파일 시 JavaScript로 컴파일 함
  - CRA + TypeScript
    - 설치법 : `npx create-react-app 경로 --template typescript`
    - 몇 라이브러리는 TypeScript가 포함되어있지 않음
      - `npm i -D @types/라이브러리명`을 실행해 라이브러리 추가 설치
  - interface문
    - object의 모양을 TS에게 설명해주는 개념
    - 선언법 : `interface 변수명 { ... }`
      - 키명의 접미에 '?'기호 추가 시 옵션 사항으로 설정'
  - 병합 연산자 '??' (초기값 선언)
    - 변수의 타입이 'null' 또는 'undefined'일 시 '??' 기호의 우측 피연산자를 반환
  - Event Listener 사용 시 event의 타입
    - 기본형 : `React.이벤트명<HTML요소명>`
      - 사용할 이벤트에 커서를 올려, 이벤트의 타입을 확인 가능
    - 'event.currentTarget' : React에서 'event.target' 대신에 사용
  - theme + TS
    - styled-components의 theme 객체의 타입을 선언해주어야 함
    - 설정법
      1. 테마의 선언 파일을 생성하기
         - src 폴더 내에 `styled.d.ts` 파일을 생성
         - <a href="https://styled-components.com/docs/api#typescript" target="_blank">공식문서</a>에서 코드를 복붙
      2. 'theme' 객체의 타입 정의하기
         - ex.
           ```
           import "styled-components";
           declare module "styled-components" {
             export interface DefaultTheme {
               textColor: string;
               bgColor: string;
             }
           }
           ```
      3. 'theme' 객체 생성하기
         - 정의한 'DefaultTheme' 인터페이스를 불러와서 사용
         - ex.
           ```
           import { DefaultTheme } from "styled-components";
           export const darkTheme: DefaultTheme = {
             textColor: "whitesmoke",
             bgColor: "#222",
           };
           ```
- **23-11-22 : #4.0 ~ #4.8 + #5.0 ~ #5.4 / React router v6 + Crypto tracker(1) (+ Code Challenge(3 days)[1st day])**
  - BrowserRouter
    - React-Router-Dom에서의 라우터를 만드는 클래식버전(v5)의 방법
      - 컴포넌트 형식
    - 사용법 : 최상위에서 &lt;BrowserRouter&gt;로 감싸주어야 함
      - &lt;Routes&gt; 안에 `<Route path="경로" element={컴포넌트} />`를 사용해 라우터 생성
      - 항상 보여지는 컴포넌트는 &lt;Routes&gt; 밖에 위치
    - ex.
      ```
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      ```
  - createBrowserRouter
    - v6에서의 라우터를 만드는 방법
      - 라우터를 array 형식으로 표현
    - 선언법
      ```
      const 변수명 = createBrowserRouter([
        {
          path: 경로,
          element: 컴포넌트,
        },
        ......
      ]);
      ```
    - 사용법 : `<RouterProvider router={라우터변수} />`
    - 옵션으로 하위경로를 'children' 프로퍼티를 통해 사용 가능
      ```
      children: [
        {
          path: 경로,
          element: 컴포넌트
        }
      ]
      ```
      - '&lt;Outlet&gt;' 컴포넌트를 통해 하위요소를 보여줌
  - errorElement
    - 경로가 없거나 충돌 등의 에러 시 특정 컴포넌트를 보여주도록 하는 역할
    - 사용법 : 라우터 객체에서 'errorElement' 프로퍼티로 사용
      - 기본형 : `errorElement: 컴포넌트`
    - 루트에서가 아닌 컴포넌트에서 사용 시 다른 컴포넌트에서 발생하는 문제로부터 보호함
      - 컴포넌트가 error가 발생해도, app 자체를 죽이지 않음
  - useNavigate()
    - 사용자를 다른 경로로 보내는 hook
      - &lt;Link&gt;랑 같은 기능이지만, &lt;Link&gt;는 사용자가 직접 클릭해야 함
    - 사용법
      ```
      const 변수명 = useNavigate(); // 선언
      변수명(경로); // 실행
      ```
  - useParams()
    - URL의 dynamic parameter(:이름)의 값을 가져오는 hook
    - 기본형 : `const 변수명 = useParams();`
  - useOutletContext()
    - 상위경로에서 보낸 데이터를 &lt;Outlet&gt;(자식경로)에서 받는 hook
    - 데이터 송신 방법 : `<Outlet context={데이터} />`
    - 데이터 수신 방법 : `const 변수명 = useOutletContext<제네릭>();`
  - useSearchParams()
    - 'search 파라미터'를 읽기/수정하는 hook
      - search 파라미터 : URL에서 '?' 뒤에 오는 파라미터
    - 기본형 : `const [읽기변수, 수정변수] = useSearchParams();`
      - 'useState()'와 형태가 비슷함
    - 'URLSearchParams' 객체를 반환함
      - 일반 JavaScript의 데이터 타입 중 하나
      - 여러 메서드들 사용 가능
  - createGlobalStyle
    - styled-components에서 전역 스타일링에 대한 컴포넌트를 생성하는 함수
    - 선언법 : `` const 변수명 = createGlobalStyle`...`; ``
  - 즉시 실행 함수 표현(IIFE, Immediately Invoked Function Expression)
    - 정의되자마자 즉시 실행되는 JavaScript Function
      - 함수의 선언과 실행을 한 번에 하는 방법
    - 기본형 : `(함수선언)();`
    - ex.
      ```
      useEffect(() => {
        (async () => {
          const data = await (await fetch(URL경로)).json();
          console.log(data);
        })();
      }, []);
      ```
  - &lt;Link&gt; 컴포넌트를 이용해 데이터를 보내는 방법
    - URL을 사용하지 않고, state를 사용해 데이터를 보낼 것
    - 송신 기본형 : `<Link to={경로} state={데이터} />`
      - ex. `` <Link to={`${coin.id}`} state={{ name: coin.name }} /> ``
    - 수신 기본형 : `const 변수명 = useLocation();`
      - '변수.state'에서 데이터 확인이 가능함
      - TypeScript의 제네릭을 지원하지 않으므로, 말미에 'as 타입'을 적어줌
    - fetch API 보다 속도가 빠르기 때문에, app이 빠르게 동작하는 것처럼 보임
    - &lt;Link&gt;로부터 데이터를 가져오는 것이기 때문에, URL을 입력해 직접 이동 시 데이터를 가져오지 않음에 주의
- **23-11-23 : Crypto tracker(2) (+ Code Challenge(3 days)[2nd day])**
- **23-11-24 : #5.5 ~ #5.16 + #6.0 ~ #6.4 / Crypto tracker(3) (+ Code Challenge(3 days)[3rd day])**
  - 콘솔로부터 TypeScript interface를 생성하는 방법'
    1. 콘솔에서 데이터 값을 우클릭 후 '전역변수로 object 저장'하기
       - 새로운 변수에 값이 저장됨
    2. `Object.keys(변수명).join()`을 이용해 모든 키명을 가져오기
    3. `Object.values(변수명).map(v => typeof v).join()`을 이용해 모든 타입 가져오기
  - Nested Route (중첩된 라우트)
    - route 안에 존재하는 또 다른 route
    - 웹 사이트 내에 탭이나 섹션이 나뉘어진 곳이 많을 때 편리함
    - 사용법 (v6)
      1. Router에서 하위 route 생성하기
         - 'children' 프로퍼티를 사용
      2. 상위 컴포넌트에서 `<Outlet />`으로 하위 컴포넌트를 보여주기
  - useMatch()
    - 현재 위치를 기준으로 지정된 경로의 경로에 대한 일치 데이터를 반환하는 hook (react-router-dom의 hook)
      - 경로 일치 시 데이터 object를 반환
      - 경로 불일치 시 null을 반환
    - 기본형 : `const 변수명 = useMatch(경로);`
      - 상대경로 사용 불가능
  - React-Query 패키지
    - React 앱에서 데이터를 관리하고 처리하기 위한 강력한 라이브러리
      - 서버와의 데이터 통신, 상태 관리, 캐싱, 리패칭, 오류 처리 등을 간편하게 처리할 수 있음
      - fetch 데이터를 캐시에 저장하므로, 경로를 돌아와도 re-fetch하지 않음
    - 설치법 : `npm i @tanstack/react-query`
    - 설정법
      1. 'QueryClient()'를 사용해 'client' 생성하기
         - 기본형 : `const 변수명 = new QueryClient();`
      2. 앱을 '&lt;QueryClientProvider&gt;'로 감싸주기
         - 기본형 : `<QueryClientProvider client={클라이언트변수}>`
      - ex.
        ```
        import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
        const client = new QueryClient();
        <QueryClientProvider client={client}>
          <ThemeProvider theme={darkTheme}>
            <App />
          </ThemeProvider>
        </QueryClientProvider>
        ```
    - <a href="https://tanstack.com/query/latest/docs/react/overview" target="_blank">최신 공식 문서</a>
  - useQuery()
    - 비동기적으로 데이터를 가져오고 캐싱하며 상태를 관리하는 데 사용하는 hook (react-query의 hook)
    - 사용하기 전 fetcher함수를 미리 선언해야 함
      - fetcher함수는 무조건 fetch promise(json데이터)를 return해야 함
      - 컴포넌트와 떨어진 파일에 선언하는 것을 권장
    - 사용법 (v5)
      ```
      const { 프로퍼티들 } = useQuery<제네릭>({
        queryKey: 쿼리키,
        queryFn: fetcher 함수
      });
      ```
      - 옵션
        - queryKey : (string[]) query의 고유식별자(이름)
        - queryFn : fetcher함수
      - 프로퍼티들
        - isLoading : (boolean) 로딩 유무
        - data : fetch 데이터
        - isError
        - Error
    - ex.
      ```
      const { isLoading, data } = useQuery<ICoin[]>({
        queryKey: ["All Coins"],
        queryFn: fetchCoins,
      });
      ```
  - React-Query Devtools 패키지
    - 캐시에 존재하는 query를 볼 수 있는 패키지
      - 기본적으로 React-Query Devtools는 번들에만 포함되므로, 프로덕션 빌드 중에 제외하는 것에 대해 걱정할 필요가 없음 (배포 시 자동으로 제외됨)
    - 설치법 : `npm i @tanstack/react-query-devtools`
    - 설정법 : 앱에 `<ReactQueryDevtools initialIsOpen={true} />`를 추가
      - initialIsOpen : 자동으로 열려있는 상태
    - <a href="https://tanstack.com/query/v4/docs/react/devtools" target="_blank">공식 문서</a>
  - ApexCharts 패키지
    - JavaScript 차트 라이브러리
    - 설치법 : `npm i react-apexcharts apexcharts`
      - <a href="https://apexcharts.com/docs/react-charts/" target="_blank">React 앱에서 사용 시 통합 패키지를 설치</a>
    - <a href="https://apexcharts.com/docs/installation/" target="_blank">공식 문서</a>
    - 사용법
      1. 차트의 틀 가져오기
         - 차트의 타입과 데이터를 입력해야 함
         - 기본형
           ```
           import ApexCharts from "react-apexcharts";
           <ApexCharts type="차트타입" series={데이터} />
           ```
         - 데이터 : `[{ name: 이름, data: 데이터 }, ...]`
      2. 옵션 추가하기
         - 'option' 프로퍼티를 사용해 추가
           - chart : width, height, toolbar 등 기본 옵션
           - theme : 테마
           - grid : 줄무늬
           - stroke : 차트 데이터의 선
           - xaxis, yaxis : x축, y축
           - fill : 차트 데이터의 색상
           - color
           - tooltip : 커서를 올렸을 때 나오는 툴팁
  - React-Helmet-Async 패키지
    - React 앱에서 페이지의 &lt;head&gt; 요소를 동적으로 조작하고 관리하기 위한 라이브러리
    - 설치법 : `npm i react-helmet-async`
    - 설정법 : 앱을 '&lt;HelmetProvider&gt;'로 감싸주기
    - 사용법 : `<Helmet> ... </Helmet>`
- **23-11-25 : #6.0 ~ #6.4 / Recoil + Publish**
  - _Update_
    - _다크/라이트 모드 토클 버튼_
    - _홈으로 가는 버튼_
    - _candlestick 차트 생성_
    - _'/:coinId/price' 탭 구현_
  - Recoil 패키지
    - React에서 사용할 수 있는 state management 라이브러리
      - global state를 앱의 분리된 공간에서 관리함
    - 설치법 : `npm i recoil`
    - 설정법 : 앱을 '&lt;RecoilRoot&gt;'로 감싸주기
  - Atom
    - Recoil에서 atom은 state의 일부를 나타냄
    - 선언법
      ```
      const 아톰명 = atom({
        key: 키명,
        default: 초기값
      });
      ```
    - 읽기 사용법 : `const 변수명 = useRecoilValue(아톰명);`
    - 쓰기 사용법 : `const 수정함수명 = useSetRecoilState(아톰명);`
    - 읽기/쓰기 사용법 : `const [변수명, 수정함수명] = useRecoilState(아톰명);`
      - 'useState()'와 같은 방식으로 동작함
  - Vite 배포 방법 (gh-pages)
    1. 'gh-pages' 패키지 설치하기
       - `npm i gh-pages`
    2. 배포할 홈페이지 설정하기
       - 'package.json'에서 "homepage" 입력
         - ex. `"homepage": "https://dition0221.github.io/react_challenge-coin_tracker/"`
       - <a href="https://ko.vitejs.dev/guide/static-deploy.html" target="_blank">'vite.config.ts'에서 'base'프로퍼티로 basename 입력</a>
         - 기본형 : `base: "/레포지토리명/"`
         - 'plugins'프로퍼티보다 앞부분에 위치해야 함
         - <a href="https://ko.vitejs.dev/config/#conditional-config" target="_blank">개발/배포 나누어서 설정</a>
         - ex.
           ```
           export default defineConfig(({ command }) => {
             if (command === "serve") {
               // Develope
               return {
                 plugins: [react()],
               };
             } else {
               // Build
               return {
                 base: "/react_challenge-coin_tracker/",
                 plugins: [react()],
               };
             }
           });
           ```
    3. React-Router의 'basename' 입력하기
       - 기본형(v6) : `const 변수명 = createBrowserRouter(라우터, { basename: 값 });`
       - ex. `{ basename: import.meta.env.DEV ? "/" : "/react_challenge-coin_tracker/" }`

---

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.
