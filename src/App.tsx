import React from "react";
import { Container, Box } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "./Store/index";
import { Basket } from "./components/Basket";
import { Product } from "./components/Product";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Router>
          <Navbar/>
            <Routes>
              <Route path="/">
                <Box mt={5} >
                  <Product />
                </Box>
              </Route>
              <Route path="/basket">
                <Box mt={5} mb={5}>
                  <Basket />
                </Box>
              </Route>
            </Routes>
          </Router>
      </Provider>
    </div>
  );
}

export default App;
