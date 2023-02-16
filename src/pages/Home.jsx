import React, { useEffect } from 'react'
import Cost from '../components/Cost/Cost'
import Modal from '../components/RegisterModal/Modal'
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
import { useLocation } from 'react-router-dom'

const components = [<Study />, <Includes />, <Gallery />, <Teachers />]

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

const hash = ['#about', '#about2', '#faq', '#comments']

const Home = ({ set, showRegister, setShowRegister }) => {
    let location = useLocation()
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        if (showRegister) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, [showRegister])

    useEffect(() => {
        for (const key in hash) {
            if (location.hash.includes(hash[key])) {
                window.location.href = hash[key]
            }
        }
    }, [location.hash])

    console.log(showRegister)

    return (
        <>
            {isLoading && (
                <div class="loader-wrapper">
                    <div class="loader"></div>
                </div>
            )}
            <Offer setShow={setShowRegister} />
            <About set={set} />
            {showRegister && <Modal set={setShowRegister} />}
            {components.map((item) => {
                return <Card emoji={item} />
            })}
            <Attributes set={set} />
            <Comments />
            <Cost setShow={setShowRegister} />
            <Faq />
        </>
    )
}

export default Home
