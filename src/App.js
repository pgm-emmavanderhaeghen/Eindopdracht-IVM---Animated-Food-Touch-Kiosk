import { Routes, Route } from "react-router-dom";
import Start from "./Start";
import Selection from "./Selection";
import Summary from "./Summary";
import Payment from "./Payment";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="selection" element={<Selection />} />
        <Route path="summary" element={<Summary />} />
        <Route path="payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;