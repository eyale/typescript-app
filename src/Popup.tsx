import * as React from 'react'

interface PopupProps {
  el: any
}

class Popup extends React.Component<PopupProps> {
  constructor(props: PopupProps) {
    super(props) {
      this.el = document.createElement('div')
      this.el.setAttribute('id', 'popup')
    }
  }

  componentDidMount() {
    document.querySelector('#popup-container').appendChild(this.el)
  }
  componentWillUnmount() {
    document.querySelector('#popup-container').removeChild(this.el)
  }
  
  render() {
    return (
      ReactDOM.createPortal(this.props.children, this.el)
    )
  }
}
export default Popup
