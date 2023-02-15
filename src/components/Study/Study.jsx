import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './index.scss'

const Study = () => {
    return (
        <div className="study">
            <div className="wrapper">
                <div className="cont">
                    <h2>К чему готовим</h2>
                    <div className="grid">
                        <a href="https://fipi.ru/ege" className="card">
                            <LazyLoadImage
                                src="./images/study/image7.png"
                                width={'100%'}
                                height={'100%'}
                                alt="Image Alt"
                                className="bg"
                            />
                            <div className="image_wrapper">
                                <div className="image">
                                    <LazyLoadImage
                                        src="./images/study/image1.svg"
                                        width={'100%'}
                                        height={'100%'}
                                        alt="Image Alt"
                                    />
                                </div>
                                <p className="first">ЕГЭ/ОГЭ</p>
                            </div>
                        </a>
                        <a
                            href="http://pk.math.msu.ru/ru/specialist/variant"
                            className="card"
                        >
                            <LazyLoadImage
                                src="./images/study/image8.png"
                                width={'100%'}
                                height={'100%'}
                                alt="Image Alt"
                                className="bg"
                            />
                            <div className="image_wrapper">
                                <div className="image">
                                    <LazyLoadImage
                                        src="./images/study/image2.svg"
                                        width={'100%'}
                                        height={'100%'}
                                        alt="Image Alt"
                                    />
                                </div>
                                <p className="second">ДВИ МГУ</p>
                            </div>
                        </a>
                        <a href="https://vos.olimpiada.ru/" className="card">
                            <LazyLoadImage
                                src="./images/study/image9.png"
                                width={'100%'}
                                height={'100%'}
                                alt="Image Alt"
                                className="bg"
                            />
                            <div className="image_wrapper">
                                <div className="image">
                                    <LazyLoadImage
                                        src="./images/study/image3.svg"
                                        width={'100%'}
                                        height={'100%'}
                                        alt="Image Alt"
                                    />
                                </div>
                                <p className="third">ВСОШ</p>
                            </div>
                        </a>
                        <a href="https://pvg.mk.ru/" className="card">
                            <LazyLoadImage
                                src="./images/study/image10.png"
                                width={'100%'}
                                height={'100%'}
                                alt="Image Alt"
                                className="bg"
                            />
                            <div className="image_wrapper">
                                <div className="image">
                                    <LazyLoadImage
                                        src="./images/study/image4.svg"
                                        width={'100%'}
                                        height={'100%'}
                                        alt="Image Alt"
                                    />
                                </div>
                                <p className="fourth">Покори Воробьевы горы!</p>
                            </div>
                        </a>
                        <div className="card">
                            <LazyLoadImage
                                src="./images/study/image11.png"
                                width={'100%'}
                                height={'100%'}
                                alt="Image Alt"
                                className="bg"
                            />
                            <div className="image_wrapper">
                                <div className="image">
                                    <img
                                        src="./images/study/image5.png"
                                        alt=""
                                    />
                                </div>
                                <p className="fifth">Математические школы</p>
                            </div>
                        </div>
                        <a href="https://lomonosov-msu.ru/" className="card">
                            <LazyLoadImage
                                src="./images/study/image12.png"
                                width={'100%'}
                                height={'100%'}
                                alt="Image Alt"
                                className="bg"
                            />
                            <div className="image_wrapper">
                                <div className="image">
                                    <img
                                        src="./images/study/image6.svg"
                                        alt=""
                                    />
                                </div>
                                <p className="sixth">Олимпиада “Ломоносов” </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Study
