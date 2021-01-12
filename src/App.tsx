import React from "react";
import { Box } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "./Store/index";
import { Basket } from "./components/Basket/Basket";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/Home"
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
                  <Home />
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
