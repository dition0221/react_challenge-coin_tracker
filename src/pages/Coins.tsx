import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: whitesmoke;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
  a {
    display: flex;
    align-items: center;
    padding: 20px;
  }
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch API
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch("https://api.coinpaprika.com/v1/coins")
      ).json();
      setCoins(data.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Wrapper>
      <Header>
        <Title>Coins</Title>
      </Header>

      {loading ? (
        <Loader>Loading..</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  alt=""
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Wrapper>
  );
}
