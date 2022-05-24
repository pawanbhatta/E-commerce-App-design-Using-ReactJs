import { Navbar } from "./components";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
      {/* <Home /> */}
    </div>
  );
}

export default App;
