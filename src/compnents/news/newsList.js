import React from 'react';
import { Link } from 'react-router-dom';
import NEWS_QUERY from '../queries/news/news';
import Query from '../query/query';
import st from './news.module.css';

const NewsList = () => {
    return (
        <section>
            <Query query={NEWS_QUERY} id={null}>
                {({ data: { products } }) => {
                    return (
                        <div className={st.news_container}>
                            {products && products.map(elem => (
                                <Link to={`/news/${elem.id}`} key={elem.id} className={st.news}>
                                    <div className={st.img_container}>
                                        <img src={'http://localhost:1337' + elem.img.url} alt="img"></img>
                                    </div>
                                    <div className={st.text_container}>
                                        <h5>{elem.data}</h5>
                                        <h3>{elem.name}</h3>
                                        <p>{elem.info}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )
                }}
            </Query>
        </section>
    )
}

export default NewsList;