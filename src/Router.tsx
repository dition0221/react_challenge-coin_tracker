import { createBrowserRouter } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import Price from "./pages/Price";
import Chart from "./pages/Chart";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Coins />,
    },
    {
      path: "/:coinId",
      element: <Coin />,
      children: [
        {
          path: "price",
          element: <Price />,
          errorElement: <span>Network Error</span>,
        },
        {
          path: "chart",
          element: <Chart />,
        },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/react_challenge-coin_tracker/" }
);

export default router;

/* 
/ ➡️ All coins
/:coinId ➡️ Coin Detail
  ↪️ /info
  ↪️ /chart
*/
