import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Selection from "./pages/Selection";
import Summary from "./pages/Summary";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;