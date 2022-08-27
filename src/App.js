import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { AnimatePresence } from "framer-motion"
import Popup from "./components/Timeoutpopup/Timeoutpopup";

// pages
import Start from "./pages/Start";
import Selection from "./pages/Selection";
import Summary from "./pages/Summary";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Failure from "./pages/Failure";

export const orderContext = React.createContext({
  order: {},
  setOrder: () => {},
})

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [order, setOrder] = useState({});
  const value = {order, setOrder}
  const location = useLocation();

  return (
      <orderContext.Provider value={value}>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
        <AnimatePresence exitBeforeEnter onExitComplete={() => setShowPopup(false)}>
        <Routes location={location} key={location.key}>
          <Route path={ROUTES.START} element={<Start />} />
          <Route path={ROUTES.SELECTION} element={<Selection setShowPopup={setShowPopup} />}  />
          <Route path={ROUTES.SUMMARY} element={<Summary />} />
          <Route path={ROUTES.PAYMENT} element={<Payment />} />
          <Route path={ROUTES.SUCCESS} element={<Success />} />
          <Route path={ROUTES.FAILURE} element={<Failure />} />
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
        </AnimatePresence>
      </orderContext.Provider>
  );
}

export default App;