import React from 'react';
import Header from "./Header";
import KegControl from "./KegControl";
import { Container } from "reactstrap";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <KegControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
