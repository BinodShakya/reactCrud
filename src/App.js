import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";
import Login from "./components/Login";
import PrivateRoute from "./services/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <PrivateRoute path="/home" component={Home} exact />
        <PrivateRoute path="/add" component={AddEmployee} exact />
        <PrivateRoute path="/edit/:id" component={EditEmployee} exact />
      </Switch>
    </div>
  );
}

export default App;
