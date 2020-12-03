import React from 'react';
import Query from '../query/query';
import {Link} from 'react-router-dom';  
import CATEGORY_QUERY from '../queries/category/category';
import BLOG_QUERY from '../queries/blog/blog';


const Categories = () =>{
    const search = (title) =>{
        let product_card = document.querySelectorAll('.product_card');
        product_card.forEach(elem =>{
            elem.classList.add('hide_card')
            if(elem.childNodes[0].innerHTML.includes(title)){
                console.log(elem)
                elem.classList.remove('hide_card');
            }
        })
    }

    return(
        <div>
            <input placeholder='search' onKeyUp= {e=>search(e.target.value)}></input>
            <div>
            <Query query={CATEGORY_QUERY} id={null}>
                    {({data: {categories} }) => {
                        return(
                            <ul className="glide__slides">
                            {categories && categories.map(elem =>(
                                <Link to={`/category/${elem.id}`} className='card' key={elem.id}>
                                    <h3>{elem.name}</h3>
                                </Link>
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
                                <Link to={`/product/${elem.id}`} className='product_card' key={elem.id}>
                                    <h3 className='product_title'>{elem.name}</h3>
                                    <p>{elem.description}</p>
                                    <img src={'http://localhost:1337' + elem.img.url} alt="img"></img>
                                </Link>
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