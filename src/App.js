import React, { Component } from 'react';
import logo from './logo.svg';
import { NavLink, Route } from 'react-router-dom';
import ApplicationListPage from './pages/application-list-page';
import ApplicationFormPage from './pages/application-form-page';

class App extends Component {
  render() {
    return (
      <div>
      <div>
        <div>
          <NavLink exact to="/">Application</NavLink>
          <NavLink exact to="/applications/new">Add Application</NavLink>
        </div>
      </div>
      <Route exact path="/" component={ApplicationFormPage}/>
      <Route exact path="/applications/new" component={ApplicationFormPage}/>
      <Route exact path="/applications/edit/:access_token" component={ApplicationFormPage}/>
      </div>
    );
  }
}

export default App;
