import React from 'react'
import Button from './button'
import { Link } from 'gatsby'

const Hero = ({ heading, img, heroClass }) => (
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
				<Button>Learn more</Button>
			</div>

			<div className="hero__img-container">
				<img className="hero__img" src={img}></img>
			</div>
		</div>
	</section>
)

export default Hero
