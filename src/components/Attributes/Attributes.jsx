import React from 'react'
import './index.scss'
import InputMask from 'react-input-mask'

const Attributes = () => {
    return (
        <div className="attributes">
            <div className="wrapper">
                <div className="cont">
                    <div className="block">
                        <div className="left">
                            <div className="image_wrapper">
                                <img
                                    src="./images/attributes/second.svg"
                                    alt=""
                                />
                            </div>
                            <h3>Питание</h3>
                            <p>
                                Пятиразовое питание. Меню составляется
                                профессиональными диетологами в соответствии с
                                гигиеническими требованиями и современными
                                потребностями детей. Ежедневно в меню
                                присутствуют свежие фрукты и овощи, два вида
                                горячих супов, мясо, птица, рыба, чай, напитки,
                                творожная и молочная продукция, кондитерские
                                изделия, выпечка.
                            </p>
                        </div>
                        <div className="right">
                            <div className="image_wrapper">
                                <img
                                    src="./images/attributes/third.svg"
                                    alt=""
                                />
                            </div>
                            <h3>Размещение</h3>
                            <p>
                                Трех- и четырехместные номера, оборудованные
                                комфортной мебелью (кровать с ортопедическим
                                матрасом, тумбочка) и санузлом и душем в каждом
                                номере.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <div className="image_wrapper">
                                <img
                                    src="./images/attributes/forth.svg"
                                    alt=""
                                />
                            </div>
                            <h4>Медицинское обслуживание</h4>
                            <p>
                                Врач-педиатр круглосуточно находится на
                                территории лагеря и тщательно следит за
                                здоровьем детей, осуществляя профилактические,
                                оздоровительные, а при необходимости и лечебные
                                мероприятия.{' '}
                            </p>
                        </div>
                        <div className="card">
                            <div className="image_wrapper white">
                                <img
                                    src="./images/attributes/fifth.svg"
                                    alt=""
                                />
                            </div>
                            <h4 className="black">
                                Остались вопросы?
                                <br /> Мы ответим!
                            </h4>
                            <div className="card_row">
                                <InputMask
                                    mask="+7 9999 9999-999-999"
                                    placeholder="+7 ____ ____-___-___ "
                                />
                                <button>Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attributes
