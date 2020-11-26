let lastScrollTop = 0;
window.addEventListener('scroll', function(){
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const nav = document.querySelector('nav');
    if(scrolled > lastScrollTop){
		nav.style.top = -70 + 'px';
	}else{
		nav.style.top = 0 + 'px';
	}
    
    
    if (scrolled > document.documentElement.clientHeight / 2 - 70) {
        nav.style.background = 'black';
    } else {
        nav.style.background = 'none';
    }
    lastScrollTop = scrolled;
})

document.querySelector('.menu_btn').addEventListener('click', function(){
    this.classList.toggle('menu_btn_active');
    document.querySelector('.menu_container').classList.toggle('menu_container_show')
})