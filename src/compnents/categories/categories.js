import React from 'react';
import Query from '../query/query';
import {Link} from 'react-router-dom';  
import CATEGORY_QUERY from '../queries/category/category';
import BLOG_QUERY from '../queries/blog/blog';


const Categories = () =>{

    return(
        <div>
            <div>
            <Query query={CATEGORY_QUERY} id={null}>
                    {({data: {categories} }) => {
                        return(
                            <ul className="glide__slides">
                            {categories && categories.map(elem =>(
                                <li class="glide__slide">
                                <Link to={`/category/${elem.id}`}  key={elem.id} className='card'>
                                    <h3>{elem.name}</h3>
                                </Link>
                                </li>
                            ))}
                            </ul>
                        )
                    }}
                </Query>
            </div>
            <div>
                <Query query={BLOG_QUERY} id={null}>
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
                </Query>
            </div>
        </div>
    )
}

export default Categories;