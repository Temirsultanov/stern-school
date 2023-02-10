import React from 'react'
import './index.scss'

const Cost = () => {
    return (
        <div className="cost">
            <div className="wrapper">
                <div className="cont">
                    <div className="card">
                        <p className="cost_text">72 000 ₽</p>
                        <h2>Стоимость</h2>
                        <div className="grades">
                            <div className="grade">1-8 класс</div>
                            <div className="grade active">10-11 класс</div>
                        </div>
                        <h5>
                            160 000 ₽ - стоимость такого же количества занятий в
                            школе
                        </h5>
                        <p className="subcost">
                            160 000₽ - 72 000₽ = 88 000₽ экономии
                        </p>
                        <div className="grid">
                            <div className="item">
                                <div className="image_wrapper">
                                    <img src="./images/cost/roket.svg" alt="" />
                                </div>
                                <p>Эффект 3 месяцев занятий всего за 8 дней</p>
                            </div>
                            <div className="item">
                                <div className="image_wrapper">
                                    <img src="./images/cost/moun.svg" alt="" />
                                </div>
                                <p>
                                    Самый лучший способ заполнить все пробелы в
                                    знаних и подготовиться к ОГЭ/ЕГЭ
                                </p>
                            </div>
                        </div>
                        <span>
                            *трансфер и материалы для занятий включены в
                            стоимость
                        </span>
                    </div>
                    <button>Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default Cost
