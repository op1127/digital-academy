import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import style from './footer.module.scss'

const Footer = ({ siteTitle }) => (
	<footer className={style.footer}>
		<div className={style.center}>
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.gatsbyjs.org">Gatsby</a>
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
