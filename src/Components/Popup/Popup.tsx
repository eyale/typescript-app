import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './Popup.css'

class Popup extends React.Component<{}, {}> {
  element = document.createElement('div')
  componentWillMount() {
    document.body.appendChild(this.element)
  }
  componentWillUnmount() {
    document.body.removeChild(this.element)
  }
  render() {
    return (
      ReactDOM.createPortal(
        <div className="popup">{this.props.children}</div>,
        this.element
      )
    )
  }
}
export default Popup
