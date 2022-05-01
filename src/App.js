import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home";
import Navigation from "./routes/navigstion/Navigation";

const Shop = () => {
  return <div>Shop Component</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
export default App;
