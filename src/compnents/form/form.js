import React from 'react';
import st from './form.module.css';


const Form = () =>{
     
    return(
        <section className={st.form}>
            <form>
                <h2>Форма обратной связи</h2>
                <input placeholder="Ваше имя (обязательно)"/>
                <input placeholder="Email (обязательно)"/>
                <input placeholder="Тема"/>
                <textarea placeholder="Сообщение"/>
                <button>Отправить</button>
            </form>
            <div className={st.contacts}>
                <span>Адрес</span>
                <span>ул. Гражданская</span>
                <span>Почта</span>
                <span>onesta_group@mail.ru</span>
                <span>Контактные номера</span>
                <span>+996 (777) 217 110</span>
                <span>+996 (777) 217 110</span>
                <span>+996 (777) 217 110</span>
            </div>
        </section>
    )
}

export default Form;