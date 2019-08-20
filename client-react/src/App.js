import React from "react";
import Project from "./Project";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"; 
  import CreateProject from './components/createProject/createProject';
  import DeleteProject from './components/deleteproject/deleteProject';
  import UpdateProject from './components/updateProject/updateProject';
  import ProjectList from './components/projectList/projectList';
  import Users from './components/Users/users';


function App() {
  return (
    <div className="App"><br></br>
    <h1>"Schedule Master" - Template</h1>
    <Project />

    <Router>
      <nav className="nav navbar navbar-expand-lg  bg-light">
        <Link to="/" className="navbar-brand">List of Projects</Link>
        <Link to="/create" className="navbar-brand">Create a Project</Link>
        <Link to="/update/:id" className="navbar-brand">Update a Project</Link>
        <Link to="/delete" className="navbar-brand">Delete a Project</Link>
        
      </nav>
        <Route path='/' exact component={ProjectList} />
        <Route path='/create' exact component={CreateProject} />
        <Route path='/delete' exact component={DeleteProject} />
        <Route path='/update/:id' exact component={UpdateProject} />
    </Router> <br></br><br></br>
       <Users/>
    </div>
  );
}

export default App;                                                                                                                                                       
