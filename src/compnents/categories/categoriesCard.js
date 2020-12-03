import React from 'react'
import { useParams} from 'react-router';
import Query from '../query/query';
import CATEGORY_CARD_QUERY from '../queries/category/categoryCard';
import {Link} from 'react-router-dom';
import CATEGORY_QUERY from '../queries/category/category';
import st from './category.module.css';

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
                                <Link to={`/category/${elem.id}`}  key={elem.id} className='card'>
                                    {id === elem.id ? <h3 className={st.active_category}>{elem.name}</h3> : <h3>{elem.name}</h3>}
                                </Link>
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
                                <Link to={`/product/${elem.id}`} className='card' key={elem.id}>
                                    <h3>{elem.name}</h3>
                                    <p>{elem.description}</p>
                                    <img src={'http://localhost:1337' + elem.img.url} alt="img"></img>
                                </Link>
                            ))}
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}

export default CategoryCard;