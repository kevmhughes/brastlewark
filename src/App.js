/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import GnomeList from './components/gnome-list/gnome-list';
import GnomeInfo from './components/gnome-info/gnome-info';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataURL: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json',
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/users" render={() => <GnomeList dataURL={this.state.dataURL} />} />
              <Route exact path="/users/:id" render={({ match }) => <GnomeInfo id={match.params.id} dataURL={this.state.dataURL} />} />
              <Route exact path="/"><Redirect to="/users" /></Route>
              <Route exact path="/brastlewark"><Redirect to="/users" /></Route>
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
