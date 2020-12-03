import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import st from './nav.module.css';

const Nav = () => {
    useEffect(() => {
        let lastScrollTop = 0;
        window.addEventListener('scroll', function () {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            const nav = document.querySelector('nav');
            if (scrolled > lastScrollTop) {
                nav.style.top = -70 + 'px';
            } else {
                nav.style.top = 0 + 'px';
            }
            if (scrolled > document.documentElement.clientHeight / 2 - 70) {
                nav.style.background = 'rgba(0,0,0, 0.7)';
            } else {
                nav.style.background = 'none';
            }
            lastScrollTop = scrolled;
        })
    })
    const [navBtn, setNavBtn] = useState(false);
    const changeNavBtn = () => {
        setNavBtn(!navBtn)
    }
    const closeMenu = () => {
        setNavBtn(false);
    }
    return (
        <nav className={st.nav}>
            <Link to='/' className={st.logo}>Onesta Group</Link>
            <div className={navBtn ? st.menu_btn_active : st.menu_btn} onClick={changeNavBtn}><span></span></div>
            <ul className={navBtn ? st.menu_active : st.menu}>
                <Link to='/' onClick={closeMenu}>Главная</Link>
                <Link to='/categories' onClick={closeMenu}>Продукция</Link>
                <Link to='/tehnolog' onClick={closeMenu}>Страница Технолога</Link>
                <Link to='/about' onClick={closeMenu}>О компании</Link>
                <Link to='/news' onClick={closeMenu}>Новости</Link>
                <Link to='/contacts' onClick={closeMenu}>Контакты</Link>
            </ul>
        </nav>
    )
}

export default Nav;