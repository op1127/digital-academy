import React from 'react'
import Button from '../../components/button'
import { Link } from 'gatsby'

import Screen from '../../images/hero-screen.svg'

const Hero = () => (
	<section className="hero-home">
		<div className="hero-home__container">
			<h1 className="hero-home__heading">Take control of your Cybersecurity</h1>
			<h2 className="hero-home__subheading">
				Consequat veniam dolor pariatur sit dolor est. Sunt nostrud laborum sunt
				fugiat elit non consequat nostrud aute occaecat incididunt dolor
			</h2>
			<div className="hero-home__btn-group">
				<Link to="/enterprise" className="hero-home__btn-one">
					<Button name="Link to enterprise page">Protect your business</Button>
				</Link>

				<Link to="/academy" className="hero-home__btn-two">
					<Button type="secondary" name="Link to academy page">Advance your career</Button>
				</Link>
			</div>

			<img className="hero-home__screen" src={Screen} alt="Computer screen"></img>
		</div>
	</section>
)

export default Hero
