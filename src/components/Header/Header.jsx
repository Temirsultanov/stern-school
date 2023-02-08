import React from 'react'
import './index.scss'

const Header = () => {
    return (
        <>
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
        </>
    )
}

export default Header
