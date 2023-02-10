import React from 'react'
import './index.scss'

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="cont">
                    <div className="top">
                        <h2>
                            Школа
                            <br /> Точных
                            <br /> Наук
                        </h2>
                        <div className="column">
                            <div className="card">
                                <div className="image_wrapper">
                                    <img src="./images/footer/telegram.svg" alt="" />
                                </div>
                                <p>Telegram</p>
                            </div>
                            <div className="card">
                                <div className="image_wrapper">
                                    <img src="./images/footer/youtube.svg" alt="" />
                                </div>
                                <p>YouTube</p>
                            </div>
                            <div className="card">
                                <div className="image_wrapper">
                                    <img src="./images/footer/whats.svg" alt="" />
                                </div>
                                <p>WhatsApp</p>
                            </div>
                        </div>
                        <div className="column large">
                            <div className="card">
                                <div className="image_wrapper">
                                    <img src="./images/footer/phone.svg" alt="" />
                                </div>
                                <p>+7 (985) 971 11 11</p>
                            </div>
                            <div className="card">
                                <div className="image_wrapper">
                                    <img src="./images/footer/mail.svg" alt="" />
                                </div>
                                <p>pochtaschool@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>© 2021 ШТЕРН ИП Юмашев Михаил Владиславович </p>
                        <p>ИНН 770504944805</p>
                        <p>ОГРНИП 317774600318392</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
