import * as React from 'react'
import './Player.css'

interface IPlayer {

}

export default class Player extends React.Component<IPlayer, {}> {
  constructor(props: IPlayer) {
    super(props)
  }
  componentWillMount() {
  }
  public render() {
    return (
      <div className="player">
        <h1>player</h1>
      </div>
    );
  }
}
