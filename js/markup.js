let body = document.querySelector('body')
body.className = 'body'

let head = document.querySelector('head')

let metaCharset = document.createElement('meta')
let charset = document.createAttribute('charset')
charset.value="utf-8"
head.appendChild(metaCharset)
metaCharset.setAttributeNode(charset)


let namimg = document.createAttribute('name')
let content = document.createAttribute('content')
let metaViewport = document.createElement('meta')
namimg.value='viewport'
content.value='width=device-width, initial-scale=1.0'
head.appendChild(metaViewport)
metaViewport.setAttributeNode(namimg)
metaViewport.setAttributeNode(content)

let title = document.createElement('title')
head.appendChild(title)
title.innerHTML = ('Only JS')

let linkFonts = document.createElement('link')
head.appendChild(linkFonts)
let rel = document.createAttribute('rel')
let href = document.createAttribute('href')
rel.value='preconnect'
href.value='https://fonts.googleapis.com'
linkFonts.setAttributeNode(rel)
linkFonts.setAttributeNode(href)

let linkFontsPre = document.createElement('link')
let crossorigin = document.createAttribute('crossorigin')
head.appendChild(linkFontsPre)
linkFontsPre.setAttributeNode(rel.cloneNode(true))
linkFontsPre.setAttributeNode(href.cloneNode(true))
linkFontsPre.setAttributeNode(crossorigin)
href.value='https://fonts.gstatic.com'

let linkFontsStyle = document.createElement('link')
head.appendChild(linkFontsStyle)
linkFontsStyle.setAttributeNode(href.cloneNode(true))
linkFontsStyle.setAttributeNode(rel.cloneNode(true))
href.value='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap'
rel.value='stylesheet'

body.innerHTML += `<header></header><main></main><footer></footer>`
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')

// let p = document.createElement('img');
// let a = document.createAttribute('src')
// let width = document.createAttribute('width')
// a.value="assets/github.png"
// width.value="20px"
// p.innerHTML = ('Привет, Мир!');
// body.appendChild(p);
// p.className = 'hello-world'
// p.setAttributeNode(a)
// p.setAttributeNode(width)


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
    <img class="html-png" src="assets/html.png" max-width="1400px" max-height="375px" alt="html">
    <p class="html-subtitle">HTML Используется лишь для запуска сайта и JS</p>
</article>`

mainContent.innerHTML += `
<article class="style-content">
    <h3 class="style-title">Стили</h3>
    <img class="style-png" src="assets/style.png" max-width="1400px" max-height="223px" alt="style">
    <p class="style-subtitle">Все стили написаны по примеру на картинке</p>
</article>`

mainContent.innerHTML += `
<article class="markup-content">
    <h3 class="markup-title">Разметка</h3>
    <img class="markup-png" src="assets/markup.png" max-width="1400px" max-height="470" alt="markup">
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
    <a class="github-link" href="https://github.com/jange4ik/onlyjs">Исходный код<img src="assets/github.png" width="20px" height="20px"></a>
    <a class="telegram-link" href="https://t.me/stuwebit">Мой ТГК<img src="assets/telegram.png" width="20px" height="20px"></a>
    <a class="vk-link" href="https://vk.com/cringegidrogeneratordegenerat228">Мой ВК<img src="assets/vk.png" width="20px" height="20px"></a>
</nav>
`