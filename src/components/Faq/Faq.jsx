import React from 'react'
import InputMask from 'react-input-mask'
import { motion } from 'framer-motion'
import AnimatedText from '../AnimatedText'
import './index.scss'
import axios from 'axios'
import { toast } from 'react-toastify'

const data = [
	{
		title: 'Какие документы нужны ребенку с собой?',
		text: '- ксерокопия свидетельства о рождении/паспорта и полиса обязательного медицинского страхования<br/><br/> - справка формы 079У с выпиской из карты прививок<br/><br/> - справка об отсутствии инфекционных контактов (берется за 3 дня до отъезда)<br/><br/> - справка с отрицательным тестом на COVID-19 (берется за 3 дня до отъезда)<br/><br/> - справка для бассейна',
	},
	{
		title: 'Мобильные телефоны в лагере',
		text: 'Во время смены запрещены смартфоны, айфоны, планшеты, ноутбуки, PSP, iWatch и прочие подобные технические устройства.<br/><br/>Участники выезда сдают телефоны и другие средства связи на дневное время и получают их каждый вечер в период с 21:40 до 22:00 для связи с родителями. В остальное время телефоны хранятся у ответственных за детей. В экстренных случаях с детьми можно связаться по нашему контактному телефону.',
	},
	{
		title: 'Трансфер',
		text: 'Трансфер детей в лагерь осуществляется от м.Универститет.',
	},
	{
		title: 'Что положить ребенку с собой?',
		text: "Для того, чтобы вам было легче собрать вещи на выездную школу и ничего не забыть, мы составили памятку участника. Она доступна <a href='/go'>по ссылке</a>",
	},
	{
		title: 'Расскажите о площадке?',
		text: 'ДОЛ "Дружба" в п.Валуево <br/>Москва, поселение Филимонковское, 101',
	},
	{
		title: 'Лекарства и аллергии',
		text: 'Если Ваш ребенок постоянно принимает какие-либо препараты, необходимо заранее оповестить об этом организаторов, а также передать данные препараты при заезде с сопроводительной запиской для врача, указав в какой дозировке ребенок принимает лекарство. Также необходимо заранее оповестить организаторов о хронических проблемах со здоровьем, если они влекут за собой необходимость ограничений каких-либо видов деятельности, либо об аллергии на какие-либо продукты и напитки.',
	},
]

const FaqList = () => {
	return (
		<div className='grid'>
			{data.map((item) => (
				<FaqItem key={item.title} data={item} />
			))}
		</div>
	)
}

const FaqItem = ({ data }) => {
	const [show, setShow] = React.useState(false)
	return (
		<div className={show ? 'item active' : 'item'} onClick={() => setShow(!show)}>
			<div className={show ? 'heading show' : 'heading'}>
				<h4>{data.title}</h4>
				<div className='image_wrapper'>
					<img src='./images/faq/plus.svg' alt='' />
				</div>
			</div>
			<div className='accordion'>
				<h2 dangerouslySetInnerHTML={{ __html: data.text }}></h2>
			</div>
		</div>
	)
}

const Faq = () => {
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
		<div className='faq' id='faq'>
			<div className='wrapper'>
				<div className='cont'>
					<div className='left'>
						<h3>Частые вопросы</h3>
						<p>Нет вашего вопроса?</p>
						<InputMask
							mask='+7 (999) 999-99-99'
							placeholder='+7 (___) ___-__-__'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
						<button onClick={() => Send()}>Отправить</button>
					</div>
					<div className='right'>
						<FaqList />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Faq
