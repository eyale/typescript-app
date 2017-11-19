import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Contacts from '../Contacts/Contacts'

export default class RouterComponent extends React.Component<{}, {}> {
  public render() {
    return (
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/contacts" component={Contacts}/>
        </Switch>
    );
  }
}
