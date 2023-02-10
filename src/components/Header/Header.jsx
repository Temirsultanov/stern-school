import React, { useEffect, useState } from 'react'
import './index.scss'

const Header = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (show) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, [show])

    return (
        <div className="header">
            <div className="header_top">
                <div className="wrapper">
                    <div className="info">
                        <div className="info_card">
                            <div className="image_wrapper">
                                <img src="./images/header/phone.svg" alt="" />
                            </div>
                            <p>+7 (985) 971 11 11</p>
                        </div>
                        <div className="info_card">
                            <div className="image_wrapper">
                                <img src="./images/header/mail.svg" alt="" />
                            </div>
                            <p>pochtaschool@gmail.com</p>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="image_wrapper">
                            <img src="./images/header/whats.svg" alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src="./images/header/telegram.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="wrapper">
                    <div className="nav">
                        <a href="/">О смене</a>
                        <a href="/">Проживание и питание</a>
                        <a href="/">Отзывы</a>
                        <a href="/">Частые вопросы</a>
                    </div>
                    <div className="buttons">
                        <button>Регистрация</button>
                        <button>Перезвоните мне</button>
                    </div>
                </div>
            </div>
            <div className="adaptive_header">
                <div className="icons">
                    <div className="image_wrapper">
                        <img src="./images/header/phone.svg" alt="" />
                    </div>
                    <div className="image_wrapper">
                        <img src="./images/header/mail.svg" alt="" />
                    </div>
                    <div className="image_wrapper">
                        <img src="./images/header/whats.svg" alt="" />
                    </div>
                    <div className="image_wrapper">
                        <img src="./images/header/telegram.svg" alt="" />
                    </div>
                </div>
                <div className="burger" onClick={() => setShow(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={show ? 'burger_content show' : 'burger_content'}>
                <img
                    src="./images/header/cross.svg"
                    alt=""
                    onClick={() => setShow(false)}
                />
                <a href="#about" onClick={() => setShow(false)}>
                    О смене
                </a>
                <a href="#about2" onClick={() => setShow(false)}>
                    Проживание и питание
                </a>
                <a href="#comments" onClick={() => setShow(false)}>
                    Отзывы
                </a>
                <a href="#faq" onClick={() => setShow(false)}>
                    Частые вопросы
                </a>
                <a href="/">Регистрация</a>
                <a href="/">Перезвоните мне</a>
            </div>
        </div>
    )
}

export default Header
