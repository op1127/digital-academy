import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../partials/home/hero'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
	</Layout>
)

export default IndexPage
