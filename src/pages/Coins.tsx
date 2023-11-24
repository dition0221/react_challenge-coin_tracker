import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api"; // API
import { Helmet } from "react-helmet-async";
// Components
import Header from "../components/Header";

const Wrapper = styled.div`
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: whitesmoke;
  color: black;
  border-radius: 15px;
  margin-bottom: 10px;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
  }
  &:hover,
  &:active {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.accentColor};
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
  // Fetch API: All coins data
  const { isLoading, data } = useQuery<ICoin[]>({
    queryKey: ["All Coins"],
    queryFn: fetchCoins,
  });

  return (
    <Wrapper>
      <Helmet>
        <title>Coins | dition0221</title>
      </Helmet>

      <Header title="Coins" />

      {isLoading ? (
        <Loader>Loading..</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  alt="icon"
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
