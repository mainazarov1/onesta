import React from 'react';
import st from './header.module.css';
import {useLocation} from 'react-router-dom';
import img from './image/img.png'

const Header = () =>{
    let location = useLocation().pathname;
    let classN = 'header_' + location.replace(/[0-9 /]/g, '');
    return(
        <header className={classN}>
            {
                location === '/about' && 
                <><h1>about onesta group</h1><p>some text about block</p></>
            }
            {
                location === '/' &&
                <><h1>Onesta group</h1><p>some text about block</p></>
            }
            {
                location === '/categories' && 
                <><h1>Categories</h1><p>some text about block</p></>
            }
            {
                location === '/tehnolog' && 
                <><h1>Tehnolog</h1><p>some text about block</p></>
            }
            {
                location === '/news' &&
                <><h1>News</h1><p>some text about block</p></>
            }
            {
                location.match('/news/') &&
                <><h1>News</h1><p>some text about block</p></>
            }
            {
                location === '/contacts' && 
                <><h1>Contact</h1><p>some text about block</p></>
            }
            {
                location.match('/category/') && 
                <><h1>product</h1><p>some text about block</p></>
            }
            {
                location.match('/product/') && 
                <><h1>about product</h1><p>some text about block</p></>
            }
            <img src={img} alt="img"/>
        </header>
    )
}

export default Header;