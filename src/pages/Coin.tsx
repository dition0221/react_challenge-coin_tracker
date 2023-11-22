import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface IRouteState {
  state: {
    name: string;
  };
}

export default function Coin() {
  const [loading, setLoading] = useState(true);

  // data
  const { state } = useLocation() as IRouteState;
  const { coinId } = useParams();

  return (
    <Wrapper>
      <Header>
        <Title>{state?.name || "Loading.."}</Title>
      </Header>

      {loading ? <Loader>Loading..</Loader> : null}
    </Wrapper>
  );
}
