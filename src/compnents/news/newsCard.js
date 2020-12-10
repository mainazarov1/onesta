import React from 'react';
import { useParams } from 'react-router';
import Query from '../query/query';
import NEWS_CARD_QUERIES from '../queries/news/newsCard';
import st from './news.module.css';
import { Link } from 'react-router-dom';

const NewsCard = () => {
    let { id } = useParams();
    return (
        <Query query={NEWS_CARD_QUERIES} id={id}>

            {({ data: { product } }) => {
                return (
                    <section className={st.news_wrapper}>
                        <div className={st.left_container}>
                            <img src={'http://localhost:1337' + product.img.url} alt="img"></img>
                        </div>
                        <div className={st.right_container}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <Link to="/news" className={st.go_back_btn}>Посмотреть все новости</Link>
                            <Link to="/contacts" className={st.contact_btn}>Связаться с нами</Link>
                        </div>
                    </section>
                )
            }}
        </Query>

    )
}

export default NewsCard;