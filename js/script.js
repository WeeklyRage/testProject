function addClassHeaderScrolling () {

    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {

        if (window.scrollY > header.style.height) {

            header.classList.add('shadow');

        }else {

            header.classList.remove('shadow');

        }

    }); 
} 
addClassHeaderScrolling();

function showMobileMenu() {
    const btnBurger = document.querySelector('.header-wrapper__burger'),
          blockMenu = document.querySelector('.header-wrapper__nav');

          btnBurger.addEventListener('click', ()=> {

            btnBurger.classList.toggle('burger-active')
            blockMenu.classList.toggle('show')


          })
    
}
showMobileMenu();