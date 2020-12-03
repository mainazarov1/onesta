import React from 'react';
import st from './header.module.css';
import {useLocation} from 'react-router-dom';
import milk from './image/milk1.jpg';
import greenForMain from './image/green-for-mainpage.jpg'

const Header = () =>{
    let location = useLocation().pathname;

    return(
        <header>
            {
                location === '/about' && 
                <><h1>About Onesta group</h1></>
            }
            {
                location === '/' &&
                <><h1>Onesta group</h1></>
            }
            {
                location === '/categories' && 
                <><h1>Categories</h1></>
            }
            {
                location === '/tehnolog' && 
                <><h1>Tehnolog</h1></>
            }
            {
                location === '/news' &&
                <><h1>News</h1></>
            }
            {
                location === '/contacts' && 
                <><h1>Contact</h1></>
            }
            {
                location.match('/category/') && 
                <><h1>product</h1></>
            }
            {
                location.match('/product/') && 
                <><h1>about product</h1></>
            }
        </header>
    )
}

export default Header;