import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Hero from './components/Hero'
import Products from "./components/Poducts";
import { productData } from "./components/Poducts/data";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
    </Router>
  );
}

export default App;
