import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinOhlcv } from "../api"; // API
import ApexCharts from "react-apexcharts";

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
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((v) => Number(v.close)) ?? [],
            },
          ]}
          options={{
            theme: { mode: "dark" },
            chart: {
              height: 500,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 5,
            },
            yaxis: { show: false },
            xaxis: {
              labels: { show: false },
              axisBorder: { show: false },
              axisTicks: { show: false },
              type: "datetime",
              categories: data?.map((v) =>
                new Date(v.time_close * 1000).toUTCString()
              ),
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["blue"],
                stops: [0, 100],
              },
            },
            colors: ["red"],
            tooltip: {
              x: { format: "yy-MM-dd, ddd" },
              y: { formatter: (value) => `$${value.toFixed(2)}` },
            },
          }}
        />
      )}
    </>
  );
}
