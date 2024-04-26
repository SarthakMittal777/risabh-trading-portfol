import { Routes, Route } from "react-router-dom";
import { Home, Services } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:slug" element={<Services />} />
    </Routes>
  );
};

export default App;
