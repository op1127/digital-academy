import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import mail from '../images/mail-icon.svg';

const Footer = ({ siteTitle }) => (
	<footer className='footer'>
		<div className='footer__container'>
			<nav className='footer__nav'>
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
			<span className='footer__border'></span>

			<div className='subscribe'>
				<p className='subscribe__text'>
					Subscribe to the newsletter and get some awesome stuff every week.
				</p>
				<form className='subscribe__form'>
					<input className='subscribe__form__input' type="email" placeholder="  E-mail" required></input>
					<button className='subscribe__form__input-btn' ><img className='mail-icon' src={mail}></img></button>
				</form>
			</div>
		</div>

		<div className='footer__center'>
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
