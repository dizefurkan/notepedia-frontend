import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  browserHistory,
} from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Section} />
            <Route exact path='/home' component={Section} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;
