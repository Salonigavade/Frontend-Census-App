import './App.css';
import AddMember from './Container/AddMember';
import Login from './Container/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>

        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/add-member" exact={true} component={AddMember} />
          {/* <Route path="/home/:emailId" exact={true} component={Home} /> */}
          
        </Switch>
      
    </BrowserRouter>
    </>
  );
}

export default App;
