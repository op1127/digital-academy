import React from 'react'
import style from './hero.module.scss'
import Button from '../../components/button'
import { Link } from 'gatsby'

import Screen from '../../images/hero-screen.svg'

const Hero = () => (
	<section className={style.hero}>
		<div className={style.container}>
			<h1 className={style.heading}>Take control of your Cybersecurity</h1>
			<h2 className={style.subheading}>
				Consequat veniam dolor pariatur sit dolor est. Sunt nostrud laborum sunt
				fugiat elit non consequat nostrud aute occaecat incididunt dolor
			</h2>

			<Link to="/page-2" className={style.btnOne}>
				<Button>Protect your business</Button>
			</Link>

			<Link to="/page-3" className={style.btnTwo}>
				<Button type='secondary'>Advance your career</Button>
			</Link>

			<img className={style.screen} src={Screen}></img>
		</div>
	</section>
)

export default Hero
