import React, { useState, useEffect } from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'

import Cost from '../components/Cost/Cost'
import About from '../components/About/About'
import Offer from '../components/Offer/Offer'
import Gallery from '../components/Gallery/Gallery'
import Study from '../components/Study/Study'
import Includes from '../components/Includes/Includes'
import Attributes from '../components/Attributes/Attributes'
import Comments from '../components/Comments/Comments'
import TeachingStaff from '../components/TeachingStaff'

const components = [
	{ name: 'Study', component: <Study /> },
	{ name: 'Includes', component: <Includes /> },
	{ name: 'Gallery', component: <Gallery /> },
	{ name: 'TeachingStaff', component: <TeachingStaff /> },
]

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

const hash = ['#about', '#accomodations', '#faq', '#reviews']

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
				<div className='loader-wrapper'>
					<div className='loader'></div>
				</div>
			)}
			<Offer openRegistrationModal={openRegistrationModal} />
			<About openCallBackModal={openCallBackModal} />
			{components.map((item) => {
				return <Card key={item.name} emoji={item.component} />
			})}
			<Attributes openCallBackModal={openCallBackModal} />
			<Comments />
			<Cost openRegistrationModal={openRegistrationModal} />
		</>
	)
}

export default Home
