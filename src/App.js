import React, {Component} from 'react';
// ES6 modules - 'react-router-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GnomeList from './components/gnome-list';
import GnomeInfo from './components/gnome-info';
    
class App extends Component {
   constructor(props) {
        super(props);
        this.state = {
          dataURL: `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`,
        };
   }


  render () {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/users" render={() => <GnomeList dataURL={this.state.dataURL}/>}/>
              <Route exact path="/users/:id" render={({match}) => <GnomeInfo id={match.params.id} dataURL={this.state.dataURL}/>}/>
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}
    
export default App;