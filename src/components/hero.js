import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'

const Hero = ({ heading, img, heroClass, linkPath }) => (
	<section className={heroClass}>
		<div className="hero__container">
			<div className="hero__group">
				<h1 className="hero__heading">{heading}</h1>
				<p className="hero__text">
					Commodo in quis excepteur eiusmod aute commodo excepteur. Tempor nisi
					labore dolore fugiat Lorem laborum commodo magna dolor ad eu. Commodo
					fugiat duis non deserunt minim ullamco nulla duis minim sint Lorem
					magna nisi magna nisi.
				</p>
				<a href={linkPath}>
					<Button>Learn more</Button>
				</a>
			</div>

			<div className="hero__img-container">
				<img className="hero__img" src={img} alt="Hero graphic"></img>
			</div>
		</div>
	</section>
)

Hero.propTypes = {
	heading: PropTypes.string,
	img: PropTypes.string,
	heroClass: PropTypes.string,
	linkPath: PropTypes.string,
}

export default Hero
