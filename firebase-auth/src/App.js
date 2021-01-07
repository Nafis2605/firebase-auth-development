import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard"
import UpdateProfile from "./components/UpdateProfile"
import PrivateRoute from "./PrivateRoute"


function App() {
  return (
    <BrowserRouter>
      <PrivateRoute path="/" exact component={Dashboard} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/update-profile" exact component={UpdateProfile} />
    </BrowserRouter>
  );
}

export default App;
