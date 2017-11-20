import * as React from 'react'
import './Home.css'
import Popup from '../Popup/Popup'

export default class Home extends React.Component<{}, {}> {
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
      <div className="home">
        <h1>Welcome!</h1>
        {this.renderPopup()}
        <button onClick={this.togglePopup}>Click to view Popup</button>
      </div>
    );
  }
}
