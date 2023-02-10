import React from 'react'
import InputMask from 'react-input-mask'
import { motion } from 'framer-motion'
import AnimatedText from '../AnimatedText'
import './index.scss'

const data = [
    {
        title: 'Какие документы нужны ребенку с собой?',
    },
    {
        title: 'Мобильные телефоны в лагере',
    },
    {
        title: 'Трансфер',
    },
    {
        title: 'Что положить ребенку с собой?',
    },
    {
        title: 'Расскажите о площадке?',
    },
    {
        title: 'Если ребенок постоянно принимает препараты',
    },
]

const FaqList = () => {
    return (
        <div className="grid">
            {data.map((item) => (
                <FaqItem key={item.title} data={item} />
            ))}
        </div>
    )
}

const FaqItem = ({ data }) => {
    const [show, setShow] = React.useState(false)
    return (
        <div className="item" onClick={() => setShow(!show)}>
            <div className={show ? 'heading show' : 'heading'}>
                <h4>{data.title}</h4>
                <div className="image_wrapper">
                    {show ? (
                        <img src="./images/faq/minus.svg" alt="" />
                    ) : (
                        <img src="./images/faq/plus.svg" alt="" />
                    )}
                </div>
            </div>
            {show && (
                <motion.p
                    className="App"
                    initial="hidden"
                    animate={show ? 'visible' : 'hidden'}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.015,
                            },
                        },
                    }}
                >
                    <AnimatedText
                        type={'heading2'}
                        text={
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem eaque error maiores omnis laudantium saepe ipsa quo nulla praesentium? Veniam, atque! Corrupti deserunt consectetur dolores nemo non natus libero?'
                        }
                        duration={0.05}
                    />
                </motion.p>
            )}
        </div>
    )
}

const Faq = () => {
    return (
        <div className="faq" id="faq">
            <div className="wrapper">
                <div className="cont">
                    <div className="left">
                        <h3>Частые вопросы</h3>
                        <p>Нет вашего вопроса?</p>
                        <InputMask
                            mask="+7 9999 9999-999-999"
                            placeholder="+7 ____ ____-___-___ "
                        />
                        <button>Отправить</button>
                    </div>
                    <div className="right">
                        <FaqList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
