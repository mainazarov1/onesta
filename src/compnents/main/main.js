import React from 'react';
import {Link} from 'react-router-dom';
import BLOG_QUERY from '../queries/blog/blog';
import NEWS_QUERY from '../queries/news/news';
import Query from '../query/query';

const Main = () =>{
    return(
        <div>
            <section>about</section>
            <section>products
            <Query query={BLOG_QUERY} id={null}>
                    {({data: {blogs} }) => {
                        return(
                            <div className='blog_cards'>
                            {blogs && blogs.map(elem =>(
                                <Link to={`/product/${elem.id}`}  key={elem.id} className='card'>
                                    <h3>{elem.name}</h3>
                                    <p>{elem.description}</p>
                                    <img src={'http://localhost:1337' + elem.img.url} alt="img"></img>
                                </Link>
                            ))}
                        </div>
                        )
                    }}
                </Query>
            </section>
            <section>feedback</section>
            <section><Query query={NEWS_QUERY} id={null}>
                    {({data: {products} }) => {
                        return(
                            <div className='blog_cards'>
                            {products && products.map(elem =>(
                                <Link to={`/news/${elem.id}`}  key={elem.id} className='card'>
                                    <h3>{elem.name}</h3>
                                    <p>{elem.description}</p>
                                    <img src={'http://localhost:1337' + elem.img.url} alt="img"></img>
                                </Link>
                            ))}
                        </div>
                        )
                    }}
                </Query></section>
        </div>
    )
}

export default Main;