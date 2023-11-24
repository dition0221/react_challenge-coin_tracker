import { createBrowserRouter } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import Price from "./pages/Price";
import Chart from "./pages/Chart";

const router = createBrowserRouter([
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
      },
      {
        path: "chart",
        element: <Chart />,
      },
    ],
  },
]);

export default router;

/* 
/ ➡️ All coins
/:coinId ➡️ Coin Detail
  ↪️ /info
  ↪️ /chart
*/
