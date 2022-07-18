import { Home } from "./components/Home/Home";
import { createGlobalStyle } from "styled-components";
import { Router } from "./components/Routes/Router";

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
