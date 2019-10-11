import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../partials/home/hero'
import Features from '../partials/home/features'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
		<Features />
	</Layout>
)

export default IndexPage
