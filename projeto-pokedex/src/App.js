import { Home } from "./components/Home/Home";
import { createGlobalStyle } from "styled-components";
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
      <Home />
    </>
  );
}

export default App;
