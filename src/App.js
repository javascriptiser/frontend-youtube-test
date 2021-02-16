import { LoginForm } from "./Components/LoginForm/LoginForm";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuthData } from "./useAuthData";

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
        {protectedRoute(<Route path="/home"><div>HOME</div></Route>)}
      </Switch>
    </div>
  );
}

export default App;
