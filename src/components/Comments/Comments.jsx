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
        url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Hvgv4TEJ84Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> ',
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
                    <a
                        href="https://t.me/shternik3"
                        className="ask"
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <img src="./images/comments/plus.svg" alt="" />
                        <p>Оставить отзыв</p>
                    </a>
                </div>
            </div>
            <div className="slider">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={
                        window.innerWidth < 768
                            ? 1.169
                            : window.innerWidth > 2000
                            ? 5
                            : 5
                    }
                    className="mySwiper"
                    initialSlide={window.innerWidth < 768 ? 2 : 0}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                >
                    <SwiperSlide className="empty">
                        <p>Оставить свой отзыв</p>
                        <img src="/images/comments/plus2.svg" alt="" />
                    </SwiperSlide>
                    {data.map((item, index) => (
                        <SwiperSlide className="card" key={index}>
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
                            
                        
                    ))}
                </Swiper>
            </div>
            <div className="arrows">
                <div
                    className="arrow_wrapper"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <svg
                        className="rotate"
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
                <div
                    className="arrow_wrapper"
                    onClick={() => swiperRef.current?.slideNext()}
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
    )
}

export default Comments
