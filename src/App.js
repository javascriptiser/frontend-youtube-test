import { LoginForm } from "./Components/LoginForm/LoginForm";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuthData } from "./hooks/useAuthData"
import { Wrapper } from "./Components/Wrapper/Wrapper";
import { Header } from "./Components/Header/Header";
import { Favorites } from "./Components/Favorites/Favorites";
import { SearchContainer } from "./Components/SearchResult/SearchResult";

function App() {
  const { isAuth } = useAuthData();
  const token = window.localStorage.getItem('auth');

  const protectedRoute = (Component) => {
    return isAuth || token ? Component : (<Redirect to="/" />)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Wrapper>
          {protectedRoute(<Route path="/search"><SearchContainer /></Route>)}
          {protectedRoute(<Route path="/favorites"><Favorites /></Route>)}
        </Wrapper>
      </Switch>
    </div>
  );
}

export default App;
