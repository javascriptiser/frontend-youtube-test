import { LoginForm } from "./Components/LoginForm/LoginForm";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuthData } from "./hooks/useAuthData"
import { Wrapper } from "./Components/Wrapper/Wrapper";
import { Favorites } from "./Components/Favorites/Favorites";
import React from "react";
import { Main } from "./Components/Main/Main";

function App() {
  const { isAuth } = useAuthData();
  const token = window.localStorage.getItem('auth');

  const protectedRoute = (Component) => {
    return isAuth || token ? Component : (<Redirect to="/login" />)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Wrapper>
          {protectedRoute(<Route exact path="/"><Main /></Route>)}
          {protectedRoute(<Route path="/favorites"><Favorites /></Route>)}
        </Wrapper>
      </Switch>
    </div>
  );
}

export default App;
