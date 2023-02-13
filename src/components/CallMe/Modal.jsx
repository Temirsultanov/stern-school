import React from 'react'
import { useOnClickOutside } from '../../lib/useOnClickOutside'
import InputMask from "react-input-mask"
import './index.scss'

const CallMe = ({ set }) => {
    let ref = React.useRef(null)

    useOnClickOutside(ref, () => set(false))

    return (
        <div className="call modal_wrapper">
            <div className="content" ref={ref}>
                <img
                    src="./images/modal/cross.svg"
                    alt=""
                    className="cross"
                    onClick={() => set(false)}
                />
                <InputMask
                    mask="+7 (999) 999-99-99"
                    placeholder="+7 (___) ___-__-__"
                />
                <button>Отправить</button>
                <div className="texts">
                    <p>+7 (936) 512-06-01</p>
                    <p>hi@stern.xyz</p>
                </div>
            </div>
        </div>
    )
}

export default CallMe
