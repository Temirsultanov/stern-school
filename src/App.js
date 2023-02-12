import React, { useEffect } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import 'swiper/css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Go from './pages/Go'

const App = () => {
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])

    return (
        <>
            {isLoading && (
                <div class="loader-wrapper">
                    <div class="loader"></div>
                </div>
            )}
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/go" element={<Go />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </>
    )
}

export default App
