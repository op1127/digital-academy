import React from 'react'

import Phone from '../../images/enterprise-phone.svg'
import Bug from '../../images/enterprise-virus.svg'
import Cloud from '../../images/cloud.svg'
import File from '../../images/enterprise-file.svg'

const Features = () => (
	<section className="features-enterprise">
		<div className="features-enterprise__container">
			<p className="features-enterprise__subheading">what makes us special</p>
			<h2 className="features-enterprise__heading">
				Security with peace of mind
			</h2>
			<div className="ms-wrapper">
				<div className="features-enterprise__group">
					<div className="features-enterprise__item">
						<img src={Phone} className="enterprise-phone"></img>

						<div className="features-enterprise__item__text">
							<h3>Device Encryption</h3>
							<p>
								Pariatur et sit id quis. Fugiat nostrud reprehenderit eiusmod
								labore reprehenderit anim deserunt eiusmod anim anim deserunt
								eiusmod anim deserunt eiusmod anim.
							</p>
						</div>
					</div>

					<div className="features-enterprise__item">
						<img src={Bug}></img>

						<div className="features-enterprise__item__text">
							<h3>Advanced Debugging</h3>
							<p>
								Pariatur et sit id quis. Fugiat nostrud reprehenderit eiusmod
								labore reprehenderit anim deserunt eiusmod anim anim deserunt
								eiusmod anim deserunt eiusmod anim.
							</p>
						</div>
					</div>

					<div className="features-enterprise__item">
						<img src={Cloud}></img>

						<div className="features-enterprise__item__text">
							<h3>Protected Data</h3>
							<p>
								Pariatur et sit id quis. Fugiat nostrud reprehenderit eiusmod
								labore reprehenderit anim deserunt eiusmod anim anim deserunt
								eiusmod anim deserunt eiusmod anim.
							</p>
						</div>
					</div>

					<div className="features-enterprise__item">
						<img src={File} className="enterprise-file"></img>

						<div className="features-enterprise__item__text">
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
