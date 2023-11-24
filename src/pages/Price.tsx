import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { IPriceData } from "./Coin"; // Interface

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const CoinPrice = styled.article`
  background-color: ${(props) => props.theme.bgOpacityColor};
  padding: 10px 20px;
  border-radius: 10px;
  h1 {
    margin-bottom: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Overview = styled(CoinPrice)<{ $isUpward?: boolean }>`
  span {
    color: ${(props) => (props.$isUpward ? "#f53b57" : "#0fbcf9")};
  }
`;

interface IOutletContext {
  priceData: IPriceData;
}

export default function Price() {
  // Parameter
  const { priceData } = useOutletContext<IOutletContext>(); // from <Coin>

  return (
    <Wrapper>
      <CoinPrice>
        <h1>Price</h1>
        <span>$ {priceData.quotes.USD.price.toFixed(2)}</span>
      </CoinPrice>
      <Overview
        $isUpward={Boolean(priceData.quotes.USD.percent_change_15m > 0)}
      >
        <h1>Changed_15m</h1>
        <span>{priceData.quotes.USD.percent_change_15m} %</span>
      </Overview>
      <Overview
        $isUpward={Boolean(priceData.quotes.USD.percent_change_30m > 0)}
      >
        <h1>Changed_30m</h1>
        <span>{priceData.quotes.USD.percent_change_30m} %</span>
      </Overview>
      <Overview $isUpward={Boolean(priceData.quotes.USD.percent_change_1h > 0)}>
        <h1>Changed_1h</h1>
        <span>{priceData.quotes.USD.percent_change_1h} %</span>
      </Overview>
      <Overview $isUpward={Boolean(priceData.quotes.USD.percent_change_6h > 0)}>
        <h1>Changed_6h</h1>
        <span>{priceData.quotes.USD.percent_change_6h} %</span>
      </Overview>
      <Overview
        $isUpward={Boolean(priceData.quotes.USD.percent_change_12h > 0)}
      >
        <h1>Changed_12h</h1>
        <span>{priceData.quotes.USD.percent_change_12h} %</span>
      </Overview>
      <Overview
        $isUpward={Boolean(priceData.quotes.USD.percent_change_24h > 0)}
      >
        <h1>Changed_24h</h1>
        <span>{priceData.quotes.USD.percent_change_24h} %</span>
      </Overview>
      <Overview $isUpward={Boolean(priceData.quotes.USD.percent_change_7d > 0)}>
        <h1>Changed_7d</h1>
        <span>{priceData.quotes.USD.percent_change_7d} %</span>
      </Overview>
      <Overview
        $isUpward={Boolean(priceData.quotes.USD.percent_change_30d > 0)}
      >
        <h1>Changed_30d</h1>
        <span>{priceData.quotes.USD.percent_change_30d} %</span>
      </Overview>
      <Overview $isUpward={Boolean(priceData.quotes.USD.percent_change_1y > 0)}>
        <h1>Changed_1y</h1>
        <span>{priceData.quotes.USD.percent_change_1y} %</span>
      </Overview>
    </Wrapper>
  );
}
