import React from 'react'
import './index.scss'

const Offer = ({ setShow }) => {
	return (
		<div className='offer' id='about'>
			<div className='wrapper'>
				<div className='cont'>
					<div className='left'>
						<h2>Выездная школа ШТЕРН</h2>

						<div className='grid'>
							<div className='card'>
								<div className='image_wrapper'>
									<img src='./images/offer/first.png' alt='' className='table' />
								</div>
								<p>5 - 12 мая ДЛЯ 1-11 КЛАССОВ</p>
							</div>
							<div className='card'>
								<div className='image_wrapper'>
									<img src='./images/offer/second.png' className='roket' alt='' />
								</div>
								<p>ЭФФЕКТ 3 МЕСЯЦЕВ ЗАНЯТИЙ ВСЕГО ЗА 8 ДНЕЙ</p>
							</div>
							<div className='card'>
								<div className='image_wrapper'>
									<img src='./images/offer/third.png' alt='' />
								</div>
								<p>АВТОРСКИЕ ОЛИМПИАДНЫЕ ЗАДАЧИ ДЛЯ 1-8 КЛАССОВ</p>
							</div>
							<div className='card'>
								<div className='image_wrapper'>
									<img
										src='./images/offer/fourth.png'
										alt=''
										style={{
											position: 'relative',
											left: '3px',
										}}
									/>
								</div>
								<p>АВТОРСКИЙ КУРС К ЕГЭ И ДВИ ОТ ЭКСПЕРТОВ</p>
							</div>
						</div>
					</div>
					<img src='./images/offer/ping.png' alt='' className='ping' />
				</div>
			</div>
			<div className='wrapper'>
				<div className='button'>
					<button onClick={() => setShow(true)}>Регистрация</button>
				</div>
			</div>
		</div>
	)
}

export default Offer
