import React from 'react'
import './index.scss'

const Includes = () => {
    return (
        <div className="includes">
            <div className="wrapper">
                <div className="cont">
                    <div className="top_card">
                        <h2>Что включает в себя смена?</h2>
                        <img src="./images/attributes/first.svg" alt="" />
                        <div className="top_card_row">
                            <p>Интенсив по олимпиадной математике</p>
                            <p>Шоу талантов</p>
                        </div>
                        <div className="top_card_row">
                            <p>Интеллектуальные квесты</p>
                            <p>Ярмарка с мерчем школы</p>
                        </div>
                        <div className="top_card_row">
                            <p>
                                Научно-популярные лекции от ведущих педагогов
                                МГУ
                            </p>
                            <p>Спортивные турниры</p>
                        </div>
                        <div className="top_card_row">
                            <p>
                                Интенсив к ОГЭ и ЕГЭ по математике, русскому
                                языку, информатике и визике
                            </p>
                            <p>
                                Вечерние развлекательные мероприятия (дискотека,
                                гитарный вечер, квиз, кинотеатр и многое другое
                            </p>
                        </div>
                        <div className="top_card_row"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Includes
