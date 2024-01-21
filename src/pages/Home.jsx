import React, { useState, useEffect } from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'

import Cost from '../components/Cost/Cost'
import Faq from '../components/Faq/Faq'
import About from '../components/About/About'
import Offer from '../components/Offer/Offer'
import Gallery from '../components/Gallery/Gallery'
import Study from '../components/Study/Study'
import Includes from '../components/Includes/Includes'
import Attributes from '../components/Attributes/Attributes'
import Comments from '../components/Comments/Comments'
import TeachingStaff from '../components/TeachingStaff'

const components = [<Study />, <Includes />, <Gallery />, <TeachingStaff />]

const cardVariants = {
	offscreen: {
		y: 150,
	},
	onscreen: {
		y: 0,
		transition: {
			type: 'spring',
			bounce: 0.2,
			duration: 0.5,
		},
	},
}

function Card({ emoji }) {
	return (
		<motion.div
			className='card-container'
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: true, amount: 0.2 }}>
			<motion.div variants={cardVariants}>{emoji}</motion.div>
		</motion.div>
	)
}

const hash = ['#about', '#about2', '#faq', '#comments']

const Home = () => {
	const [openCallBackModal, openRegistrationModal] = useOutletContext()
	const [isLoading, setIsLoading] = useState(true)
	const location = useLocation()

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [])

	useEffect(() => {
		for (const key in hash) {
			if (location.hash.includes(hash[key])) {
				window.location.href = hash[key]
			}
		}
	}, [location.hash])

	return (
		<>
			{isLoading && (
				<div class='loader-wrapper'>
					<div class='loader'></div>
				</div>
			)}
			<Offer openRegistrationModal={openRegistrationModal} />
			<About openCallBackModal={openCallBackModal} />
			{components.map((item) => {
				return <Card emoji={item} />
			})}
			<Attributes openCallBackModal={openCallBackModal} />
			<Comments />
			<Cost openRegistrationModal={openRegistrationModal} />
			<Faq />
		</>
	)
}

export default Home
