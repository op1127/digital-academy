import React from 'react'

import Phone from '../../images/enterprise-phone.svg'
import Bug from '../../images/enterprise-virus.svg'
import Cloud from '../../images/cloud.svg'
import File from '../../images/enterprise-file.svg'

const Features = () => (
	<section className="enterprise-features" id="enterprise-features">
		<div className="enterprise-features__container">
			<p className="enterprise-features__subheading">what makes us special</p>
			<h2 className="enterprise-features__heading">
				Security with peace of mind
			</h2>
			<div className="enterprise-features__wrapper">
				<div className="enterprise-features__group">
					<div className="enterprise-features__item">
						<img src={Phone} className="enterprise-phone" alt=""></img>

						<div className="enterprise-features__item__text">
							<h3>Device Encryption</h3>
							<p>
								Pariatur et sit id quis. Fugiat nostrud reprehenderit eiusmod
								labore reprehenderit anim deserunt eiusmod anim anim deserunt
								eiusmod anim deserunt eiusmod anim.
							</p>
						</div>
					</div>

					<div className="enterprise-features__item">
						<img src={Bug} alt=""></img>

						<div className="enterprise-features__item__text">
							<h3>Advanced Debugging</h3>
							<p>
								Pariatur et sit id quis. Fugiat nostrud reprehenderit eiusmod
								labore reprehenderit anim deserunt eiusmod anim anim deserunt
								eiusmod anim deserunt eiusmod anim.
							</p>
						</div>
					</div>

					<div className="enterprise-features__item">
						<img src={Cloud} alt=""></img>

						<div className="enterprise-features__item__text">
							<h3>Protected Data</h3>
							<p>
								Pariatur et sit id quis. Fugiat nostrud reprehenderit eiusmod
								labore reprehenderit anim deserunt eiusmod anim anim deserunt
								eiusmod anim deserunt eiusmod anim.
							</p>
						</div>
					</div>

					<div className="enterprise-features__item">
						<img src={File} className="enterprise-file" alt=""></img>

						<div className="enterprise-features__item__text">
							<h3>Secure File Upload</h3>
							<p>
								Pariatur et sit id quis. Fugiat nostrud reprehenderit eiusmod
								labore reprehenderit anim deserunt eiusmod anim anim deserunt
								eiusmod anim deserunt eiusmod anim.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default Features
