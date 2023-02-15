import React, { useState } from 'react'
import './index.scss'
import InputMask from 'react-input-mask'
import axios from 'axios'
import { useOnClickOutside } from '../../lib/useOnClickOutside'
import { toast } from 'react-toastify'

const Modal = ({ state, set }) => {
    const [fio, setFio] = useState('')
    const [phone, setPhone] = useState('')
    const [form, setForm] = useState('')
    let ref = React.useRef(null)

    useOnClickOutside(ref, () => set(false))
    const notify = () => toast.success('Заявка отправлена!!')
    const notifyError = () => toast.error('Ошибка отправки!!')

    const handleSend = () => {
        if (form.length === 0 || phone.length === 0 || fio.length === 0) {
            return null
        } else {
            axios
                .post('https://kurs.stern.xyz:8002/api/v1/register/', {
                    fio,
                    phone,
                    form,
                })
                .then((res) => {
                    set(true)
                    notify()
                })
                .catch((err) => notifyError())
                .finally(() => set(false))
        }
    }

    return (
        <div className="register modal_wrapper">
            <div className="content" ref={ref}>
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
                        <a href="tel:+7 (936) 512-06-01">+7 (936) 512-06-01</a>
                        <a href="mailto:hi@stern.xyz">hi@stern.xyz</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal
