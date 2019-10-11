import React from 'react'
import Button from '../../components/button'
import { Link } from 'gatsby'

import Screen from '../../images/hero-screen.svg'

const Hero = () => (
	<section className="hero">
		<div className="hero__container">
			<h1 className="hero__heading">Take control of your Cybersecurity</h1>
			<h2 className="hero__subheading">
				Consequat veniam dolor pariatur sit dolor est. Sunt nostrud laborum sunt
				fugiat elit non consequat nostrud aute occaecat incididunt dolor
			</h2>
			<div className="hero__btn-group">
				<Link to="/page-2" className="hero__btn-one">
					<Button>Protect your business</Button>
				</Link>

				<Link to="/page-3" className="hero__btn-two">
					<Button type="secondary">Advance your career</Button>
				</Link>
			</div>

			<img className="hero__screen" src={Screen}></img>
		</div>
	</section>
)

export default Hero
