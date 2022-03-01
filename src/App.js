import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Registration from "./components/Registration/Registration";
import Shop from "./components/Shop/Shop";
import Data from "./components/Shop/Data";
import Checkout from "./components/Checkout/Checkout";
import Services from "./components/Services_/Services";
import Account from "./components/Account/Account";
import Footer from "./components/Footer/Footer";

function App() {
  const [logged, setLogged] = useState(null);
  const [cartCounter, setcartCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Navbar
          loggedin={logged}
          setLogged={setLogged}
          cartCounter={cartCounter}
        />
        <div className="App">
          <Routes>
            <Route
              path="/Furniture-Ecommerce"
              element={<LandingPage data={Data} />}
            />
            <Route
              path="/shop"
              element={
                <Shop
                  data={Data}
                  loggedin={logged}
                  setcartCounter={setcartCounter}
                  cartCounter={cartCounter}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                />
              }
            />
            <Route
              path="/Registration"
              element={<Registration setLogged={setLogged} />}
            />
            <Route path="/services" element={<Services loggedin={logged} />} />
            <Route
              path="/Account"
              element={<Account loggedin={logged} cartItems={cartItems} />}
            />
            <Route
              path="/Checkout"
              element={<Checkout cartItems={cartItems} data={Data} />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
