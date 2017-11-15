import * as React from 'react'; 
import './App.css';
import Popup from './Popup'

const logo = require('./logo.svg');

interface AppProps {
  state: object,
  handleShow: Function,
  handleHide: Function
}

interface AppState {
  showPopup: boolean
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = { showPopup: false }

    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  handleShow = (event: React.SyntheticEvent<HTMLLinkElement>) => {
    event.preventDefault()
    this.setState({showPopup: true})
  }

  handleHide = (event: React.SyntheticEvent<HTMLLinkElement>) => {
    event.preventDefault()
    this.setState({showPopup: false})
  }

  showPopup = () => ( 
    this.state.showPopup 
      ? <Popup><span>Hey from Popup</span><button>Hide</button></Popup>
      : null
  )
  
  public render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={this.handleShow}>Show Popup</button>
        <div id="popup-container">{this.showPopup()}</div>
      </div>
    );
  }
}

export default App;
