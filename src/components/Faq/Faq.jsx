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
        <div
            className={show ? 'item active' : 'item'}
            onClick={() => setShow(!show)}
        >
            <div className={show ? 'heading show' : 'heading'}>
                <h4>{data.title}</h4>
                <div className="image_wrapper">
                    <img src="./images/faq/plus.svg" alt="" />
                </div>
            </div>
            <div className="accordion">
                <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    vitae ab, quis doloremque officiis est, delectus dolores
                    praesentium iste similique ut cumque. Placeat inventore
                    excepturi reprehenderit alias doloribus repellendus sed.
                </h2>
            </div>
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
                            mask="+7 (999) 999-99-99"
                            placeholder="+7 (___) ___-__-__"
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
