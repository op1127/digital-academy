import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Laptop from '../images/enterprise-screen.svg'

import Hero from '../components/hero'

const SecondPage = () => (
	<Layout>
		<SEO title="Enterprise" />
		<Hero
			heading="Unrivaled security for your business"
			img={Laptop}
			imgClass="hero__img"
		/>
	</Layout>
)

export default SecondPage
