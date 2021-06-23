import {Switch} from "react-router-dom";
import {Home} from "./components/Home";
import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";
import Login from "./components/Login";
import PrivateRoute from "./services/PrivateRoute";
import {LoginContext} from "./context/LoginContext";
import PublicRoute from "./services/PublicRoute";
import {useContext} from "react";

function App() {
    const {loginState} = useContext(LoginContext);
    console.log('loginState' + loginState.loginStatus)
    return (
        <div className="App">
            <Switch>
                <PublicRoute path="/" loginStatus={loginState.loginStatus} component={Login} exact/>
                <PrivateRoute path="/home" loginStatus={loginState.loginStatus} component={Home} exact/>
                <PrivateRoute path="/add" loginStatus={loginState.loginStatus} component={AddEmployee} exact/>
                <PrivateRoute path="/edit/:id" loginStatus={loginState.loginStatus} component={EditEmployee} exact/>
            </Switch>
        </div>
    );
}

export default App;
