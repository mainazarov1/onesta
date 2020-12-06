import React from 'react';
import st from './about.module.css';
import milk from './image/milk.jpg';
import star from './image/star.svg';


const About = () => {
    return (
        <div className={st.about_container}>
            <div className={st.about_main_block}>
                <h2>Certified by the Sadyk Keyn</h2>
                <h3>The largest and most perspective agency</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus molestias et expedita ipsam.</p>
            </div>
            <div className={st.services_container}>
                <div className={st.services_card}>
                    <div>
                        <h4>Качество</h4>
                        <p>Мы поставляем продукцию высшего качества, изготовленную по мировым стандартам.</p>
                    </div>
                    <img src={milk} alt="img"></img>
                </div>
                <div className={st.services_card}>
                    <div>
                        <h4>Консультация</h4>
                        <p>Специалисты нашей компании всегда окажут все необходимые консультации по использованию продукции.</p>
                    </div>
                </div>
                <div className={st.services_card}>
                    <div>
                        <h4>Доступность</h4>
                        <p>Мы предлагаем лучшее соотношение цены и качества.</p>
                    </div>
                    <img src={milk} alt="img"></img>
                </div>
            </div>
            <h2>О компании</h2>
            <div className={st.about_wrapper}>
                <p>«КАЧЕСТВЕННЫЙ И УСПЕШНЫЙ ГОТОВЫЙ ПРОДУКТ, МОЖЕТ БЫТЬ ИЗГОТОВЛЕН ТОЛЬКО С ИСПОЛЬЗОВАНИЕМ КАЧЕСТВЕННЫХ ИНГРЕДИЕНТОВ»</p>
                <p>Компания «Onesta Group» - дистрибьютерская компания по поставке ингредиентов для пищевых промышленных предприятий. </p>
                <p>Мы стремимся к улучшению качества и постоянному расширению сфер своих услуг и ассортимента продукции.</p>
            </div>
            <div className={st.line}></div>
            <div className={st.about_wrapper2}>
                <div className={st.about_characters}>
                    <div className={st.characters_header}>
                        <img src={star} alt="img"></img>
                        <h5>ГАРАНТИРОВАНО ВЫСОКОЕ КАЧЕСТВО</h5>
                    </div>
                    <p>Продукция, представленная нашей компанией, сертифицирована, что подтверждается всеми
                        необходимыми документами. </p>
                </div>
                <div className={st.about_characters}>
                    <div className={st.characters_header}>
                        <img src={star} alt="img"></img>
                        <h5>ГАРАНТИРОВАНО ВЫСОКОЕ КАЧЕСТВО</h5>
                    </div>
                    <p>Продукция, представленная нашей компанией, сертифицирована, что подтверждается всеми
                        необходимыми документами. </p>
                </div>
                <div className={st.about_characters}>
                    <div className={st.characters_header}>
                        <img src={star} alt="img"></img>
                        <h5>ГАРАНТИРОВАНО ВЫСОКОЕ КАЧЕСТВО</h5>
                    </div>
                    <p>Продукция, представленная нашей компанией, сертифицирована, что подтверждается всеми
                        необходимыми документами. </p>
                </div>
                <div className={st.about_characters}>
                    <div className={st.characters_header}>
                        <img src={star} alt="img"></img>
                        <h5>ГАРАНТИРОВАНО ВЫСОКОЕ КАЧЕСТВО</h5>
                    </div>
                    <p>Продукция, представленная нашей компанией, сертифицирована, что подтверждается всеми
                        необходимыми документами. </p>
                </div>
                <div className={st.about_characters}>
                    <div className={st.characters_header}>
                        <img src={star} alt="img"></img>
                        <h5>ГАРАНТИРОВАНО ВЫСОКОЕ КАЧЕСТВО</h5>
                    </div>
                    <p>Продукция, представленная нашей компанией, сертифицирована, что подтверждается всеми
                        необходимыми документами. </p>
                </div>
                <div className={st.about_characters}>
                    <div className={st.characters_header}>
                        <img src={star} alt="img"></img>
                        <h5>ГАРАНТИРОВАНО ВЫСОКОЕ КАЧЕСТВО</h5>
                    </div>
                    <p>Продукция, представленная нашей компанией, сертифицирована, что подтверждается всеми
                        необходимыми документами. </p>
                </div>
                <div className={st.about_characters_footer}>
                    <p>Компания «Onesta Group» обеспечит каждого
                    клиента как ингредиентами, так и комплексной
технологической поддержкой.</p>
                    <p>Мы предлагаем только сертифицированную,
высококачественную продукцию.</p>
                </div>
                <div className={st.about_character_pleasure}>
                    МЫ ЗА ДОЛГОЕ И ВЗАИМОВЫГОДНОЕ СОТРУДНИЧЕСТВО!
                </div>
            </div>
            <h2>Partners</h2>
            <div className={st.partners_container}>
                <div className={st.partner_card}>
                    <img src="https://iamjustkhan.github.io/bloo/content/icons/S7.svg" alt="img"></img>
                    <span>S7</span>
                </div>
                <div className={st.partner_card}>
                    <img src="https://iamjustkhan.github.io/bloo/content/icons/Yota_v2.svg" alt="img"></img>
                    <span>Yota</span>
                </div>
                <div className={st.partner_card}>
                    <img src="https://iamjustkhan.github.io/bloo/content/icons/S7.svg" alt="img"></img>
                    <span>S7</span>
                </div>
                <div className={st.partner_card}>
                    <img src="https://iamjustkhan.github.io/bloo/content/icons/Yota_v2.svg" alt="img"></img>
                    <span>Yota</span>
                </div>
                <div className={st.partner_card}>
                    <img src="https://iamjustkhan.github.io/bloo/content/icons/Yota_v2.svg" alt="img"></img>
                    <span>Yota</span>
                </div>
            </div>
        </div>


    )
}

export default About;