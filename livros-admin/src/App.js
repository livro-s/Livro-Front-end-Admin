import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, BookList, AddNotice, Notice } from "./components";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Login} />
        <Route path="/book-list" component={BookList}></Route>
        <Route path="/notice" component={Notice}></Route>
        <Route path="/add-notice" component={AddNotice}></Route>
      </Router>
    </div>
  );
}

export default App;
