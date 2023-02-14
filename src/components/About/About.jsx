import React from 'react'
import './index.scss'
import InputMask from 'react-input-mask'
import axios from 'axios'
import { toast } from 'react-toastify'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const About = ({ set }) => {
    const [phone, setPhone] = React.useState('')

    const notify = () => toast.success('Заявка отправлена!!')
    const notifyError = () => toast.error('Ошибка отправки!!')
    const Send = () => {
        axios
            .post('https://kurs.stern.xyz:8002/api/v1/feedback/', { phone })
            .then((res) => notify())
            .catch((err) => notifyError())
    }

    return (
        <div className="about" id={'about2'}>
            <div className="wrapper">
                <div className="cont">
                    <div className="row">
                        <div className="card">
                            <div className="image_wrapper ">
                                <div className="first">
                                    <LazyLoadImage
                                        src="./images/about/table.png"
                                        width={'100%'}
                                        height={'100%'}
                                        alt="Image Alt"
                                    />
                                </div>
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
                                    <div className="second">
                                        <LazyLoadImage
                                            src="./images/about/roket.png"
                                            width={'100%'}
                                            height={'100%'}
                                            alt="Image Alt"
                                        />
                                    </div>
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
                                <div className="third">
                                    <LazyLoadImage
                                        src="./images/about/ping.png"
                                        width={'100%'}
                                        height={'100%'}
                                        alt="Image Alt"
                                    />
                                </div>
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
                                <div className="third">
                                    <LazyLoadImage
                                        src="./images/about/ping.png"
                                        width={'100%'}
                                        height={'100%'}
                                        alt="Image Alt"
                                    />
                                </div>
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
                                <div className="forth">
                                    <LazyLoadImage
                                        src="./images/modal/phone.png"
                                        width={'100%'}
                                        height={'100%'}
                                        alt="Image Alt"
                                    />
                                </div>
                            </div>
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                placeholder="+7 (___) ___-__-__"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
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
