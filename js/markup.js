let body = document.querySelector('.body')
body.innerHTML += `<header></header><main></main><footer></footer>`
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
header.innerHTML += `
<div class="header-title">
    <h1 class="header-topic">ONLY JS</h1>
    <p class="header-subtitle">Сайт написанный полностью на JS</p>
</div>`

main.innerHTML +=`
<section class="main-content">
    <h2 class="main-topic">Как это сделано?</h2>
</section>`
let mainContent = document.querySelector('.main-content')

mainContent.innerHTML += `
<article class="html-content">
    <h3 class="html-title">HTML</h3>
    <img class="html-png" src="assets/html.png" width="1400px" heigth="373px" alt="html">
    <p class="html-subtitle">HTML Используется лишь для запуска сайта и JS</p>
</article>`

mainContent.innerHTML += `
<article class="style-content">
    <h3 class="style-title">Стили</h3>
    <img class="style-png" src="assets/style.png" width="1400px" height="223px" alt="style">
    <p class="style-subtitle">Все стили написаны по примеру на картинке</p>
</article>`

mainContent.innerHTML += `
<article class="markup-content">
    <h3 class="markup-title">Разметка</h3>
    <img class="markup-png" src="assets/markup.png" width="1400px height="470" alt="markup">
    <p class="markup-subtitle">Вся разметка написана при помощи переменных и InnerHTML</p>
</article>`

footer.innerHTML += `
<section class="footer-content">
</section>
`
let footerContent = document.querySelector('.footer-content')

footerContent.innerHTML += `
<h3 class="footer-title">ONLY JS</h3>
<p class="footer-subtitle">Полезные ссылки</p>
<nav class="footer-nav">
    <a class="github-link" href="">Исходный код<img src="assets/github.png" width="20px" height="20px"></a>
    <a class="telegram-link">Мой ТГК<img src="assets/telegram.png" width="20px" height="20px"></a>
    <a class="vk-link">Мой ВК<img src="assets/vk.png" width="20px" height="20px"></a>
</nav>
`