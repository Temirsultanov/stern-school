import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './index.scss'

const data = [
    {
        type: 'text',
        name: 'Marat',
        messanger: 'Telegram',
        text: 'Камиль тоже на май уже чемодан собирает. Сказал, что это было лучше Алтая, спортивного лагеря и семейного лагеря. Спасибо организаторам и вожатым.',
    },
    {
        type: 'video',
        url: './images/comments/video1.mp4',
    },
    {
        type: 'text',
        name: 'Дарья',
        messanger: 'Telegram',
        text: 'Спасибо большое! Вы делаете прекрасное дело!',
    },
    {
        type: 'text',
        name: 'Надежда Авдасева',
        messanger: 'Telegram',
        text: 'Спасибо вам за великолепную смену!!! Детям очень понравилось. Столько положительных эмоций. С наступающим новым годом вас!!!а',
    },
    {
        type: 'text',
        name: 'Анна',
        messanger: 'Telegram',
        text: 'Спасибо огромное организаторам и вожатым за отличную организацию, Серена счастлив, всю дорогу домой рассказывал, сколько всего полезного, нового он узнал. Вы молодцы, уже не первый раз с вами, на май собираются уже вдвоем Серга и Ваня. С Наступающим Новым Годом и Рождеством! Новых идей инициатив, замечательных преподавателей и дружных ребят!',
    },
    {
        type: 'text',
        name: 'Илья Кузнецов',
        messanger: 'Telegram',
        text: 'Какие молодцы, шикарный праздник ребятам организовали, СПАСИБО!<br/><br/> И всех с наступающими праздниками! Пусть заряд и настроение сохранятся на новый рывок:)<br/><br/>Особенно ребятам из нашего 1го отряда от души желаю справиться с завершением года с честью и поступить в те ВУЗы, которые являются фокусными :))',
    },
    {
        type: 'text',
        name: 'Татьяна',
        messanger: 'Telegram',
        text: 'Спасибо огромное за внимание и креативность в обучении детей!!!',
    },
    {
        type: 'text',
        name: 'Татьяна',
        messanger: 'Telegram',
        text: 'Спасибо огромное за лагерь! Мы уехали, а про диск с фото не спросили. Его как-то можно получить? Или это ссылка на диск?',
    },
    {
        type: 'text',
        name: 'Галина Голотина',
        messanger: 'Telegram',
        text: 'И Коля первое что сказал - "Можно я в мае поеду?" и еще добавил: "Это мой первый лагерь, в котором по учителям можно плакать"<br/>Дорогие организаторы, воспитатели, учителя - всем вам огромное СПАСИБО за счастливого, увлеченного знаниями ребенка <3<br/>С Наступающим Новым Годом!!!',
    },
    {
        type: 'text',
        name: 'Дарья',
        messanger: 'Telegram',
        text: 'Дима уже на май отпросился &#128514;',
    },
]

const Video = ({ url }) => {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const vidRef = React.useRef(null)

    return (
        <>
            {!isPlaying && (
                <img
                    src="./images/comments/play.svg"
                    alt=""
                    onClick={() => {
                        vidRef.current.play()
                        setIsPlaying(true)
                    }}
                />
            )}

            <video
                ref={vidRef}
                className={!isPlaying && 'blur'}
                onClick={() => {
                    if (isPlaying) {
                        setIsPlaying(false)
                        vidRef.current.pause()
                    } else {
                        setIsPlaying(true)
                        vidRef.current.play()
                    }
                }}
            >
                <source src={url} />
            </video>
        </>
    )
}

const Comments = () => {
    let swiperRef = React.useRef(null)

    return (
        <div className="comments" id="comments">
            <div className="wrapper">
                <div className="cont">
                    <h2>Отзывы</h2>
                    <p className="main">
                        Орфография и пунктуация авторов сохранены :)
                    </p>
                    <img
                        src="./images/comments/ping.png"
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
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={
                        window.innerWidth < 768
                            ? 1.169
                            : window.innerWidth > 2000
                            ? 8
                            : 5
                    }
                    className="mySwiper"
                    initialSlide={window.innerWidth < 657 ? 2 : 1}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                >
                    <SwiperSlide className="empty">
                        <p>Оставить свой отзыв</p>
                        <img src="/images/comments/plus2.svg" alt="" />
                    </SwiperSlide>
                    {data.map((item) => (
                        <>
                            {item.type === 'text' ? (
                                <SwiperSlide className="card">
                                    <div className="row">
                                        <h5>{item.name}</h5>
                                        <p>{item.messanger}</p>
                                    </div>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.text,
                                        }}
                                    ></p>
                                </SwiperSlide>
                            ) : (
                                <SwiperSlide className="video card">
                                    <Video url={item.url} />
                                </SwiperSlide>
                            )}
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
