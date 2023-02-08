import React, { useEffect, useState } from 'react'
import './index.scss'
import { motion } from 'framer-motion'
import AnimatedText from '../AnimatedText'

const data = [
    {
        name: 'ВОЛКОВА Александра',
        text: 'Профессионал, психолог, администратор, программист и много всего еще интересного',
        image: './images/teachers/photo1.png',
    },
    {
        name: 'ВОЛКОВА Александра',
        text: 'Профессионал',
        image: './images/teachers/photo2.png',
    },
    {
        name: 'ВОЛКОВА Александра',
        text: 'администратор, программист',
        image: './images/teachers/photo1.png',
    },
    {
        name: 'ВОЛКОВА Александра',
        text: 'интересного',
        image: './images/teachers/photo2.png',
    },
]

const RenderSlider = ({ index, replay }) => {
    return (
        <div className="slider">
            <div className="main_slide">
                <div className="image_wrapper">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.3 }}
                        transition={{ duration: 0.3 }}
                        animate={replay ? { opacity: 1, scale: 1 } : 'hidden'}
                    >
                        <img src={data[index].image} alt="" />
                    </motion.div>
                </div>

                <div className="text">
                    <motion.div
                        className="App"
                        initial="hidden"
                        animate={replay ? 'visible' : 'hidden'}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.025,
                                },
                            },
                        }}
                    >
                        <AnimatedText
                            type={'heading2'}
                            text={data[index].name}
                            duration={0.15}
                        />
                    </motion.div>
                    <motion.div
                        className="App"
                        initial="hidden"
                        // animate="visible"
                        animate={replay ? 'visible' : 'hidden'}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.025,
                                },
                            },
                        }}
                    >
                        <AnimatedText
                            type={'heading1'}
                            text={data[index].text}
                            duration={0.55}
                        />
                    </motion.div>
                </div>
            </div>
            {data[index + 1] && (
                <div className="next_slide">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.3 }}
                        transition={{ duration: 0.3 }}
                        animate={replay ? { opacity: 1, scale: 1 } : 'hidden'}
                    >
                        <img src={data[index + 1].image} alt="" />
                    </motion.div>
                </div>
            )}
        </div>
    )
}

const Teachers = () => {
    const [index, setIndex] = useState(0)
    const [replay, setReplay] = useState(true)

    useEffect(() => {
        setIndex(index)
    }, [index])
    const handleReplay = () => {
        setReplay(!replay)
        setTimeout(() => {
            setReplay(true)
        }, 600)
    }

    return (
        <div className="teachers">
            <div className="wrapper">
                <div className="cont">
                    <h2>Педагогический состав</h2>

                    <RenderSlider
                        index={index}
                        set={setIndex}
                        replay={replay}
                    />
                    <div className="arrows">
                        <div
                            className="arrow_wrapper"
                            onClick={() => {
                                handleReplay()
                                return index + 1 > 1
                                    ? setIndex((prev) => prev - 1)
                                    : null
                            }}
                        >
                            <svg
                                width="17"
                                height="30"
                                viewBox="0 0 17 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="rotate"
                            >
                                <path
                                    d="M14 13C12.8954 13 12 13.8954 12 15C12 16.1046 12.8954 17 14 17L14 13ZM16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857865C2.90524 0.0768166 1.63891 0.0768167 0.857863 0.857866C0.0768144 1.63891 0.0768145 2.90524 0.857863 3.68629L12.1716 15L0.857865 26.3137C0.0768167 27.0948 0.0768168 28.3611 0.857866 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17L15 17L15 13L14 13L14 17Z"
                                    fill="#5277F7"
                                />
                            </svg>
                        </div>
                        <div
                            className="arrow_wrapper"
                            onClick={() => {
                                handleReplay()
                                return index + 1 !== data.length
                                    ? setIndex((prev) => prev + 1)
                                    : null
                            }}
                        >
                            <svg
                                width="17"
                                height="30"
                                viewBox="0 0 17 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14 13C12.8954 13 12 13.8954 12 15C12 16.1046 12.8954 17 14 17L14 13ZM16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857865C2.90524 0.0768166 1.63891 0.0768167 0.857863 0.857866C0.0768144 1.63891 0.0768145 2.90524 0.857863 3.68629L12.1716 15L0.857865 26.3137C0.0768167 27.0948 0.0768168 28.3611 0.857866 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17L15 17L15 13L14 13L14 17Z"
                                    fill="#5277F7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teachers
