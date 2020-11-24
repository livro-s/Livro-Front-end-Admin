import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Login,
  BookList,
  AddNotice,
  Notice,
  DetailNotice,
  Header,
} from "./components";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Header></Header>
        <Route exact path="/book-list" component={BookList}></Route>
        <Route exact path="/notice" component={Notice}></Route>
        <Route exact path="/notice/:id" component={DetailNotice}></Route>
        <Route exact path="/edit-notice/:id" component={AddNotice} />
        <Route path="/add-notice/" component={AddNotice} />
      </Router>
    </div>
  );
}

export default App;
