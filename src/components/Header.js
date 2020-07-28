import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="Tools icon" />
    </span>
    <h1>Ri Xin</h1>
    <p>likes building things</p>
  </header>
)

export default Header
