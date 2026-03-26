import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import ProductDetal from "./Components/ProductDetal";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetal />} />
      </Routes>
    </div>
  );
}

export default App