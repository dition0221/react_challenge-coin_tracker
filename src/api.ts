const BASE_URL = "https://api.coinpaprika.com/v1";

/* All Coins */
export async function fetchCoins() {
  try {
    return await (await fetch(`${BASE_URL}/coins`)).json();
  } catch (error) {
    console.log("Error: fetchCoins", error);
  }
}

/* Coin by ID */
export async function fetchCoinInfo(coinId?: string) {
  try {
    return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
  } catch (error) {
    console.log("Error: fetchCoinInfo", error);
  }
}

export async function fetchCoinPrice(coinId?: string) {
  try {
    return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
  } catch (error) {
    console.log("Error: fetchCoinPrice", error);
  }
}

export async function fetchCoinOhlcv(coinId?: string) {
  try {
    return await (
      await fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
    ).json();
  } catch (error) {
    console.log("Error: fetchCoinOhlcv", error);
  }
}
