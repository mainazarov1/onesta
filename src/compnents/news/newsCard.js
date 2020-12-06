import React from 'react';
import { useParams } from 'react-router';
import Query from '../query/query';
import NEWS_CARD_QUERIES from '../queries/news/newsCard';
import st from './news.module.css';

const NewsCard = () => {
    let { id } = useParams();
    console.log(id)
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
                        </div>
                    </section>
                )
            }}
        </Query>

    )
}

export default NewsCard;