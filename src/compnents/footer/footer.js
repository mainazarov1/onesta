import React from 'react';
import st from './footer.module.css';

const Footer = () => {

    return (
        <footer className={st.footer}>
            <ul>
                <h4>address</h4>
                <li><a href="test">Кыргызская Республика, г. Бишкек, ул. Гражданская 53, офис 307</a></li>
            </ul>
            <ul>
                <h4>email</h4>
                <li><a href="test">onesta_group@mail.ru</a></li>
                <li><a href="test">onesta_group.job@mail.ru</a></li>
            </ul>
            <ul>
                <h4>contact</h4>
                <li><a href="test">+996 (550) 217 110</a></li>
                <li><a href="test">+996 (550) 217 110</a></li>
                <li><a href="test">+996 (550) 217 110</a></li>
            </ul>
            <ul className={st.social_media}>
                <h4>social network</h4>
                <li><a href="test">In</a></li>
                <li><a href="test">Fb</a></li>
                <li><a href="test">Tw</a></li>
            </ul>
        </footer>
    )
}

export default Footer;