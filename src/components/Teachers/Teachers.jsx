import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const data = [
    {
        name: 'ЮМАШЕВ Михаил Владиславович',
        text: 'Руководитель Школы Точных Наук',
        image: './images/teachers/photo1.jpeg',
    },
    {
        name: 'ВОЛКОВА Александра',
        text: 'Психолог-педагог, администратор',
        image: './images/teachers/photo2.jpg',
    },
    {
        name: 'ЛОБСАНОВА Татьяна',
        text: 'Преподаватель математики',
        image: './images/teachers/photo11.jpg',
    },
    {
        name: 'КАРТВЕЛИШВИЛИ Татьяна',
        text: 'Соруководитель Школы, преподаватель математики',
        image: './images/teachers/photo2.jpeg',
    },
    {
        name: 'ЗИЗГАНОВА Елена',
        text: 'Преподаватель математики',
        image: './images/teachers/photo3.jpg',
    },
    {
        name: 'КУЛИКОВ Андрей',
        text: 'Преподаватель математики',
        image: './images/teachers/photo4.jpg',
    },
    {
        name: 'ХМЕЛЕВА Ксения',
        text: 'Преподаватель русского языка',
        image: './images/teachers/photo5.jpg',
    },
    {
        name: 'МАТВЕЕВ Алексей',
        text: 'Преподаватель математики',
        image: './images/teachers/photo6.jpg',
    },
    {
        name: 'КОРАБЛИНОВ Никита',
        text: 'Преподаватель программирования',
        image: './images/teachers/photo7.jpg',
    },
    {
        name: 'МУДИНОВ Темур',
        text: 'Преподаватель биологии',
        image: './images/teachers/photo9.jpg',
    },
    {
        name: 'КУЛИЕВА Каролина',
        text: 'Преподаватель русского языка',
        image: './images/teachers/photo10.jpg',
    },
]

const Teachers = () => {
    const [index, setIndex] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setIndex(index)
    }, [index])

    return (
        <div className="teachers">
            <div className="wrapper">
                <div className="cont">
                    <h2>Педагогический состав</h2>

                    <div className="slider">
                        <div className="circle"></div>
                        <Swiper
                            slidesPerView={window.innerWidth < 768 ? 1 : 1.5}
                            spaceBetween={20}
                            loop={true}
                            className="mySwiper"
                            onBeforeInit={(swiper) => {
                                ref.current = swiper
                            }}
                        >
                            {data.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="image">
                                        <LazyLoadImage
                                            src={slide.image}
                                            width={'100%'}
                                            height={'100%'}
                                            alt="Image Alt"
                                        />
                                    </div>
                                    <div className="text">
                                        <h5>{slide.name}</h5>
                                        <span>{slide.text}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="arrows">
                        <div
                            className="arrow_wrapper"
                            onClick={() => ref.current?.slidePrev()}
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
                            onClick={() => ref.current?.slideNext()}
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
