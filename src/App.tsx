import AuthContext from "./context/AuthContext";
import GlobalStyle from "./styles/Global Styles CSS";
import RoutesMain from "./router/Routes";

function App() {
  return (
    <AuthContext>
      <GlobalStyle />
      <RoutesMain />
    </AuthContext>
  );
}

export default App;
