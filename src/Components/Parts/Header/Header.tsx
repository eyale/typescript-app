import * as React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { capitalize } from 'lodash'

const logo = require('./logo.svg')

interface IHeaderProps {
  links: [string]
}

export default class Header extends React.Component<IHeaderProps, {}> {
  constructor(props: IHeaderProps) {
    super(props)
  }
  public render() {
    const { links } = this.props
    return (
        <div className="header">
          <img
            src={logo}
            className="logo"
            alt="logo"
          />
          <ul>
            {
              links.map((el, key) => (
                  <Link key={key} to={el}>
                    <li>{Object.is(el, '/') ? 'Home' : capitalize(el)}</li>
                  </Link>
                )
              )
            }
          </ul>
        </div>
    );
  }
}
