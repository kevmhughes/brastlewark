import React, {Component} from 'react';
import GnomeList from './components/GnomeList'
    
class App extends Component {

  state= {
    elements: []
  }

  componentDidMount() {
    fetch(`https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`)
    .then(res => res.json())
    .then((result) => {
      let elements = result.Brastlewark
      this.setState({elements: elements})
    })
    .catch(console.log)
  }
 
  render () {
    return (
        <GnomeList elements={this.state.elements}/>
    )
  }
}
    
export default App