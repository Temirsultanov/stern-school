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
                            <a href="https://t.me/shternik3" className="card">
                                <div className="image_wrapper">
                                    <img
                                        src="./images/footer/telegram.svg"
                                        alt=""
                                    />
                                </div>
                                <p>Telegram</p>
                            </a>
                            <a
                                href="https://www.youtube.com/@user-nl6nk1ez7j"
                                className="card"
                            >
                                <div className="image_wrapper">
                                    <img
                                        src="./images/footer/youtube.svg"
                                        alt=""
                                    />
                                </div>
                                <p>YouTube</p>
                            </a>
                            <a
                                href="https://wa.clck.bar/79365120601"
                                className="card"
                            >
                                <div className="image_wrapper">
                                    <img
                                        src="./images/footer/whats.svg"
                                        alt=""
                                    />
                                </div>
                                <p>WhatsApp</p>
                            </a>
                        </div>
                        <div className="column large">
                            <a href="tel:+7936512 0601" className="card">
                                <div className="image_wrapper">
                                    <img
                                        src="./images/footer/phone.svg"
                                        alt=""
                                    />
                                </div>
                                <p>+7 (985) 971 11 11</p>
                            </a>
                            <a href="mailto:hi@stern.xyz" className="card">
                                <div className="image_wrapper">
                                    <img
                                        src="./images/footer/mail.svg"
                                        alt=""
                                    />
                                </div>
                                <p>pochtaschool@gmail.com</p>
                            </a>
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
