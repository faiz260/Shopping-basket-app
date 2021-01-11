import React from "react";
import { Container, Box } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "./Store/index";
import { Basket } from "./components/Basket";
import { Product } from "./components/Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container maxWidth="md">
          <Box mt={5} mb={5}>
            <Product />
          </Box>
          <Box mt={5} mb={5}>
            <Basket />
          </Box>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
