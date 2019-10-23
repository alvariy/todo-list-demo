import React from 'react';
import './App.css';
import TodoContainer from "../containers/TodoContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Rate , Breadcrumb} from 'antd';
import 'antd/dist/antd.css';

// import { Button, Checkbox } from 'antd';
// import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <div>

      <Router>
      <div>
      <Breadcrumb.Item> <Link to="/">Home</Link></Breadcrumb.Item>
            <Link to="/todo">To Do!</Link>
            </div>
          <div>
            <hr />
           Please Rate My App: <Rate/>
          </div>
            <div>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todo">
          <TodoContainer />
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div >
      <h1> Home</h1>
    </div>
  );
}
export default App;
  