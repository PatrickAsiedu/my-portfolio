import React from "react";
import "./App.css";

import Container from "./components/layout/Container";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Container>
        <Home></Home>
      </Container>
    </>
  );
}

export default App;
