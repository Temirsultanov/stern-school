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


    return (
        <>
            {/* {isLoading && (
                <div class="loader-wrapper">
                    <div class="loader"></div>
                </div>
            )} */}
            {show && <CallMe set={setShow}/>}
            
            <Header set={setShow}/>
            <Routes>
                <Route path="/" element={<Home set={setShow}/>} />
                <Route path="/go" element={<Go />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
