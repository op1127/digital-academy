import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Laptop from '../images/enterprise-screen.svg'

import Hero from '../components/hero'
import Features from '../partials/enterprise/features';

const SecondPage = () => (
	<Layout>
		<SEO title="Enterprise" />
		<Hero
			heading="Unrivaled security for your business"
			img={Laptop}
			heroClass="hero hero__bg-tertiary"
		/>
		<Features />
	</Layout>
)

export default SecondPage
