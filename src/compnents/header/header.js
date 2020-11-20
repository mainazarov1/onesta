import React from 'react';
import st from './header.module.css';
import {useLocation} from 'react-router-dom';

const Header = () =>{
    let location = useLocation().pathname;
    // const [title, setTitle] = useState();

//     const [rerender, setRerender] = useState(); // or any state
// const [afterRender, setAfterRender] = useState();// internal state

// // (1)
// useEffect(() => {
//    if (!afterRender){
//     let title = document.querySelector('.blog_card_intro h3');
//     console.log(title)
//    }

//    setAfterRender(false);
// }, [afterRender]);

// useEffect(() => {
//    setAfterRender(true); // (1) will be called after DOM rendered
// }, [rerender]); // or don't set any if you want to listen to all re-render events
    // useLayoutEffect(() =>{
    //     let title = document.querySelector('.blog_card_intro h3');
    //         setTitle(title);
    // })
    // useEffect(() => {
    //     console.log('test')
    //     setTimeout(function(){
    //         let title = (document.querySelector('.blog_card_intro h3')).innerHTML;
    //         let title_intro = (document.querySelector('.title_intro'));
    //         title_intro.innerHTML += title;
    //     }, 1000)
    //   });


    return(
        <div className={st.header}>
            {
                location === '/about' && <h1>About</h1>
            }
            {
                location === '/' && <h1>Onesta Group</h1>
            }
            {
                location === '/products' && <h1>products</h1>
            }
            {
                location === '/tehnolog' && <h1>tehnolog</h1>
            }
            {
                location === '/news' && <h1>news</h1>
            }
            {
                location === '/contacts' && <h1>contacts</h1>
            }
            {
                // location.match('/product/') && title && <h1 className="title_intro">{title.innerHTML}</h1>
            }
        </div>
    )
}

export default Header;