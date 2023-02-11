import React, { useEffect } from 'react'
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
import Modal from './components/Modal/Modal'

const components = [
    <Study />,
    <Includes />,
    <Gallery />,
    <Teachers />,
    <Attributes />,
    <Comments />,
    ,
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
    const [show, setShow] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])
    useEffect(() => {
        if (show) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, [show])

    return (
        <>
            {isLoading && (
                <div class="loader-wrapper">
                    <div class="loader"></div>
                </div>
            )}

            <Header />
            <Offer setShow={setShow} />
            <About />
            {show && <Modal set={setShow} />}
            {components.map((item) => {
                return <Card emoji={item} />
            })}
            <Cost setShow={setShow} />
            <Faq />
            <Footer />
        </>
    )
}

export default App
