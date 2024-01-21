import React from 'react'
import './index.scss'

const SOCIALS = [
	{
		id: 'telegram',
		name: 'Telegram',
		href: 'https://t.me/mathsabout',
		iconSrc: './images/footer/telegram.svg',
	},
	{
		id: 'youtube',
		name: 'YouTube',
		href: 'https://www.youtube.com/@user-nl6nk1ez7j',
		iconSrc: './images/footer/youtube.svg',
	},
	{
		id: 'whatsapp',
		name: 'WhatsApp',
		href: 'https://wa.clck.bar/79365120601',
		iconSrc: './images/footer/whats.svg',
	},
	{
		id: 'phone',
		name: '+7 936 512-06-01',
		href: 'tel:+7 936 512-06-01',
		iconSrc: './images/footer/phone.svg',
	},
	{
		id: 'email',
		name: 'hi@stern.xyz',
		href: 'mailto:hi@stern.xyz',
		iconSrc: './images/footer/mail.svg',
	},
]

const Footer = () => {
	return (
		<footer>
			<div className='wrapper'>
				<div className='cont'>
					<div className='top'>
						<h2>
							Школа
							<br /> Точных
							<br /> Наук
						</h2>
						<div className='column'>
							{SOCIALS.slice(0, 3).map((social) => (
								<SocialLink key={social.id} social={social} />
							))}
						</div>
						<div className='column large'>
							{SOCIALS.slice(3).map((social) => (
								<SocialLink key={social.id} social={social} />
							))}
						</div>
					</div>
					<div className='bottom'>
						<p>© 2023 ШТЕРН ИП Юмашев Михаил Владиславович </p>
						<p>ИНН 770504944805</p>
						<p>ОГРНИП 317774600318392</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

const SocialLink = ({ social }) => (
	<a target={'_blank'} href={social.href} className='card' rel='noreferrer'>
		<div className='image_wrapper'>
			<img src={social.iconSrc} alt={social.id + ' icon'} />
		</div>
		<p>{social.name}</p>
	</a>
)

export default Footer
