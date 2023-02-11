import React, { useState } from 'react'
import './index.scss'
import InputMask from 'react-input-mask'
import axios from 'axios'

const Modal = ({ state, set }) => {
    const [fio, setFio] = useState('')
    const [phone, setPhone] = useState('')
    const [form, setForm] = useState('')

    const handleSend = () => {
        if (form.length === 0 || phone.length === 0 || fio.length === 0) {
            return null
        } else {
            axios
                .post('http://kurs.stern.xyz:8001/api/v1/register/')
                .then((res) => console.log('success'))
        }
    }

    return (
        <div className="modal_wrapper">
            <div className="content">
                <img src="./images/modal/phone.png" alt="" className="phone" />
                <img
                    src="./images/modal/cross.svg"
                    alt=""
                    className="cross"
                    onClick={() => set(false)}
                />
                <div className="left">
                    <input
                        type="text"
                        placeholder="ФИО"
                        value={fio}
                        onChange={(e) => setFio(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Класс"
                        value={form}
                        onChange={(e) => setForm(e.target.value)}
                    />
                    <InputMask
                        mask="+7 (999) 999-99-99"
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button onClick={() => handleSend()}>Отправить</button>
                    <div className="texts">
                        <p>+7 (936) 512-06-01</p>
                        <p>hi@stern.xyz</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal
