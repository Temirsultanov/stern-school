import React from 'react'
import { useOnClickOutside } from '../../lib/useOnClickOutside'
import InputMask from 'react-input-mask'
import './index.scss'
import axios from 'axios'

const CallMe = ({ set }) => {
    let ref = React.useRef(null)
    const [phone, setPhone] = React.useState('')

    useOnClickOutside(ref, () => set(false))

    const Send = () => {
        axios
            .post('https://kurs.stern.xyz:8002/api/v1/feedback/', { phone })
            .then(console.log('success'))
            .catch((err) => console.error(err))
    }

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
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
                <button onClick={() => Send()}>Отправить</button>
                <div className="texts">
                    <p>+7 (936) 512-06-01</p>
                    <p>hi@stern.xyz</p>
                </div>
            </div>
        </div>
    )
}

export default CallMe
