import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import style from './header.module.scss'
import Logo from '../images/da-logo.svg'

const Header = ({ siteTitle }) => (
	<header className={style.header}>
		<div className={style.grid}>
			<Link to="/" className={style.logoContainer}>
				<img className={style.logo} src={Logo} />
			</Link>

			<h1 className={style.heading}>{siteTitle}</h1>
			<nav className={style.nav}>
				<Link to="/" activeClassName={style.activeNavItem}>
					Home
				</Link>
				<Link to="/page-2" activeClassName={style.activeNavItem}>
					Enterprise
				</Link>
				<Link to="/page-3" activeClassName={style.activeNavItem}>
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
