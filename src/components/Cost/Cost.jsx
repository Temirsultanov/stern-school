import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './index.scss'

const Cost = ({ setShow }) => {
    const [grade, setGrade] = React.useState(0)
    let swiperRef = React.useRef(null)

    return (
        <div className="cost">
            <div className="wrapper">
                <div className="cont">
                    <div className="slider">
                        <div className="arrows">
                            <img
                                src="./images/cost/arrow.svg"
                                alt=""
                                onClick={() => swiperRef.current?.slidePrev()}
                            />
                            <img
                                src="./images/cost/arrow.svg"
                                alt=""
                                onClick={() => swiperRef.current?.slideNext()}
                            />
                        </div>
                        <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={1}
                            className="slider_swiper"
                            initialSlide={1}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper
                            }}
                        >
                            {[1, 2, 3].map((item, index) => (
                                <SwiperSlide>
                                    <div className="card" key={index}>
                                        <p className="cost_text">
                                            {grade === 0
                                                ? '44 900 ₽'
                                                : '72 000 ₽'}
                                        </p>
                                        <h2>Стоимость</h2>
                                        <div className="grades">
                                            <div
                                                className={
                                                    grade === 0
                                                        ? 'grade active'
                                                        : 'grade'
                                                }
                                                onClick={() => setGrade(0)}
                                            >
                                                1-8 класс
                                            </div>
                                            <div
                                                className={
                                                    grade === 1
                                                        ? 'grade active'
                                                        : 'grade'
                                                }
                                                onClick={() => setGrade(1)}
                                            >
                                                9-11 класс
                                            </div>
                                        </div>
                                        <h5>
                                            {grade === 0
                                                ? '60 000 ₽'
                                                : '160 000 ₽'}{' '}
                                            - стоимость такого же количества
                                            занятий в школе
                                        </h5>
                                        <p className="subcost">
                                            {grade === 0
                                                ? '60 000₽ - 44 900₽ = 15 100₽'
                                                : '160 000₽ - 72 000₽ = 88 000₽'}{' '}
                                            экономии
                                        </p>
                                        <div className="grid">
                                            <div className="item">
                                                <div className="image_wrapper">
                                                    <img
                                                        src="./images/cost/roket.png"
                                                        alt=""
                                                        className="roket"
                                                    />
                                                </div>
                                                <p>
                                                    Эффект 3 месяцев занятий
                                                    всего за 8 дней
                                                </p>
                                            </div>
                                            <div className="item">
                                                <div className="image_wrapper moun">
                                                    <img
                                                        src="./images/cost/moun2.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <p>
                                                    Самый лучший способ
                                                    заполнить все пробелы в
                                                    знаних и подготовиться к
                                                    ОГЭ/ЕГЭ
                                                </p>
                                            </div>
                                        </div>
                                        <span>
                                            *трансфер и материалы для занятий
                                            включены в стоимость
                                        </span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="adaptive_slider">
                        <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={1}
                            initialSlide={1}
                        >
                            {[1, 3, 42].map((item, index) => (
                                <SwiperSlide className="adaptive_card">
                                    <h4>Стоимость</h4>
                                    <div className="slides">
                                        <Swiper
                                            spaceBetween={10}
                                            slidesPerView={1.4}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide
                                                onClick={() => setGrade(0)}
                                                className={
                                                    grade === 0
                                                        ? 'slide active'
                                                        : 'slide'
                                                }
                                            >
                                                1-8 класс
                                            </SwiperSlide>
                                            <SwiperSlide
                                                onClick={() => setGrade(1)}
                                                className={
                                                    grade === 1
                                                        ? 'slide active'
                                                        : 'slide'
                                                }
                                            >
                                                10-11 класс
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className="cost_block">44 900 ₽</div>
                                    <p className="desc">
                                        <span>60 000 ₽</span> - стоимость такого
                                        же количества занятий в школе
                                    </p>
                                    <div className="yellow_block">
                                        60 000₽ - 44 900₽ = 15 100₽ экономии
                                    </div>
                                    <div className="cards_adaptive">
                                        <div className="adaptive_card2">
                                            <div className="card_image">
                                                <img
                                                    src="./images/cost/roket.png"
                                                    alt=""
                                                    className="roket"
                                                />
                                            </div>
                                            <p>
                                                Эффект 3 месяцев занятий всего
                                                за 8 дней
                                            </p>
                                        </div>
                                        <div className="adaptive_card2">
                                            <div className="card_image">
                                                <img
                                                    src="./images/cost/moun2.png"
                                                    alt=""
                                                    className="moun"
                                                />
                                            </div>
                                            <p>
                                                Самый лучший способ заполнить
                                                все пробелы в знаних и
                                                подготовиться к ОГЭ/ЕГЭ
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <button onClick={() => setShow(true)}>Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default Cost
