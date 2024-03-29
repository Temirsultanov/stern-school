import React from 'react'
import { useOnClickOutside } from '../../lib/useOnClickOutside'
import InputMask from 'react-input-mask'
import './index.scss'
import axios from 'axios'
import { toast } from 'react-toastify'

const CallBackModal = ({ closeCallBackModal }) => {
	let ref = React.useRef(null)
	const [phone, setPhone] = React.useState('')

	useOnClickOutside(ref, closeCallBackModal)
	const notify = () => toast.success('Заявка отправлена!!')
	const notifyError = () => toast.error('Ошибка отправки!!')

	const Send = () => {
		axios
			.post('https://camp.stern.xyz/api/v1/feedback/', { phone })
			.then((res) => {
				notify()
				closeCallBackModal()
			})
			.catch((err) => notifyError())
	}

	return (
		<div className='call modal_wrapper'>
			<div className='content' ref={ref}>
				<img src='./images/modal/cross.svg' alt='' className='cross' onClick={closeCallBackModal} />
				<InputMask
					mask='+7 (999) 999-99-99'
					placeholder='+7 (___) ___-__-__'
					onChange={(e) => setPhone(e.target.value)}
					value={phone}
				/>
				<button onClick={() => Send()}>Отправить</button>
				<div className='texts'>
					<a target={'_blank'} href='tel:+7 (936) 512-06-01' rel='noreferrer'>
						+7 (936) 512-06-01
					</a>
					<a target={'_blank'} href='mailto:hi@stern.xyz' rel='noreferrer'>
						hi@stern.xyz
					</a>
				</div>
			</div>
		</div>
	)
}

export default CallBackModal
