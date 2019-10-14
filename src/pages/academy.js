import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Teacher from '../images/teacher.svg'

import Hero from '../components/hero'
import Features from '../partials/academy/features'
import Table from '../partials/academy/table'
import Testimonials from '../components/testimonials';

const ThirdPage = () => (
	<Layout>
		<SEO title="Academy" />
		<Hero
			heading="Unlock your career potential"
			img={Teacher}
			heroClass="hero hero__bg-primary"
			linkPath="#academy-features"
		/>
		<Features />
		<Table />
		<Testimonials />
	</Layout>
)

export default ThirdPage
