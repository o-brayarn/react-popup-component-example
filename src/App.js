import React, { useState } from "react";
import "./App.css";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <input type="button" value="Buy Ticket" onClick={togglePopup} />
      {isOpen && <CheckoutPage handleClose={togglePopup} />}
    </div>
  );
}

export default App;
