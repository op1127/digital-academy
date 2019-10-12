import React from 'react'

import FaceOne from '../../images/face-1.png';
import FaceTwo from '../../images/face-2.png';
import FaceThree from '../../images/face-3.png';

const Testimonials = () => (
	<section className="testimonials">
		<div className="testimonials__container">
			<h2 className="testimonials__heading">
				<span>4.9/5</span> Industry Reviews
			</h2>
			<p className="testimonials__subheading">
				Switchup | Google | Course Report
			</p>
			<div className="testimonials__border"></div>

			<div className="testimonials__group">
				<div className="testimonials__group__item">
					<p className="testimonials__group__paragraph">
						Qui commodo do consectetur aliquip pariatur ullamco tempor. Magna
						commodo ea ea laborum. Eiusmod cillum proident veniam cupidatat
						mollit mollit. Deserunt esse aliquip incididunt officia cupidatat ad
						nostrud. 
					</p>

					<div className="testimonials__group__author">
						<img src={FaceOne}></img>

						<div className="testimonials__group__text">
							<p>CEO at <span>Whatever</span></p>
							<h5>Tom Jones</h5>
						</div>
					</div>
				</div>

				<div className="testimonials__group__item">
					<p className="testimonials__group__paragraph">
						Qui commodo do consectetur aliquip pariatur ullamco tempor. Magna
						commodo ea ea laborum. Eiusmod cillum proident veniam cupidatat
						mollit mollit. Deserunt esse aliquip incididunt officia cupidatat ad
						nostrud. 
					</p>

					<div className="testimonials__group__author">
						<img src={FaceTwo}></img>

						<div className="testimonials__group__text">
							<p>CEO at <span>Whatever</span></p>
							<h5>Lauren Smith</h5>
						</div>
					</div>
				</div>

				<div className="testimonials__group__item">
					<p className="testimonials__group__paragraph">
						Qui commodo do consectetur aliquip pariatur ullamco tempor. Magna
						commodo ea ea laborum. Eiusmod cillum proident veniam cupidatat
						mollit mollit. Deserunt esse aliquip incididunt officia cupidatat ad
						nostrud. 
					</p>

					<div className="testimonials__group__author">
						<img src={FaceThree}></img>

						<div className="testimonials__group__text">
							<p>CEO at <span>Whatever</span></p>
							<h5>Stacey Johnson</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default Testimonials
