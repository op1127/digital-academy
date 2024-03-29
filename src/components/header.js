import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../images/da-logo.svg'

const Header = ({ siteTitle }) => (
	<header className="header">
		<div className="header__container">
			<Link to="/" className="logo-container">
				<img className="logo" src={Logo} alt="Digital Academy logo"/>
			</Link>

			<h1 className="header__heading">{siteTitle}</h1>
			<nav className="header__nav">
				<Link to="/" activeClassName="active-nav-item">
					Home
				</Link>
				<Link to="/enterprise" activeClassName="active-nav-item">
					Enterprise
				</Link>
				<Link to="/academy" activeClassName="active-nav-item">
					Academy
				</Link>
			</nav>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
