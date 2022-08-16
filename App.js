import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  NavBar,
  Footer,
  Home,
  About,
  Sign_up,
  LogIn,
  Contact,
  Date,
} from "./components";
import CountercontextProvider from "./components/Counter";

const App = () => {
  return (
    <div>
    <CountercontextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Sign_up" element={<Sign_up />}/>
          <Route path="/Date" element={<Date/>}></Route>
        </Routes>
        <Footer />
      
      </Router>
      </CountercontextProvider>,
    </div>
  );
};

export default App;
