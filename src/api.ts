const BASE_URL = "https://api.coinpaprika.com/v1";

/* All Coins */
export async function fetchCoins() {
  try {
    const data = await (await fetch(`${BASE_URL}/coins`)).json();
    return data;
  } catch (error) {
    console.log("Error: fetchCoins", error);
  }
}

/* Coin by ID */
export async function fetchCoinInfo(coinId?: string) {
  try {
    const data = await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
    return data;
  } catch (error) {
    console.log("Error: fetchCoinInfo", error);
  }
}

export async function fetchCoinPrice(coinId?: string) {
  try {
    const data = await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
    return data;
  } catch (error) {
    console.log("Error: fetchCoinPrice", error);
  }
}

export async function fetchCoinOhlcv(coinId?: string) {
  try {
    const data = await (
      await fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
    ).json();
    return data;
  } catch (error) {
    console.log("Error: fetchCoinOhlcv", error);
  }
}
