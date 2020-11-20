import React from 'react';
import { Link } from 'react-router-dom';
import st from './nav.module.css';

const Nav = () => {

    return(
            <div className={st.nav}>
                <Link to='/' className={st.logo}>Onesta Group</Link>
                <ul className={st.nav_link}>
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/products'>Продукция</Link></li>
                    <li><Link to='/tehnolog'>Страница Технолога</Link></li>
                    <li><Link to='/about'>О компании</Link></li>
                    <li><Link to='/news'>Новости</Link></li>
                    <li><Link to='/contacts'>Контакты</Link></li>
                </ul>
                <span className={st.localization}>Рус</span>
                <span className={st.search}>Поиск...</span>
            </div>
    )
}

export default Nav;