# React - Coin tracker (Challenge)

### Vite + React + TypeScript로 코인 시세 웹 사이트를 만듭니다. (Challenge)

<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Styled&dash;Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>  
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/React&dash;Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/>

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
         `import { ThemeProvider } from "styled-components";`
         ```
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

---

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.
