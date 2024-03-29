import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ type, children, name }) => {
	let style

	switch (type) {
		case 'secondary':
			style = 'btn__secondary'
			break
		default:
			style = 'btn__primary'
	}

	return (
		<button className={style} type={type} aria-label={name}>
			{children}
		</button>
	)
}

Button.propTypes = {
	type: PropTypes.string,
}

export default Button
