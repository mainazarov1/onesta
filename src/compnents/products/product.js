import React from 'react';
import { useParams } from 'react-router';
import Query from '../query/query';
import BLOG_CARD_QUERY from '../queries/blog/blogCard';
import st from './product.module.css';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    let { id } = useParams();

    return (
        <Query query={BLOG_CARD_QUERY} id={id}>
            {({ data: { blog } }) => {
                return (
                    <section className={st.product_container}>
                        <div className={st.left_container}>
                            <img src={'http://localhost:1337' + blog.img.url} alt="img"></img>
                            
                        </div>
                        <div className={st.right_container}>
                            <h3>{blog.name}</h3>
                            <h5>{blog.info}</h5>
                            <p>{blog.description}</p>
                            <Link to="/categories" className={st.go_back_btn}>Посмотреть все товары</Link>
                            <Link to="/contacts" className={st.contact_btn}>Связаться с нами</Link>
                        </div>
                    </section>
                )
            }}
        </Query>

    )
}

export default ProductCard;