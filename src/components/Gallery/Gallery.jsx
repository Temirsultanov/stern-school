import React from 'react'
import './index.scss'

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="wrapper">
                <div className="cont">
                    <div className="grid">
                        <div className="row">
                            <img src="./images/gallery/image1.png" alt="" />
                            <img
                                src="./images/gallery/image2.png"
                                alt=""
                                className="child"
                            />
                            <img src="./images/gallery/image3.png" alt="" />
                        </div>
                        <div className="row">
                            <img src="./images/gallery/image4.png" alt="" />
                            <img src="./images/gallery/image5.png" alt="" />
                            <img src="./images/gallery/image6.png" alt="" />
                        </div>
                        <div className="row">
                            <img src="./images/gallery/image7.png" alt="" />
                            <img src="./images/gallery/image8.png" alt="" />
                            <img src="./images/gallery/image9.png" alt="" />
                        </div>
                    </div>
                    <button>Посмотреть еще</button>
                </div>
            </div>
        </div>
    )
}

export default Gallery
