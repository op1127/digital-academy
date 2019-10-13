import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../partials/home/heroHome'
import Features from '../partials/home/features'
import Highlight from '../partials/home/highlight'
import Testimonials from '../partials/home/testimonials'
import Vendors from '../partials/home/vendors'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
		<Features />
		<Highlight />
		<Testimonials />
		<Vendors />
	</Layout>
)

export default IndexPage
