import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Start from "./pages/Start";
import Selection from "./pages/Selection";
import Summary from "./pages/Summary";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import { createContext, useState } from "react";
import { AnimatePresence } from "framer-motion"
export const OrderContext = createContext();

function App() {
  const location = useLocation();
  const [order, setOrder] = useState({});

  return (
      <OrderContext.Provider value={[order, setOrder]}>
        <AnimatePresence >
        <Routes location={location} key={location.key}>
          <Route path={ROUTES.START} element={<Start />} />
          <Route path={ROUTES.SELECTION} element={<Selection />} />
          <Route path={ROUTES.SUMMARY} element={<Summary />} />
          <Route path={ROUTES.PAYMENT} element={<Payment />} />
          <Route path={ROUTES.SUCCESS} element={<Success />} />
          <Route path={ROUTES.FAILURE} element={<Failure />} />
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
        </AnimatePresence>
      </OrderContext.Provider>
  );
}

export default App;