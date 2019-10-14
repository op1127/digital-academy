import React from 'react'
import Button from '../../components/button'
import { Link } from 'gatsby'

import Background from '../../images/highlight-bg.svg'
import Computer from '../../images/bug-catchers.svg'

const Highlight = () => (
	<section className="highlight">
		<div className="highlight__container">
			<div className="highlight__group">
				<h2 className="highlight__heading">
					Ranked <span className="highlight__one">#1</span> Cybersecurity
					Academy in the world
				</h2>

				<p className="highlight__text">
					Esse ea mollit eiusmod irure aute adipisicing officia dolore commodo
					commodo cupidatat est. Do ut minim ut anim eiusmod. Fugiat deserunt
					deserunt culpa commodo officia ut commodo aliqua ullamco.
				</p>

				<Link to="/academy">
					<Button>Advance your career</Button>
				</Link>
			</div>

			<div className="highlight__img-container">
				<img className="highlight__img" src={Computer} alt=""></img>
			</div>
		</div>
		<img className="highlight__bg" src={Background} alt=""></img>
	</section>
)

export default Highlight
