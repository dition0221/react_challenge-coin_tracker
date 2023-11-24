import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinOhlcv } from "../api"; // API
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms"; // Atom

interface IOutletContext {
  coinId: string;
}

interface IOhlcv {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ICoinOhlcv extends Array<IOhlcv> {
  error?: string;
}

export default function Chart() {
  // Theme
  const isDark = useRecoilValue(isDarkAtom);

  // Parameter
  const { coinId } = useOutletContext<IOutletContext>(); // from <Coin>

  // Ohlcv data: Fetch API
  const { isLoading, data } = useQuery<ICoinOhlcv>({
    queryKey: [coinId, "Ohlcv"],
    queryFn: () => fetchCoinOhlcv(coinId),
  });

  return (
    <>
      {isLoading ? (
        "Loading chart.."
      ) : (
        <ApexCharts
          type="candlestick"
          series={[
            {
              name: "Price",
              data: Array.isArray(data)
                ? data?.map((v) => [
                    v.time_close * 1000,
                    Number(v.open),
                    Number(v.high),
                    Number(v.low),
                    Number(v.close),
                  ]) ?? []
                : [],
            },
          ]}
          options={{
            theme: { mode: isDark ? "dark" : "light" },
            chart: {
              toolbar: { show: false },
              background: "transparent",
            },
            grid: { borderColor: isDark ? "#f5f6fa" : "#2f3640" },
            xaxis: {
              labels: { show: true, rotate: -45 },
              axisTicks: { color: isDark ? "#f5f6fa" : "#2f3640" },
              type: "datetime",
              categories: data?.map((v) =>
                new Date(v.time_close * 1000).toUTCString()
              ),
            },
            tooltip: {
              x: { format: "yy-MM-dd, ddd" },
            },

            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#f53b57",
                  downward: "#0fbcf9",
                },
              },
            },
          }}
        />
      )}
    </>
  );
}
