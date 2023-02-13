import React, { useEffect, useState } from 'react'
import './index.scss'

const Header = ({ set, setShowRegister }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (show) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, [show])

    return (
        <div className="header">
            <div className="header_top">
                <div className="wrapper">
                    <div className="info">
                        <a href="tel:+7936512 0601" className="info_card">
                            <div className="image_wrapper">
                                <svg
                                    width="13"
                                    height="14"
                                    viewBox="0 0 13 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.4448 13.3497C9.90001 13.3497 9.13478 13.1528 7.9889 12.5127C6.59548 11.7314 5.51769 11.0102 4.13181 9.62816C2.7956 8.29304 2.14535 7.42864 1.23529 5.77292C0.207176 3.90348 0.382435 2.92356 0.578345 2.50475C0.811652 2.00418 1.15603 1.70479 1.60115 1.40764C1.85398 1.24202 2.12154 1.10005 2.40043 0.983525C2.42833 0.971527 2.45429 0.960087 2.47745 0.949763C2.61559 0.887542 2.8249 0.793511 3.09002 0.893959C3.26695 0.960366 3.42491 1.09625 3.67217 1.34039C4.17925 1.8404 4.87219 2.95397 5.12782 3.50085C5.29946 3.86944 5.41304 4.11275 5.41332 4.38563C5.41332 4.70511 5.25257 4.95149 5.0575 5.21739C5.02094 5.26734 4.98466 5.31505 4.9495 5.36137C4.73712 5.64039 4.69051 5.72103 4.72121 5.865C4.78345 6.15435 5.24755 7.01569 6.01026 7.77658C6.77297 8.53747 7.60964 8.97218 7.90015 9.03412C8.0503 9.06621 8.13262 9.01766 8.42063 8.79779C8.46193 8.76626 8.50435 8.73362 8.54872 8.70097C8.84622 8.47971 9.0812 8.32318 9.39321 8.32318H9.39488C9.66642 8.32318 9.89889 8.44093 10.284 8.63512C10.7863 8.88848 11.9336 9.57236 12.4368 10.0799C12.6815 10.3266 12.818 10.4839 12.8847 10.6605C12.9852 10.9264 12.8906 11.1349 12.8289 11.2744C12.8186 11.2975 12.8071 11.3229 12.7951 11.3511C12.6777 11.6295 12.5348 11.8964 12.3684 12.1486C12.0718 12.5922 11.7712 12.9357 11.2694 13.1692C11.0118 13.2911 10.7298 13.3528 10.4448 13.3497Z"
                                        fill="#323241"
                                    />
                                </svg>
                            </div>
                            <p>+7 (985) 971 11 11</p>
                        </a>
                        <a href="mailto:hi@stern.xyz" className="info_card">
                            <div className="image_wrapper">
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.3516 2.02466H2.14844C1.78596 2.02505 1.43843 2.16921 1.18212 2.42553C0.925805 2.68184 0.781638 3.02936 0.78125 3.39185V9.25122C0.781638 9.6137 0.925805 9.96123 1.18212 10.2175C1.43843 10.4739 1.78596 10.618 2.14844 10.6184H10.3516C10.714 10.618 11.0616 10.4739 11.3179 10.2175C11.5742 9.96123 11.7184 9.6137 11.7188 9.25122V3.39185C11.7184 3.02936 11.5742 2.68184 11.3179 2.42553C11.0616 2.16921 10.714 2.02505 10.3516 2.02466ZM10.0054 4.28613L6.48975 7.02051C6.42119 7.0738 6.33683 7.10273 6.25 7.10273C6.16317 7.10273 6.07881 7.0738 6.01025 7.02051L2.49463 4.28613C2.45332 4.25494 2.41863 4.21585 2.39256 4.17113C2.3665 4.12641 2.34958 4.07696 2.34279 4.02565C2.336 3.97434 2.33947 3.92219 2.35301 3.87223C2.36655 3.82227 2.38988 3.7755 2.42166 3.73464C2.45343 3.69378 2.493 3.65964 2.53808 3.6342C2.58316 3.60877 2.63285 3.59254 2.68425 3.58648C2.73565 3.58041 2.78775 3.58462 2.83751 3.59886C2.88727 3.6131 2.93371 3.63709 2.97412 3.66943L6.25 6.21728L9.52588 3.66943C9.60779 3.60757 9.71076 3.58044 9.81253 3.59391C9.91429 3.60737 10.0067 3.66035 10.0697 3.74139C10.1327 3.82242 10.1612 3.925 10.1492 4.02694C10.1372 4.12888 10.0855 4.22199 10.0054 4.28613Z"
                                        fill="#323241"
                                    />
                                </svg>
                            </div>
                            <p>pochtaschool@gmail.com</p>
                        </a>
                    </div>
                    <div className="icons">
                        <a
                            href="https://wa.clck.bar/79365120601"
                            className="image_wrapper"
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.8146 2.17972C12.1212 1.48599 11.2974 0.936264 10.3907 0.562182C9.48404 0.1881 8.5123 -0.00294857 7.53146 3.43993e-05C3.41517 3.43993e-05 0.0642856 3.33418 0.0626115 7.43305C0.0607905 8.73822 0.40483 10.0206 1.05971 11.1496L0 15L3.95926 13.9664C5.0552 14.5601 6.28202 14.8709 7.52845 14.8704H7.53146C11.6474 14.8704 14.998 11.5359 15 7.43741C15.0025 6.45992 14.8105 5.49169 14.4354 4.58906C14.0602 3.68644 13.5092 2.86744 12.8146 2.17972ZM7.53146 13.6159H7.52878C6.41764 13.6162 5.3267 13.3188 4.36941 12.7547L4.14274 12.6208L1.7933 13.2342L2.42042 10.9544L2.27276 10.72C1.65147 9.73634 1.32229 8.59648 1.32355 7.43305C1.32355 4.02692 4.10959 1.25561 7.53381 1.25561C9.17643 1.25268 10.753 1.90233 11.9166 3.06167C13.0803 4.22102 13.7358 5.79511 13.739 7.43774C13.7377 10.8442 10.953 13.6159 7.53146 13.6159ZM10.9363 8.98896C10.7498 8.89588 9.83135 8.44656 9.66126 8.38461C9.49117 8.32267 9.36561 8.29153 9.24139 8.47769C9.11717 8.66385 8.75925 9.08037 8.65043 9.20593C8.54162 9.33149 8.4328 9.34521 8.2463 9.25213C8.05981 9.15905 7.45814 8.96318 6.7453 8.33037C6.1905 7.83785 5.81617 7.22982 5.70736 7.04399C5.59854 6.85817 5.69564 6.75738 5.78905 6.66497C5.87309 6.5816 5.97555 6.44801 6.06896 6.33953C6.16238 6.23105 6.19352 6.15337 6.25546 6.02948C6.3174 5.9056 6.2866 5.79712 6.24006 5.70437C6.19352 5.61163 5.82019 4.69723 5.66483 4.32525C5.51316 3.96297 5.35948 4.01219 5.24497 4.0065C5.13615 4.00114 5.01059 3.9998 4.88705 3.9998C4.7926 4.00226 4.69967 4.02416 4.61406 4.06414C4.52846 4.10412 4.45201 4.16132 4.3895 4.23217C4.21841 4.41833 3.73627 4.86833 3.73627 5.78172C3.73627 6.69511 4.40591 7.57903 4.49832 7.70292C4.59073 7.8268 5.81416 9.7028 7.68615 10.5074C8.03376 10.6562 8.38893 10.7868 8.75021 10.8984C9.1972 11.0397 9.604 11.02 9.92543 10.9721C10.284 10.9189 11.0303 10.5228 11.1854 10.0889C11.3404 9.65492 11.3407 9.28327 11.2942 9.20593C11.2476 9.12858 11.1231 9.08171 10.9363 8.98896Z"
                                    fill="#323241"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://t.me/shternik3"
                            className="image_wrapper"
                        >
                            <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.1564 17.4253C15.1134 17.5327 15.0479 17.6296 14.9644 17.7095C14.8808 17.7895 14.7811 17.8506 14.672 17.8889C14.5629 17.9272 14.4468 17.9417 14.3317 17.9314C14.2165 17.9212 14.1048 17.8865 14.0041 17.8296L10.8823 15.4038L8.8786 17.2523C8.83211 17.2866 8.77772 17.3088 8.72045 17.3166C8.66318 17.3244 8.60485 17.3177 8.55085 17.2971L8.93495 13.8603L8.94725 13.8701L8.9551 13.8022C8.9551 13.8022 14.5729 8.68762 14.8017 8.4697C15.0334 8.25235 14.9569 8.2052 14.9569 8.2052C14.9701 7.94009 14.5412 8.2052 14.5412 8.2052L7.0978 12.9938L3.99799 11.9381C3.99799 11.9381 3.52189 11.7674 3.47704 11.3919C3.42989 11.0193 4.0135 10.8169 4.0135 10.8169L16.3381 5.92076C16.3381 5.92076 17.3512 5.46936 17.3512 6.2169L15.1564 17.4253Z"
                                    fill="#323241"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="wrapper">
                    <div className="nav">
                        <a href="/#about">О смене</a>
                        <a href="/#about2">Проживание и питание</a>
                        <a href="/#comments">Отзывы</a>
                        <a href="/#faq">Частые вопросы</a>
                    </div>
                    <div className="buttons">
                        <button
                            onClick={() => {
                                setShow(false)
                                setShowRegister(true)
                            }}
                        >
                            Регистрация
                        </button>
                        <button onClick={() => set(true)}>
                            Перезвоните мне
                        </button>
                    </div>
                </div>
            </div>
            <div className="adaptive_header">
                <div className="icons">
                    <div className="image_wrapper">
                        <img src="./images/header/phone.svg" alt="" />
                    </div>
                    <div className="image_wrapper">
                        <img src="./images/header/mail.svg" alt="" />
                    </div>
                    <div className="image_wrapper">
                        <img src="./images/header/whats.svg" alt="" />
                    </div>
                    <div className="image_wrapper">
                        <img src="./images/header/telegram.svg" alt="" />
                    </div>
                </div>
                <div className="burger" onClick={() => setShow(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={show ? 'burger_content show' : 'burger_content'}>
                <img
                    src="./images/header/cross.svg"
                    alt=""
                    onClick={() => setShow(false)}
                />
                <a href="/#about" onClick={() => setShow(false)}>
                    О смене
                </a>
                <a href="/#about2" onClick={() => setShow(false)}>
                    Проживание и питание
                </a>
                <a href="/#comments" onClick={() => setShow(false)}>
                    Отзывы
                </a>
                <a to="/#faq" onClick={() => setShow(false)}>
                    Частые вопросы
                </a>
                <p
                    onClick={() => {
                        setShow(false)
                        setShowRegister(true)
                    }}
                >
                    Регистрация
                </p>
                <p
                    onClick={() => {
                        set(true)
                        setShow(false)
                    }}
                >
                    Перезвоните мне
                </p>
            </div>
        </div>
    )
}

export default Header
