import React from 'react'
import './index.scss'

const GoMain = () => {
    return (
        <div className="go_main">
            <div className="wrapper">
                <div className="cont">
                    <img src="./images/go/ping.png" alt="" />
                    <h2>Что взять с собой</h2>
                    <a href="./files/go.pdf" target="_blank">
                        <button className="dowload">Скачать памятку</button>
                    </a>
                    <div className="row">
                        <div className="grid">
                            <div className="column">
                                <h3>Одежда и обувь</h3>
                                <ul>
                                    <li>Футболки, майки</li>
                                    <li>Куртка или дождевик</li>
                                    <li>Теплый свитер или толстовка</li>
                                    <li>
                                        Рубашка с длинным рукавом или водолазка
                                    </li>
                                    <li>Длинные штаны или джинсы</li>
                                    <li>
                                        Носки и нижнее белье (из расчета на 8
                                        дней)
                                    </li>
                                    <li>Спортивный костюм</li>
                                    <li>Пижама</li>
                                    <li>
                                        Нарядная одежда для дискотек,
                                        выступлений и торжественных мероприятий
                                    </li>
                                    <li>
                                        Театральная основа (черный низ, черный
                                        верх без рисунков и надписей)
                                    </li>
                                    <li>
                                        Форма для занятий на спортивных
                                        факультативах - спортивные
                                        шорты/леггинсы девочкам, футболки, носки
                                    </li>
                                    <li>Головной убор, защищающий от солнца</li>
                                    <li>Спортивная обувь</li>
                                    <li>
                                        Шлепки и сланцы (для посещения душа)
                                    </li>
                                    <li>Комнатные тапочки</li>
                                    <li>
                                        Шапочка, очки, мочалка, полотенце и
                                        пакет/мешочек для них, купальник/плавки,
                                        шлепанцы (для посещения бассейна)
                                    </li>
                                </ul>
                            </div>
                            <div className="grid_column">
                                <div className="column">
                                    <h3>Гигиенические принадлежности</h3>
                                    <ul>
                                        <li>
                                            Зубная щетка, зубная паста, шампунь,
                                            гель для душа
                                        </li>
                                        <li>Расческа</li>
                                        <li>
                                            Полотенце для бассейна и/или банное
                                            полотенце
                                        </li>
                                        <li>
                                            Носовые платки/антибактериальные
                                            салфетки для рук
                                        </li>
                                        <li>
                                            Одноразовые бумажные салфетки в
                                            условиях пандемии COVID-2019 (одна
                                            упаковка на каждый день)
                                        </li>
                                        <li>Кружка</li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <h3>Для учебы и выступлений</h3>
                                    <ul>
                                        <li>Тетради, блокноты</li>
                                        <li>
                                            Пенал с письменными принадлежностями
                                        </li>
                                        <li>
                                            Музыкальные инструменты и прочий
                                            реквизит, в т.ч. для выступления на
                                            шоу талантов
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h6>Важно!</h6>
                            <p>
                                Отдельно обращаем ваше внимание на то, что с
                                целью обеспечения мер безопасности и охраны
                                здоровья учащихся, категорически запрещен привоз
                                любых скоропортящихся продуктов питания на
                                территорию лагеря. Можно дать с собой “сухой
                                паек” в виде печенья, орехов и т.д. Это будет
                                выдаваться детям в определенное время
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoMain
