import React, { useEffect } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import 'swiper/css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Go from './pages/Go'
import CallMe from './components/CallMe/Modal'

const App = () => {
    const [show, setShow] = React.useState(false)
    const [showRegister, setShowRegister] = React.useState(false)

    return (
        <>
            {show && <CallMe set={setShow} />}

            <Header
                set={setShow}
                setShowRegister={setShowRegister}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            set={setShow}
                            showRegister={showRegister}
                            setShowRegister={setShowRegister}
                        />
                    }
                />
                <Route path="/go" element={<Go />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
