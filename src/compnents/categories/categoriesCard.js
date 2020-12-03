import React from 'react'
import { useParams} from 'react-router';
import Query from '../query/query';
import CATEGORY_CARD_QUERY from '../queries/category/categoryCard';
import {Link} from 'react-router-dom';
import CATEGORY_QUERY from '../queries/category/category';

const CategoryCard = () =>{
    let { id } = useParams();


    return(
        <div>
            <h2>Category</h2>
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
            <Query query={CATEGORY_CARD_QUERY} id={id}>
                {({data: {category} }) => {
                    return(
                        <div>
                            {category.blogs && category.blogs.map(elem =>(
                                <li class="glide__slide">
                                <Link to={`/product/${elem.id}`}  key={elem.id} className='card'>
                                    <h3>{elem.name}</h3>
                                    <p>{elem.description}</p>
                                    <img src={'http://localhost:1337' + elem.img.url} alt="img"></img>
                                </Link>
                                </li>
                            ))}
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}

export default CategoryCard;