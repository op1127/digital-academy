import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Teacher from '../images/teacher.svg'

import Hero from '../components/hero'

const ThirdPage = () => (
	<Layout>
		<SEO title="Academy" />
		<Hero
			heading="Unlock your career potential"
			img={Teacher}
			heroClass="hero hero__bg-primary"
		/>
	</Layout>
)

export default ThirdPage
