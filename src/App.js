import "./App.css";
import AddMember from "./Container/AddMember";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Container/LoginPage";
import ForgetPassword from "./Container/ForgetPassword";
import AdminPortal from "./Container/AdminPortal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LoginPage} />
          <Route path="/add-member" exact={true} component={AddMember} />
          <Route path="/adminPortal" exact={true} component={AdminPortal} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
