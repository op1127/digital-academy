import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import style from './footer.module.scss'
import mail from '../images/mail-icon.svg';

const Footer = ({ siteTitle }) => (
	<footer className={style.footer}>
		<div className={style.container}>
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
				<Link to="/404" activeClassName={style.activeNavItem}>
					Contact
				</Link>
			</nav>
			<span className={style.border}></span>

			<div className={style.subscribe}>
				<p className={style.subscribeText}>
					Subscribe to the newsletter and get some awesome stuff every week.
				</p>
				<form className={style.form}>
					<input className={style.input} type="email" placeholder="  E-mail" required></input>
					<button className={style.inputBtn} ><img className={style.mail} src={mail}></img></button>
				</form>
			</div>
		</div>

		<div className={style.center}>
			© {new Date().getFullYear()} || Designed and Developed by Omar Plasencia
		</div>
	</footer>
)

Footer.propTypes = {
	siteTitle: PropTypes.string,
}

Footer.defaultProps = {
	siteTitle: ``,
}

export default Footer
