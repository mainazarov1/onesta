import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import NEWS_QUERY from '../queries/news/news';
import Query from '../query/query';
import st from './main.module.css';
import about from './image/Logo-onesta-group-1024x828.jpg'
import companyImg from './image/altri-prodotti-altri-coagulanti-genetico-uai-720x720.jpg';
import companyImg1 from './image//altri-prodotti-lipasi-lipasi-di-capretto-uai-720x720.jpg';
import Glide from '@glidejs/glide';
import CATEGORY_QUERY from '../queries/category/category';
 
// 

const Main = () =>{
    useEffect (() => {
        new Glide('.glide').mount()
    })
    return(
        <div>
             <div className={st.projects_section}>
                <h2>Другие компании</h2>
                <div className={st.project_items}>
                    <a href="#" class={st.project_item}>
                        <div className={st.text_container}>
                            <h4>Name of company</h4>
                        </div>
                        <div className={st.img_container}>
                            <img src={companyImg} alt="img"></img>
                        </div>
                    </a>
                    <a href="#" className={st.project_item}>
                        <div className={st.text_container}>
                            <h4>Name of company</h4>
                        </div>
                        <div className={st.img_container}>
                            <img src={companyImg1} alt="img"></img>
                        </div>
                    </a>
                    <a href="#" className={st.project_item}>
                        <div className={st.text_container}>
                            <h4>Name of company</h4>
                        </div>
                        <div className={st.img_container}>
                            <img src={companyImg} alt="img"></img>
                        </div>
                    </a>
                    <a href="#" className={st.project_item}>
                        <div className={st.text_container}>
                            <h4>Name of company</h4>
                        </div>
                        <div className={st.img_container}>
                            <div className={st.plus}>+</div>
                        </div>
                    </a>
                </div>
            </div>
             <div class={st.about_section}>
                <h2>О нас</h2>
                <div class={st.about_container}>
                    <div class={st.text_container}>
                        <h4>Мы рады видеть вас!</h4>
                        <p>Наша компания ориентирована на специалистов молочной отрасли. В списке предлагаемых нами продуктов
                            имеется полный набор лиофилизированных бактериальных культур, компонентов для различных видов
                            молочной продукции.</p>
                        <p>Надеемся, что наш сайт поможет специалистам пищевых производств сориентироваться в широком спектре
                            продукции, предлагаемой сегодня в Кыргызстане, а также сделать правильный выбор в пользу
                            исторических лидеров-производителей.</p>
                        <Link to='/about'>Подробнее</Link>
                    </div>
                    <div class={st.img_container}>
                        <img src={about} alt="img"></img>
                    </div>
                </div>
            </div>
            <section>
            <h2>products</h2>
            <div className='glide'>
                <div className="glide__track" data-glide-el="track">
            {/* <Query query={BLOG_QUERY} id={null}>
                    {({data: {blogs} }) => {
                        return(
                            <ul className="glide__slides">
                            {blogs && blogs.map(elem =>(
                                <li class="glide__slide">
                                <Link to={`/product/${elem.id}`}  key={elem.id} className='card'>
                                    <h3>{elem.name}</h3>
                                    <p>{elem.description}</p>
                                    <img src={'http://localhost:1337' + elem.img.url} alt="img"></img>
                                </Link>
                                </li>
                            ))}
                            </ul>
                        )
                    }}
                </Query> */}
                 <Query query={CATEGORY_QUERY} id={null}>
                    {({data: {categories} }) => {
                        return(
                            <ul className="glide__slides">
                            {categories && categories.map(elem =>(
                                <li class="glide__slide">
                                <Link to={`/categories/${elem.id}`}  key={elem.id} className='card'>
                                    <h3>{elem.name}</h3>
                                    <img src={'http://localhost:1337' + elem.photo.url} alt="img"></img>
                                </Link>
                                </li>
                            ))}
                            </ul>
                        )
                    }}
                </Query>
                </div>
                            </div>
            </section>
            <div><Query query={NEWS_QUERY} id={null}>
                    {({data: {products} }) => {
                        return(
                            <div className={st.news_container}>
                                <h2>News</h2>
                            {products && products.map(elem =>(
                                <Link to={`/news/${elem.id}`}  key={elem.id} className={st.news_item}>
                                    <div className={st.img_container}><img src={'http://localhost:1337' + elem.img.url} alt="img"></img></div>
                                    <div className={st.text_container}>
                                    <h4>{elem.name}</h4>
                                    <p>{elem.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        )
                    }}
                </Query>
            </div>
        </div>
    )
}

export default Main;