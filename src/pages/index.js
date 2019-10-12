import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../partials/home/hero'
import Features from '../partials/home/features'
import Highlight from '../partials/home/highlight'
import Testimonials from '../partials/home/testimonials'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
		<Features />
		<Highlight />
		<Testimonials />
	</Layout>
)

export default IndexPage
