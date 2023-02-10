import React from 'react'
import './index.scss'

const Study = () => {
    return (
        <div className="study">
            <div className="wrapper">
                <div className="cont">
                    <h2>К чему готовим</h2>
                    <div className="grid">
                        <div className="card">
                            <img
                                src="./images/study/image7.png"
                                alt=""
                                className="bg"
                            />
                            <div className="image_wrapper">
                                <div className="image">
                                    <img
                                        src="./images/study/image1.svg"
                                        alt=""
                                    />
                                </div>
                                <p className="first">ЕГЭ/ОГЭ</p>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src="./images/study/image8.png"
                                alt=""
                                className="bg"
                            />
                            <div className="image_wrapper">
                                <div className="image">
                                    <img
                                        src="./images/study/image2.svg"
                                        alt=""
                                    />
                                </div>
                                <p className="second">ДВИ МГУ</p>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src="./images/study/image9.png"
                                alt=""
                                className="bg"
                            />
                            <div className="image_wrapper">
                                <div className="image">
                                    <img
                                        src="./images/study/image3.svg"
                                        alt=""
                                    />
                                </div>
                                <p className="third">ВСОШ/МОШ</p>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src="./images/study/image10.png"
                                alt=""
                                className="bg"
                            />
                            <div className="image_wrapper">
                                <div className="image">
                                    <img
                                        src="./images/study/image4.svg"
                                        alt=""
                                    />
                                </div>
                                <p className="fourth">Покори Воробьевы горы!</p>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src="./images/study/image11.png"
                                alt=""
                                className="bg"
                            />
                            <div className="image_wrapper">
                                <div className="image">
                                    <img
                                        src="./images/study/image5.svg"
                                        alt=""
                                    />
                                </div>
                                <p className="fifth">Математические школы</p>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src="./images/study/image12.png"
                                alt=""
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Study
