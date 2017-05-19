import React from 'react'
import { IndexLink, Link, browserHistory } from 'react-router'
import './Header.sass'

export const Header = () => (
  <div className="sidebar">
    <h1>Bowtie.io</h1>
    <IndexLink to='/' activeClassName='route--active'>
      All Projects
    </IndexLink>
    <hr />
    <Link to='/project' activeClassName='route--active'>
    Project
    </Link>
    <br />
    <a href="#" onClick={() => {
      window.localStorage.removeItem('githubKey')
      browserHistory.push("/")
    }}>
    Logout
    </a>
  </div>
)

export default Header
