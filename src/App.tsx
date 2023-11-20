import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0);
    border-radius: 0px;
  } 50% {
    border-radius: 50%;
  } 100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.backgroundColor};
  animation: ${rotateAnimation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

export default function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😋</Emoji>
      </Box>
      <Emoji>😋</Emoji>
    </Wrapper>
  );
}
