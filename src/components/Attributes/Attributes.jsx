import React from 'react'
import './index.scss'
import InputMask from 'react-input-mask'
import axios from 'axios'
import { toast } from 'react-toastify'

const Attributes = ({ openCallBackModal }) => {
	const [phone, setPhone] = React.useState('')

	const notify = () => toast.success('Заявка отправлена!!')
	const notifyError = () => toast.error('Ошибка отправки!!')

	const Send = () => {
		axios
			.post('https://camp.stern.xyz/api/v1/feedback/', { phone })
			.then((res) => notify())
			.catch((err) => notifyError())
	}

	return (
		<div className='attributes anchored-section' id='accomodations'>
			<div className='wrapper'>
				<div className='cont'>
					<div className='block'>
						<div className='left'>
							<div className='image_wrapper'>
								<img src='./images/attributes/second.png' alt='' />
							</div>
							<div className='column'>
								<h3>Питание</h3>
								<p>
									Пятиразовое питание. Меню составляется профессиональными диетологами в соответствии с гигиеническими
									требованиями и современными потребностями детей. Ежедневно в меню присутствуют свежие фрукты и овощи,
									два вида горячих супов, мясо, птица, рыба, чай, напитки, творожная и молочная продукция, кондитерские
									изделия, выпечка.
								</p>
							</div>
						</div>
						<div className='right'>
							<div className='image_wrapper'>
								<img src='./images/attributes/third.png' alt='' />
							</div>
							<div className='column'>
								<h3>Размещение</h3>
								<p>
									Трёх- и четырехместные номера, оборудованные комфортной мебелью (кровать с ортопедическим матрасом,
									тумбочка), санузлом и душем в каждом номере.
								</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='card'>
							<div className='image_wrapper'>
								<img src='./images/attributes/forth.png' alt='' />
							</div>
							<div className='column'>
								<h4>Медицинское обслуживание</h4>
								<p>
									Врач-педиатр круглосуточно находится на территории лагеря и тщательно следит за здоровьем детей,
									осуществляя профилактические, оздоровительные, а при необходимости и лечебные мероприятия.{' '}
								</p>
							</div>
						</div>
						<div className='card'>
							<div className='image_wrapper white'>
								<img src='./images/modal/phone.png' alt='' />
							</div>
							<h4>
								Остались вопросы?
								<br /> Мы ответим!
							</h4>
							<div className='card_row'>
								<InputMask
									mask='+7 (999) 999-99-99'
									placeholder='+7 (___) ___-__-__'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
								<button onClick={() => Send()}>Отправить</button>
							</div>
						</div>
					</div>
					<span className='adaptive'>Остались вопросы? Мы ответим!</span>
					<button className='adaptive' onClick={openCallBackModal}>
						Оставить заявку
					</button>
				</div>
			</div>
		</div>
	)
}

export default Attributes
