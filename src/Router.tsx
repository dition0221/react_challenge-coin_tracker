import { createBrowserRouter } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Coins />,
  },
  {
    path: "/:coinId",
    element: <Coin />,
  },
]);

export default router;

/* 
/ -> All coins
/:id -> Coin Detail
  /info
  /chart
*/
