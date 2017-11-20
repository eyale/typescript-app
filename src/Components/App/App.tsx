import * as React from 'react'
import './App.css'
import RouterComponent from '../RouterComponent/RouterComponent'
import Header from '../Parts/Header/Header'

export default class App extends React.Component<{}, {}> {
  links: [string] = ['/', 'contacts', 'player']

  public render() {
    return (
      <div className="app">
        <Header links={this.links} />
        <RouterComponent />
      </div>
    );
  }
}
