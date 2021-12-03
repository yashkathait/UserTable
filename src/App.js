import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import User from "./Container/UserList/User";
import "./App.css";
import DetailPage from "./Container/UserDetails/DeltailPage";

function App() {
  const user = useSelector((state) => state.userReducer.list);
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Users" />
        </Route>
        <Route path="/Users" exact>
          <User user={user} />
        </Route>
        <Route path="/Users/:id">
          <DetailPage user={user} />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
