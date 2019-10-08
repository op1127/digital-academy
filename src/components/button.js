import PropTypes from 'prop-types'
import React from 'react'
import btn from './button.module.scss'

const Button = ({ type, children }) => {
	let style

	switch (type) {
		case 'secondary':
			style = btn.secondary
			break
		default:
			style = btn.primary
	}

	return (
		<button className={style} type={type}>
			{children}
		</button>
	)
}

Button.propTypes = {
	type: PropTypes.string,
}

export default Button
