import React from 'react'
import { useParams } from 'react-router';
import Query from '../query/query';
import CATEGORY_CARD_QUERY from '../queries/category/categoryCard';
import { Link } from 'react-router-dom';
import CATEGORY_QUERY from '../queries/category/category';
import st from './category.module.css';

const CategoryCard = () => {

    const search = (title) => {
        let product_card = document.querySelectorAll('#products_id a');
        product_card.forEach(elem => {
            elem.classList.add('hide_card')
            if (elem.childNodes[1].childNodes[0].innerHTML.toLowerCase().includes(title.toLowerCase())) {
                elem.classList.remove('hide_card');
            }
        })
    }

    let { id } = useParams();


    return (
        <section>
            <div className={st.panel}>
                <Query query={CATEGORY_QUERY} id={null}>
                    {({ data: { categories } }) => {
                        return (
                            <div className={st.filter_elems}>
                                <Link to="/categories" className={st.filter_elem}><h3 className={st.all_products}>Все продукты</h3></Link>
                                {categories && categories.map(elem => (
                                    <Link to={`/category/${elem.id}`} key={elem.id} className={st.filter_elem}>
                                        {id === elem.id ? <h3 className={st.active_category}>{elem.name}</h3> : <h3>{elem.name}</h3>}
                                    </Link>
                                ))}
                            </div>
                        )
                    }}
                </Query>
                <input placeholder='search' onKeyUp={e => search(e.target.value)}></input>
            </div>
            <Query query={CATEGORY_CARD_QUERY} id={id}>
                {({ data: { category } }) => {
                    return (
                        <div className={st.products} id="products_id">
                            {category.blogs && category.blogs.map(elem => (
                                <Link to={`/product/${elem.id}`} className={st.product} key={elem.id}>
                                    <div className={st.img_container}>
                                        <img src={'http://localhost:1337' + elem.img.url} alt="img"></img>
                                    </div>
                                    <div className={st.text_container}>
                                        <h3 className='product_title'>{elem.name}</h3>
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

export default CategoryCard;