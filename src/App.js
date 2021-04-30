import "./App.css";
import AddMember from "./Container/AddMember";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Container/LoginPage";
import ForgetPassword from "./Container/ForgetPassword";
import AdminPortal from "./Container/AdminPortal";
import FamilyMemberList from "./Container/FamilyMemberList";
import MemberList from "./Container/MemberList";
import UserById from "./Container/UserById";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LoginPage} />
          <Route path="/add-member" exact={true} component={AddMember} />
          <Route path="/adminPortal" exact={true} component={AdminPortal} />

          <Route
            path="/members-by-userId/:userId"
            exact={true}
            component={FamilyMemberList}
          />
          <Route path="/all-members" exact={true} component={MemberList} />

          <Route
            path="/user-by-userId/:userId"
            exact={true}
            component={UserById}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
