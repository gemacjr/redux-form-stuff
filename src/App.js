import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApplicationListPage from './pages/application-list-page';
import ApplicationFormPage from './pages/application-form-page';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
          <Link  exact to="/">Application</Link>
          <Link  exact to="/applications/new">Add Application</Link>
          
          
      <Route exact path="/" component={ApplicationFormPage}/>
      <Route exact path="/applications/new" component={ApplicationFormPage}/>
      <Route exact path="/applications/edit/:access_token" component={ApplicationFormPage}/>
     </div>
     </MuiThemeProvider>
    );
  }
}

export default App;
