import React from 'react'

import Trophy from '../../images/trophy.svg'
import Hat from '../../images/graduation.svg'
import Graph from '../../images/graph.svg'

const Features = () => (
	<section className="academy-features" id="academy-features">
		<div className="academy-features__container">
			<h2 className="academy-features__heading">
				Ranked <span>#1</span> Cybersecurity Academy
			</h2>
			<div className="academy-features__wrapper">
				<div className="academy-features__group">
					<div className="academy-features__item">
						<img src={Trophy} alt=""></img>
						<h3>#1 Online Academy</h3>
						<p>
							Velit aute exercitation commodo cupidatat quis tempor do proident
							ipsum. Amet irure reprehenderit.
						</p>
					</div>

					<div className="academy-features__item">
						<img src={Hat} alt=""></img>
						<h3>Happy Graduates</h3>
						<p>
							Velit aute exercitation commodo cupidatat quis tempor do proident
							ipsum. Amet irure reprehenderit.
						</p>
					</div>

					<div className="academy-features__item">
						<img src={Graph} alt=""></img>
						<h3>Future Careers</h3>
						<p>
							Velit aute exercitation commodo cupidatat quis tempor do proident
							ipsum. Amet irure reprehenderit.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default Features
