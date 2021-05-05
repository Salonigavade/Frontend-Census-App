import "./App.css";
import AddMember from "./Container/AddMember";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Container/LoginPage";
import ForgetPassword from "./Container/ForgetPassword";
import AdminPortal from "./Container/AdminPortal";
import UserPortal from "./Container/UserPortal";
import FamilyMemberList from "./Container/FamilyMemberList";
import MemberList from "./Container/MemberList";
import UserById from "./Container/UserById";
import SearchByMemberId from "./Container/SearchByMemberId";
import SearchByAdharCardNo from "./Container/SearchByAdharCardNo";
import SearchByAge from "./Container/SearchByAge";
import SearchByCity from "./Container/SearchByCity";
import SearchByDistrict from "./Container/SearchByDistrict";
import SearchByPinCode from "./Container/SearchByPinCode";
import SearchByState from "./Container/SearchByState";
import SearchByGender from "./Container/SearchByGender";
import ViewMember from "./Container/ViewMember";
import UpdateMember from "./Container/UpdateMember";
import AdminViewMember from "./Container/AdminViewMember";
import AdminUpdateMember from "./Container/AdminUpdateMember";
import AdminAddMember from "./Container/AdminAddMember";
import Statistics from "./Container/Statistics";
import ContactUs from "./Container/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LoginPage} />
          <Route path="/statistics" exact={true} component={Statistics} />
          <Route
            path="/forget-password"
            exact={true}
            component={ForgetPassword}
          />

          <Route path="/adminPortal" exact={true} component={AdminPortal} />
          <Route
            path="/user-by-userId/:userId"
            exact={true}
            component={UserById}
          />

          <Route
            path="/userPortal/:userId"
            exact={true}
            component={UserPortal}
          />

          <Route
            path="/members-by-userId/:userId"
            exact={true}
            component={FamilyMemberList}
          />
          <Route path="/all-members" exact={true} component={MemberList} />
          <Route
            path="/add-member/:userId"
            exact={true}
            component={AddMember}
          />
          <Route
            path="/view-member/:memberId"
            exact={true}
            component={ViewMember}
          />
          <Route
            path="/update-member/:memberId"
            exact={true}
            component={UpdateMember}
          />
          <Route
            path="/admin-add-member/:userId"
            exact={true}
            component={AdminAddMember}
          />
          <Route
            path="/admin-view-member/:memberId"
            exact={true}
            component={AdminViewMember}
          />
          <Route
            path="/admin-update-member/:memberId"
            exact={true}
            component={AdminUpdateMember}
          />
          <Route
            path="/search-by-memberId/:memberId"
            exact={true}
            component={SearchByMemberId}
          />
          <Route
            path="/search-by-adharCard/:adharCardNo"
            exact={true}
            component={SearchByAdharCardNo}
          />
          <Route
            path="/search-by-city/:city"
            exact={true}
            component={SearchByCity}
          />
          <Route
            path="/search-by-district/:district"
            exact={true}
            component={SearchByDistrict}
          />
          <Route
            path="/search-by-pinCode/:pinCode"
            exact={true}
            component={SearchByPinCode}
          />
          <Route
            path="/search-by-state/:state"
            exact={true}
            component={SearchByState}
          />

          <Route
            path="/search-by-gender/:gender"
            exact={true}
            component={SearchByGender}
          />
          <Route path="/search-bet-age/" exact={true} component={SearchByAge} />
          <Route path="/contact-us/:userId" exact={true} component={ContactUs} />

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
