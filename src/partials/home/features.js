import React from 'react'
import Button from '../../components/button'
import { Link } from 'gatsby'

import ThumbPrint from '../../images/thumbprint.svg'
import Cloud from '../../images/cloud.svg'
import People from '../../images/people.svg'

const Features = () => (
	<section className="features">
		<div className="features__container">
			<h2 className="features__heading">Unrivaled security for you business</h2>

			<div className="features__group">
				<div className="features__item">
					<img src={ThumbPrint}></img>
					<h3>Secure your app</h3>
					<p>
						Sint id amet voluptate excepteur anim consequat cillum est. Occaecat
						commodo velit anim enim ea labore. Quis aute labore incididunt ex
						est dolor dolor.
					</p>
					<Link to="/page-2">Learn more</Link>
				</div>

				<div className="features__item">
					<img src={Cloud}></img>
					<h3>Secure your network</h3>
					<p>
						Sint id amet voluptate excepteur anim consequat cillum est. Occaecat
						commodo velit anim enim ea labore. Quis aute labore incididunt ex
						est dolor dolor.
					</p>
					<Link to="/page-2">Learn more</Link>
				</div>

				<div className="features__item">
					<img src={People}></img>
					<h3>Train your team</h3>
					<p>
						Sint id amet voluptate excepteur anim consequat cillum est. Occaecat
						commodo velit anim enim ea labore. Quis aute labore incididunt ex
						est dolor dolor.
					</p>
					<Link to="/page-3">Learn more</Link>
				</div>
			</div>
			<div className="features__btn">
				<Link to="/page-2" className="features__btn">
					<Button>Protect your business</Button>
				</Link>
			</div>
		</div>
	</section>
)

export default Features