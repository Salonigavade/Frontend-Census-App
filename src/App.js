import "./App.css";
import AddMember from "./Container/AddMember";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Container/LoginPage";
import ForgetPassword from "./Container/ForgetPassword";
import AdminPortal from "./Container/AdminPortal";
import UserPortal from "./Container/UserPortal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LoginPage} />
          <Route path="/forget-password" exact={true} component={ForgetPassword} />
          <Route path="/add-member/:userId" exact={true} component={AddMember} />
          <Route path="/adminPortal" exact={true} component={AdminPortal} />
          <Route path="/userPortal/:userId" exact={true} component={UserPortal} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
