import { Link } from 'react-router-dom';
import NEWS_QUERY from '../queries/news/news';
import Query from '../query/query';
import st from './main.module.css';
import about from './image/Logo-onesta-group-1024x828.jpg'
import other_project from './image/other_project.jpeg';
import other_project1 from './image/other_project1.jpeg';
import other_project2 from './image/other_project2.jpeg';
import CATEGORY_QUERY from '../queries/category/category';

const Main = () => {
    return (
        <div>
            <section className={st.projects_section}>
                <h2>Другие компании</h2>
                <div className={st.project_items}>
                    <a href="project" className={st.project_item}>
                        <div className={st.img_container}>
                            <img src={other_project} alt="img"></img>
                        </div>
                        <div className={st.text_container}>
                            <h4>Name of company</h4>
                            <p>some text about other company</p>
                        </div>
                    </a>
                    <a href="project" className={st.project_item}>
                        <div className={st.img_container}>
                            <img src={other_project1} alt="img"></img>
                        </div>
                        <div className={st.text_container}>
                            <h4>Name of company</h4>
                            <p>some text about other company</p>
                        </div>
                    </a>
                    <a href="project" className={st.project_item}>
                        <div className={st.img_container}>
                            <img src={other_project2} alt="img"></img>
                        </div>
                        <div className={st.text_container}>
                            <h4>Name of company</h4>
                            <p>some text about other company</p>
                        </div>
                    </a>
                </div>
            </section>
            <section className={st.about_section}>
                <h2>О нас</h2>
                <div className={st.about_container}>
                    <div className={st.text_container}>
                        <h4>Мы рады видеть вас!</h4>
                        <p>Наша компания ориентирована на специалистов молочной отрасли. В списке предлагаемых нами продуктов
                        имеется полный набор лиофилизированных бактериальных культур, компонентов для различных видов
                            молочной продукции.</p>
                        <p>Надеемся, что наш сайт поможет специалистам пищевых производств сориентироваться в широком спектре
                        продукции, предлагаемой сегодня в Кыргызстане, а также сделать правильный выбор в пользу
                            исторических лидеров-производителей.</p>
                        <Link to='/about'>Подробнее</Link>
                    </div>
                    <div className={st.img_container}>
                        <img src={about} alt="img"></img>
                    </div>
                </div>
            </section>
            <section>
                <h2>products</h2>
                <Query query={CATEGORY_QUERY} id={null}>
                    {({ data: { categories } }) => {
                        return (
                            <div className={st.categories}>
                                {categories && categories.map(elem => (
                                    <div className={st.category} key={elem.id}>
                                        <Link to={`/category/${elem.id}`} className='card'>
                                            <div className={st.img_container}>
                                                <img src={'http://localhost:1337' + elem.photo.url} alt="img"></img>
                                            </div>
                                            <div className={st.text_container}>
                                                <h3>{elem.name}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )
                    }}
                </Query>
            </section>
            <section>
                <h2>News</h2>
                <Query query={NEWS_QUERY} id={null}>
                    {({ data: { products } }) => {
                        return (
                            <div className={st.news_container}>
                                {products && products.map(elem => (
                                    <Link to={`/news/${elem.id}`} key={elem.id} className={st.news_item}>
                                        <div className={st.img_container}><img src={'http://localhost:1337' + elem.img.url} alt="img"></img></div>
                                        <div className={st.text_container}>
                                            <span>{elem.data}</span>
                                            <h4>{elem.name}</h4>
                                            <p>{elem.info}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )
                    }}
                </Query>
            </section>
        </div>
    )
}

export default Main;