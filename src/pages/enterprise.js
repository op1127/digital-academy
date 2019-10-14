import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Laptop from '../images/enterprise-screen.svg'

import Hero from '../components/hero'
import Features from '../partials/enterprise/features';
import Service from '../partials/enterprise/service'
import Testimonials from '../components/testimonials'

const SecondPage = () => (
	<Layout>
		<SEO title="Enterprise" />
		<Hero
			heading="Unrivaled security for your business"
			img={Laptop}
			heroClass="hero hero__bg-tertiary"
			linkPath="#enterprise-features"
		/>
		<Features />
		<Service />
		<Testimonials />
	</Layout>
)

export default SecondPage
