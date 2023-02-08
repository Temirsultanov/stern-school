import React from 'react'
import About from './components/About/About'
import Attributes from './components/Attributes/Attributes'
import Comments from './components/Comments/Comments'
import Header from './components/Header/Header'
import Offer from './components/Offer/Offer'
import 'swiper/css'
import Teachers from './components/Teachers/Teachers'

const App = () => {
    return (
        <>
            <Header />
            <Offer />
            <About />
            <Teachers />
            <Attributes />
            <Comments />
        </>
    )
}

export default App
