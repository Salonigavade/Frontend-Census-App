import "./App.css";
import AddMember from "./Container/AddMember";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Container/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LoginPage} />
          <Route path="/add-member" exact={true} component={AddMember} />
          {/* <Route path="/home/:emailId" exact={true} component={Home} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
