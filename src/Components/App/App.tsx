import * as React from 'react'; 
import './App.css';
import Popup from '../Popup/Popup';

const logo = require('./logo.svg');

export default class App extends React.Component<{}, {}> {
  state = { isPopup: false }
  togglePopup = () => this.setState({isPopup: !this.state.isPopup})

  renderPopup = () => {
    if (this.state.isPopup) {
      return (
        <Popup>
          Popup
          <button onClick={this.togglePopup}>Close</button>
        </Popup>
      )
    }
    return
  }
  public render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            onClick={this.togglePopup} 
          />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {this.renderPopup()}
      </div>
    );
  }
}
