import React from 'react'
import About from './components/About/About'
import Attributes from './components/Attributes/Attributes'
import Comments from './components/Comments/Comments'
import Header from './components/Header/Header'
import Offer from './components/Offer/Offer'
import 'swiper/css'
import Teachers from './components/Teachers/Teachers'
import { motion } from 'framer-motion'
import Footer from './components/Footer/Footer'
import Faq from './components/Faq/Faq'
import Gallery from './components/Gallery/Gallery'
import Study from './components/Study/Study'
import Includes from './components/Includes/Includes'
import Cost from './components/Cost/Cost'

const components = [
    <Study />,
    <Includes />,
    <Gallery />,
    <Teachers />,
    // <Attributes />,
    // <Comments />,
    <Cost />,
    <Faq />,
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

function Card({ emoji, hueA, hueB }) {
    return (
        <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div variants={cardVariants}>{emoji}</motion.div>
        </motion.div>
    )
}

const App = () => {
    return (
        <>
            <Header />
            <Offer />
            <About />

            {components.map((item) => {
                return <Card emoji={item} />
            })}
            <Footer />
        </>
    )
}

export default App
