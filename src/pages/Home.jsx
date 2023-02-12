import React from 'react'
import Cost from '../components/Cost/Cost'
import Modal from '../components/Modal/Modal'
import Faq from '../components/Faq/Faq'
import About from '../components/About/About'
import Offer from '../components/Offer/Offer'
import Gallery from '../components/Gallery/Gallery'
import Study from '../components/Study/Study'
import Includes from '../components/Includes/Includes'
import Teachers from '../components/Teachers/Teachers'
import Attributes from '../components/Attributes/Attributes'
import Comments from '../components/Comments/Comments'
import { motion } from 'framer-motion'

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

const Home = () => {
    const [show, setShow] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])
    React.useEffect(() => {
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

            <Offer setShow={setShow} />
            <About />
            {show && <Modal set={setShow} />}
            {components.map((item) => {
                return <Card emoji={item} />
            })}
            <Cost setShow={setShow} />
            <Faq />
        </>
    )
}

export default Home
