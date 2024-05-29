import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { formatPrice } from '../../lib/formatPrice'
import './index.scss'

const Cost = ({ openRegistrationModal }) => {
	const [grade, setGrade] = React.useState(0)
	let swiperRef = React.useRef(null)

	const LOW_SCHOOL_PRICE = 75900
	const HIGH_SCHOOL_PRICE = 96000
	const REGULAR_LOW_SCHOOL_PRICE = 120000
	const REGULAR_HIGH_SCHOOL_PRICE = 450000

	const LOW_SCHOOL_DIFFERENCE = REGULAR_LOW_SCHOOL_PRICE - LOW_SCHOOL_PRICE
	const HIGH_SCHOOL_DIFFERENCE = REGULAR_HIGH_SCHOOL_PRICE - HIGH_SCHOOL_PRICE

	const lowSchoolCompare = `${formatPrice(REGULAR_LOW_SCHOOL_PRICE)} - ${formatPrice(LOW_SCHOOL_PRICE)} = ${formatPrice(LOW_SCHOOL_DIFFERENCE)}`
	const highSchoolCompare = `${formatPrice(REGULAR_HIGH_SCHOOL_PRICE)} - ${formatPrice(HIGH_SCHOOL_PRICE)} = ${formatPrice(HIGH_SCHOOL_DIFFERENCE)}`

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
								}}
							/>
							<img
								src='./images/cost/arrow.svg'
								alt=''
								onClick={() => {
									swiperRef.current?.slideNext()
								}}
							/>
						</div>
						<Swiper
							loop={true}
							spaceBetween={20}
							slidesPerView={1}
							className='slider_swiper'
							onSlideChangeTransitionStart={() => setGrade((grade) => -grade + 1)}
							onBeforeInit={(swiper) => {
								swiperRef.current = swiper
							}}>
							{[0, 1].map((item) => (
								<SwiperSlide key={item}>
									<div className='card'>
										<p className='cost_text'>
											{grade === 0 ? formatPrice(LOW_SCHOOL_PRICE) : formatPrice(HIGH_SCHOOL_PRICE)}
										</p>
										<h2>Стоимость</h2>
										<div className='grades'>
											<div
												style={{ height: '64px' }}
												className={grade === 0 ? 'grade active' : 'grade'}
												onClick={() => setGrade(0)}>
												1-8 класс
											</div>
											<div className={grade === 1 ? 'grade active' : 'grade'} onClick={() => setGrade(1)}>
												9-11 класс и выпускники
											</div>
										</div>
										<h5>
											{grade === 0 ? formatPrice(REGULAR_LOW_SCHOOL_PRICE) : formatPrice(REGULAR_HIGH_SCHOOL_PRICE)} —
											стоимость такого же количества занятий в школе
										</h5>
										<p className='subcost'>{grade === 0 ? lowSchoolCompare : highSchoolCompare} экономии</p>
										<div className='grid'>
											<div className='item'>
												<div className='image_wrapper'>
													<img src='./images/cost/roket.png' alt='' className='roket' />
												</div>
												<p>Эффект 4 месяцев занятий всего за 14 дней</p>
											</div>
											<div className='item'>
												<div className='image_wrapper moun'>
													<img src='./images/cost/moun2.png' alt='' />
												</div>
												<p>
													{grade === 0
														? 'Самый лучший способ заполнить все пробелы в знаниях и подготовиться к олимпиадам и поступлению в матшколы'
														: 'Самый лучший способ заполнить все пробелы в знаниях и подготовиться к ОГЭ, ЕГЭ и ДВИ'}
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
									9-11 класс и выпускники
								</div>
							</div>
							<div className='cost_block'>
								{grade === 0 ? formatPrice(LOW_SCHOOL_PRICE) : formatPrice(HIGH_SCHOOL_PRICE)}
							</div>
							<p className='desc'>
								<span>
									{grade === 0 ? formatPrice(REGULAR_LOW_SCHOOL_PRICE) : formatPrice(REGULAR_HIGH_SCHOOL_PRICE)}
								</span>{' '}
								— стоимость такого же количества занятий в школе
							</p>
							<div className='yellow_block'>{grade === 0 ? lowSchoolCompare : highSchoolCompare} экономии</div>
							<div className='cards_adaptive'>
								<div className='adaptive_card2'>
									<div className='card_image'>
										<img src='./images/cost/roket.png' alt='' className='roket' />
									</div>
									<p>Эффект 4 месяцев занятий всего за 14 дней</p>
								</div>
								<div className='adaptive_card2'>
									<div className='card_image'>
										<img src='./images/cost/moun2.png' alt='' className='moun' />
									</div>
									<p>
										{grade === 0
											? 'Самый лучший способ заполнить все пробелы в знаниях и подготовиться к олимпиадам и поступлению в матшколы'
											: 'Самый лучший способ заполнить все пробелы в знаниях и подготовиться к ОГЭ, ЕГЭ и ДВИ'}
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
