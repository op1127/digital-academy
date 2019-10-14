import React from 'react'
import Button from '../../components/button'
import { Link } from 'gatsby'

import ThumbPrint from '../../images/thumbprint.svg'
import Cloud from '../../images/cloud.svg'
import People from '../../images/people.svg'

const Features = () => (
	<section className="features-home">
		<div className="features-home__container">
			<h2 className="features-home__heading">Unrivaled security for your business</h2>

			<div className="features-home__group">
				<div className="features-home__item">
					<img src={ThumbPrint} alt=""></img>
					<h3>Secure your app</h3>
					<p>
						Sint id amet voluptate excepteur anim consequat cillum est. Occaecat
						comm velit anim enim ea labore. Quis aute labore incididunt ex
						est dolor dolor.
					</p>
					<Link to="/page-2">Learn more</Link>
				</div>

				<div className="features-home__item">
					<img src={Cloud} alt=""></img>
					<h3>Secure your network</h3>
					<p>
						Sint id amet voluptate excepteur anim consequat cillum est. Occaecat
						comm velit anim enim ea labore. Quis aute labore incididunt ex
						est dolor dolor.
					</p>
					<Link to="/page-2">Learn more</Link>
				</div>

				<div className="features-home__item">
					<img src={People} alt=""></img>
					<h3>Train your team</h3>
					<p>
						Sint id amet voluptate excepteur anim consequat cillum est. Occaecat
						comm velit anim enim ea labore. Quis aute labore incididunt ex
						est dolor dolor.
					</p>
					<Link to="/page-3">Learn more</Link>
				</div>
			</div>
			<div className="features-home__btn">
				<Link to="/enterprise" className="features-home__btn">
					<Button name="Link to enterprise page">Protect your business</Button>
				</Link>
			</div>
		</div>
	</section>
)

export default Features
