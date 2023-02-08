import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './index.scss'

const Comments = () => {
    let swiperRef = React.useRef(null)

    return (
        <div className="comments">
            <div className="wrapper">
                <div className="cont">
                    <h2>Отзывы</h2>
                    <p className="main">
                        Орфография и пунктуация авторов сохранены :)
                    </p>
                    <img
                        src="./images/comments/ping.svg"
                        alt=""
                        className="main_img"
                    />
                    <div className="ask">
                        <img src="./images/comments/plus.svg" alt="" />
                        <p>Оставить отзыв</p>
                    </div>
                </div>
            </div>
            <div className="slider">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={8.5}
                    initialSlide={1}
                    className="mySwiper"
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                >
                    <SwiperSlide className="empty">
                        <p>Оставить свой отзыв</p>
                        <img src="/images/comments/plus2.svg" alt="" />
                    </SwiperSlide>
                    {[0, 1, 41, 4123, 5, 123, 51, 23].map((item) => (
                        <>
                            <SwiperSlide className="video card">
                                <img src="./images/comments/video.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className="card">
                                <div className="row">
                                    <h5>Максим Ирискин</h5>
                                    <p>WhatsApp</p>
                                </div>
                                <p>
                                    Сын ездил в лагерь, остался в полном
                                    восторге, хочет поехать еще, когда у вас там
                                    смены?
                                    <br />
                                    <br /> Сын ездил в лагерь, остался в полном
                                    восторге, хочет поехать еще, когда у вас там
                                    смены?
                                    <br />
                                    <br /> Сын ездил в лагерь, остался в полном
                                    восторге, хочет поехать еще, когда у вас там
                                    смены?
                                    <br />
                                    <br /> Сын ездил в лагерь, остался в полном
                                    восторге, хочет поехать еще, когда у вас там
                                    смены?
                                    <br />
                                    <br />
                                    Сын ездил в лагерь, остался в полном
                                    восторге, хочет поехать еще, когда у вас там
                                    смены?
                                </p>
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
            <div className="arrows">
                <img
                    src="./images/comments/arrow.svg"
                    alt=""
                    className="rotate"
                    onClick={() => swiperRef.current?.slidePrev()}
                />
                <img
                    src="./images/comments/arrow.svg"
                    alt=""
                    onClick={() => swiperRef.current?.slideNext()}
                />
            </div>
        </div>
    )
}

export default Comments
