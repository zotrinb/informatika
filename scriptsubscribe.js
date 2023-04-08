
const LoginSection = document.querySelector('.login');
const SubscribeButtons = document.querySelectorAll('.subscribe__btn');
const Main = document.querySelector('main');
const Header = document.querySelector('header');

SubscribeButtons.forEach((elem) => {
    elem.addEventListener('click', () => {
        LoginSection.classList.add('flex--login');
        document.body.classList.add('locked');
        Main.classList.add('blured');
        Header.classList.add('blured');
    })
})



LoginSection.addEventListener('click', () => {
    LoginSection.classList.remove('flex--login');
    Main.classList.remove('blured');
    Header.classList.remove('blured');
    document.body.classList.remove('locked');

})



