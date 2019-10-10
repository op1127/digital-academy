import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../images/da-logo.svg'

const Header = ({ siteTitle }) => (
	<header className='header'>
		<div className='header__container'>
			<Link to="/" className='logo-container'>
				<img className='logo' src={Logo} />
			</Link>

			<h1 className='header__heading'>{siteTitle}</h1>
			<nav className='header__nav'>
				<Link to="/" activeClassName='active-nav-item'>
					Home
				</Link>
				<Link to="/page-2" activeClassName='active-nav-item'>
					Enterprise
				</Link>
				<Link to="/page-3" activeClassName='active-nav-item'>
					Academy
				</Link>

				<Link to="/404" activeClassName='active-nav-item'>
					Contact
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
