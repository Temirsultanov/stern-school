import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'

import Header from './components/Header/Header'
import CallBackModal from './components/CallBackModal'
import RegistrationModal from './components/RegistrationModal'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'

const App = () => {
	const [callBackModalOpened, setCallBackModalOpened] = useState(false)
	const openCallBackModal = () => setCallBackModalOpened(true)
	const closeCallBackModal = () => setCallBackModalOpened(false)

	const [registrationModalOpened, setRegistrationModalOpened] = useState(false)
	const openRegistrationModal = () => setRegistrationModalOpened(true)
	const closeRegistrationModal = () => setRegistrationModalOpened(false)

	useEffect(() => {
		if (callBackModalOpened || registrationModalOpened) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'scroll'
		}
	}, [callBackModalOpened, registrationModalOpened])

	return (
		<>
			{callBackModalOpened && <CallBackModal closeCallBackModal={closeCallBackModal} />}
			{registrationModalOpened && <RegistrationModal closeRegistrationModal={closeRegistrationModal} />}

			<ToastContainer />
			<Header openCallBackModal={openCallBackModal} openRegistrationModal={openRegistrationModal} />
			<Outlet context={[openCallBackModal, openRegistrationModal]} />
			<Faq />
			<Footer />
		</>
	)
}

export default App
