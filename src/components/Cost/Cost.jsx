import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './index.scss'

const Cost = ({ openRegistrationModal }) => {
	const [grade, setGrade] = React.useState(0)
	let swiperRef = React.useRef(null)

	return (
		<div className='cost'>
			<div className='wrapper'>
				<div className='cont'>
					<div className='slider'>
						<div className='arrows'>
							<img
								src='./images/cost/arrow.svg'
								alt=''
								onClick={() => {
									swiperRef.current?.slidePrev()
									if (grade === 1) {
										setGrade(0)
									} else {
										setGrade(1)
									}
								}}
							/>
							<img
								src='./images/cost/arrow.svg'
								alt=''
								onClick={() => {
									swiperRef.current?.slideNext()
									if (grade === 0) {
										setGrade(1)
									} else {
										setGrade(0)
									}
								}}
							/>
						</div>
						<Swiper
							loop={true}
							spaceBetween={20}
							slidesPerView={1}
							className='slider_swiper'
							onBeforeInit={(swiper) => {
								swiperRef.current = swiper
							}}>
							{[0, 1].map((item) => (
								<SwiperSlide>
									<div className='card'>
										<p className='cost_text'>{grade === 0 ? '48 500 ₽' : '78 500 ₽'}</p>
										<h2>Стоимость</h2>
										<div className='grades'>
											<div
												style={{ height: '64px' }}
												className={grade === 0 ? 'grade active' : 'grade'}
												onClick={() => setGrade(0)}>
												1-8 класс
											</div>
											<div className={grade === 1 ? 'grade active' : 'grade'} onClick={() => setGrade(1)}>
												9-11 класс и<br /> выпускники
											</div>
										</div>
										<h5>{grade === 0 ? '80 000 ₽' : '320 000 ₽'}- стоимость такого же количества занятий в школе</h5>
										<p className='subcost'>
											{grade === 0 ? '80 000₽ - 48 500₽ = 31 500₽' : '320 000 - 78 500₽ = 241 500₽'} экономии
										</p>
										<div className='grid'>
											<div className='item'>
												<div className='image_wrapper'>
													<img src='./images/cost/roket.png' alt='' className='roket' />
												</div>
												<p>Эффект 3 месяцев занятий всего за 8 дней</p>
											</div>
											<div className='item'>
												<div className='image_wrapper moun'>
													<img src='./images/cost/moun2.png' alt='' />
												</div>
												<p>
													{grade === 0
														? 'Самый лучший способ заполнить все пробелы в знаних и подготовиться к поступлению в матшколы и олимпиадам'
														: 'Самый лучший способ заполнить все пробелы в знаних и подготовиться к ОГЭ/ЕГЭ'}
												</p>
											</div>
										</div>
										<span>*трансфер и материалы для занятий включены в стоимость</span>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className='adaptive_slider'>
						<div className='adaptive_card'>
							<h4>Стоимость</h4>
							<div className='slides'>
								<div onClick={() => setGrade(0)} className={grade === 0 ? 'slide active' : 'slide'}>
									1-8 класс
								</div>
								<div onClick={() => setGrade(1)} className={grade === 1 ? 'slide active' : 'slide'}>
									9-11 класс и<br /> выпускники
								</div>
							</div>
							<div className='cost_block'>{grade === 0 ? '45 900 ₽' : '74 900 ₽'}</div>
							<p className='desc'>
								<span>{grade === 0 ? '80 000₽' : '240 000 ₽'}</span>- стоимость такого же количества занятий в школе
							</p>
							<div className='yellow_block'>
								{grade === 0 ? '80 000₽ - 45 900₽ = 34 100₽' : '240 000₽ - 74 900₽ = 165 100₽'} экономии
							</div>
							<div className='cards_adaptive'>
								<div className='adaptive_card2'>
									<div className='card_image'>
										<img src='./images/cost/roket.png' alt='' className='roket' />
									</div>
									<p>Эффект 3 месяцев занятий всего за 8 дней</p>
								</div>
								<div className='adaptive_card2'>
									<div className='card_image'>
										<img src='./images/cost/moun2.png' alt='' className='moun' />
									</div>
									<p>
										{grade === 0
											? 'Самый лучший способ заполнить все пробелы в знаних и подготовиться к поступлению в матшколы и олимпиадам'
											: 'Самый лучший способ заполнить все пробелы в знаних и подготовиться к ОГЭ/ЕГЭ'}
									</p>
								</div>
							</div>
						</div>
					</div>

					<button onClick={openRegistrationModal}>Регистрация</button>
				</div>
			</div>
		</div>
	)
}

export default Cost
