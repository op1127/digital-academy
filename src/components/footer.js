import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Mail from '../images/mail-icon.svg'
import Logo from '../images/da-logo.svg'

const Footer = ({ siteTitle }) => (
	<footer className="footer">
		<div className="footer__nav__container">
			<nav className="footer__nav">
				<Link to="/" activeClassName="active-nav-item">
					Home
				</Link>
				<Link to="/page-2" activeClassName="active-nav-item">
					Enterprise
				</Link>
				<Link to="/page-3" activeClassName="active-nav-item">
					Academy
				</Link>
			</nav>
			<div className="footer__border"></div>

			<div className="subscribe">
				<p className="subscribe__text">
					Subscribe to the newsletter and get some awesome stuff every week.
				</p>
				<form className="subscribe__form">
					<input
						className="subscribe__form__input"
						type="email"
						placeholder="  E-mail"
						required
					></input>
					<button className="subscribe__form__input-btn">
						<img className="mail-icon" src={Mail} alt=""></img>
					</button>
				</form>
			</div>
		</div>

		<div className="footer__content">
			<div className="footer__content__container">
				<div className="footer__content__flex-left">
					<div className="footer__content__group">
						<img src={Logo} alt="Digital Academy logo"></img>
						<p>
							Eiusmod eiusmod deserunt cupidatat ad ut reprehenderit aute cillum
							dolore eiusmod ad sunt quis cupidatat. Enim sit Lorem cillum duis
							aliquip esse irure dolore nulla amet. Irure dolor sit veniam
							cupidatat magna pariatur incididunt.
						</p>
					</div>
				</div>

				<div className="footer__content__flex-right">
					<div className="footer__content__links">
						<div className="links-left">
							<h3>Academy</h3>
							<p>Presentation</p>
							<p>Knowledge Base</p>
							<p>Video Guides</p>
						</div>

						<div className="links-right">
							<h3>About</h3>
							<p>FAQ</p>
							<p>Students</p>
							<p>Terms of Use</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="footer__author">
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
