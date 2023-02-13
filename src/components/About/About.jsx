import React from 'react'
import './index.scss'
import InputMask from 'react-input-mask'
import axios from 'axios'

const About = ({ set }) => {
    const [phone, setPhone] = React.useState("")
    const Send = () => {
        axios
            .post('https://kurs.stern.xyz:8002/api/v1/feedback/', {phone})
            .then(console.log('success'))
            .catch((err) => console.error(err))
    }

    return (
        <div className="about" id={'about2'}>
            <div className="wrapper">
                <div className="cont">
                    <div className="row">
                        <div className="card">
                            <div className="image_wrapper">
                                <img
                                    src="./images/about/table.png"
                                    alt=""
                                    className="first"
                                />
                            </div>
                            <p>
                                В этот раз наша смена стала длиннее, участников
                                ждут целых <span>8 дней</span>, наполненных
                                новыми знаниями и невероятными эмоциями!
                            </p>
                        </div>
                        <div className="card">
                            <div className="image_wrapper">
                                <div className="second_wrapper">
                                    <img
                                        src="./images/about/roket.png"
                                        alt=""
                                        className="second"
                                    />
                                </div>
                            </div>
                            <p>
                                По количеству занятий всегда одна такая смена
                                приравнивается к 3 дополнительным месяцам
                                занятий! Круто, не правда ли?
                            </p>
                        </div>
                        <div className="card adaptive_card">
                            <div className="image_wrapper">
                                <img
                                    src="./images/about/ping.png"
                                    alt=""
                                    className="third"
                                />
                            </div>
                            <p>
                                Для учеников 1-8 класса будет организован
                                математических интенсив с авторскими
                                олимпиадными задачами преподавателей нашей
                                школы, а вот ребят 9-11 классов ждет настоящий
                                подарок - интенсив к ОГЭ и ЕГЭ сразу по 4
                                предметам - математике, русскому языку,
                                информатике и физике!
                            </p>
                        </div>
                        <button
                            className="adaptive_button"
                            onClick={() => set(true)}
                        >
                            Оставить заявку
                        </button>
                    </div>

                    <div className="second_row">
                        <div className="card">
                            <div className="image_wrapper">
                                <img
                                    src="./images/about/ping.png"
                                    alt=""
                                    className="third"
                                />
                            </div>
                            <p>
                                Для учеников 1-8 класса будет организован
                                математических интенсив с авторскими
                                олимпиадными задачами преподавателей нашей
                                школы, а вот ребят 9-11 классов ждет настоящий
                                подарок - интенсив к ОГЭ и ЕГЭ сразу по 4
                                предметам - математике, русскому языку,
                                информатике и физике!
                            </p>
                        </div>
                        <div className="card phone">
                            <div className="image_wrapper">
                                <img
                                    src="./images/about/phone.svg"
                                    alt=""
                                    className="forth"
                                />
                            </div>
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                placeholder="+7 (___) ___-__-__"
                                value={setPhone}
                                onChange={e => setPhone(e.target.value)}
                            />
                            <button onClick={() => Send()}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
