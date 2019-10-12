import React from 'react'

import VendorImg from '../../images/vendors.png'

const Vendors = () => (
	<section className="vendors">
		<div className="vendors__container">
			<h2 className="vendors__heading">
				Our students have gone on to work for
			</h2>

            <img className="vendors__img" src={VendorImg} alt="Satisfied customers"></img>
		</div>
	</section>
)

export default Vendors
