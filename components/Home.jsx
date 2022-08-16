import React from "react";
import Slider from "./Slider";
import Products from "./Products";
import CountercontextProvider from "./Counter";
import NavBar from "./NavBar";

function Home() {
  return (
    <>
   
  <Slider/>
  <CountercontextProvider>
    <NavBar/>
    <Products/>
  </CountercontextProvider>
  </>
  );
}

export default Home;
