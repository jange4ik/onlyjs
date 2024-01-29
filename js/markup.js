let body = document.querySelector('body')
body.className = 'body'

let src = document.createAttribute('src')
let defer = document.createAttribute('defer')
let script = document.createElement('script')
src.value = "js/style.js"
script.setAttributeNode(src.cloneNode(true))
script.setAttributeNode(defer.cloneNode(true))
body.appendChild(script)

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
title.textContent = 'Only JS'

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

let header = document.createElement('header')
body.appendChild(header)

let headerTitle = document.createElement('div')
header.appendChild(headerTitle)
headerTitle.className = ('header-title')

let headerTopic = document.createElement('h1')
headerTitle.appendChild(headerTopic)
headerTopic.className = ('header-topic')
headerTopic.textContent = 'ONLY JS'

let headerSubtitle = document.createElement('p')
headerTitle.appendChild(headerSubtitle)
headerSubtitle.className = ('header-subtitle')
headerSubtitle.textContent = 'Сайт написанный полностью на JS'


let main = document.createElement('main')
body.appendChild(main)

let mainContent = document.createElement('section')
main.appendChild(mainContent)
mainContent.className = ('main-content')

let mainTopic = document.createElement('h2')
mainContent.appendChild(mainTopic)
mainTopic.textContent = ('Как это сделано?')
mainTopic.className = ('main-topic')

let htmlContent = document.createElement('article')
mainContent.appendChild(htmlContent)
htmlContent.className = ('html-content')

let htmlTitle = document.createElement('h3')
htmlContent.appendChild(htmlTitle)
htmlTitle.textContent = 'HTML'
htmlTitle.className = ('html-title')

let maxWidth = document.createAttribute('max-width')
let maxHeight = document.createAttribute('max-height')
let alt = document.createAttribute('alt')

let htmlPng = document.createElement('img')
htmlContent.appendChild(htmlPng)
htmlPng.className = ('html-png')
src.value = "assets/html.png"
maxWidth.value = "1400px"
maxHeight.value = "151px"
alt.value = "html"
htmlPng.setAttributeNode(src.cloneNode(true))
htmlPng.setAttributeNode(maxWidth.cloneNode(true))
htmlPng.setAttributeNode(maxHeight.cloneNode(true))
htmlPng.setAttributeNode(alt.cloneNode(true))

let htmlSubtitle = document.createElement('p')
htmlContent.appendChild(htmlSubtitle)
htmlSubtitle.className = ('html-subtitle')
htmlSubtitle.textContent = "HTML Используется лишь для запуска сайта и JS"

let styleContent = document.createElement('article')
mainContent.appendChild(styleContent)
styleContent.className = ('style-content')

let styleTitle = document.createElement('h3')
styleContent.appendChild(styleTitle)
styleTitle.textContent = "Стили"
styleTitle.className = "style-title"

let stylePng = document.createElement('img')
styleContent.appendChild(stylePng)
stylePng.className = "style-png"
src.value = 'assets/style.png'
maxHeight.value = '274px'
alt.value = "style"
stylePng.setAttributeNode(src.cloneNode(true))
stylePng.setAttributeNode(maxWidth.cloneNode(true))
stylePng.setAttributeNode(maxHeight.cloneNode(true))
stylePng.setAttributeNode(alt.cloneNode(true))

let styleSubtitle = document.createElement('p')
styleContent.appendChild(styleSubtitle)
styleSubtitle.textContent = "Все стили написаны по примеру на картинке"
styleSubtitle.className = "style-subtitle"

let markupContent = document.createElement('article')
mainContent.appendChild(markupContent)
markupContent.className = ('markup-content')

let markupTitle = document.createElement('h3')
markupContent.append(markupTitle)
markupTitle.className = 'markup-title'
markupTitle.textContent = "Разметка"

let markupPng = document.createElement('img')
markupContent.appendChild(markupPng)
markupPng.className = 'markup-png'
src.value = 'assets/markup.png'
maxHeight.value = "369"
alt.value="markup"
markupPng.setAttributeNode(src.cloneNode(true))
markupPng.setAttributeNode(maxWidth.cloneNode(true))
markupPng.setAttributeNode(maxHeight.cloneNode(true))
markupPng.setAttributeNode(alt.cloneNode(true))

let markupSubtitle = document.createElement('p')
markupContent.appendChild(markupSubtitle)
markupSubtitle.className = ("markup-subtitle")
markupSubtitle.textContent = "Вся разметка написана при помощи переменных, createElement, createAttribute, className, textContent и appendChild. \n (Хорошим примером стал кусок кода картинки выше)."

let footer = document.createElement('footer')
body.appendChild(footer)

let footerContent = document.createElement('section')
footer.appendChild(footerContent)
footerContent.className = ("footer-content")

let footerTitle = document.createElement('h3')
footerContent.appendChild(footerTitle)
footerTitle.className = ("footer-title")
footerTitle.textContent = "ONLY JS"

let footerSubtitle = document.createElement('p')
footerContent.appendChild(footerSubtitle)
footerSubtitle.className = ('footer-subtitle')
footerSubtitle.textContent = 'Полезные ссылки'

let footerNav = document.createElement('nav')
footerContent.appendChild(footerNav)
footerNav.className = ('footer-nav')

let hrefAtt = document.createAttribute('href')

let githubLink = document.createElement('a')
footerNav.appendChild(githubLink)
githubLink.className = ('github-link')
githubLink.textContent = "Исходный код"
hrefAtt.value = 'https://github.com/jange4ik/onlyjs'
githubLink.setAttributeNode(hrefAtt.cloneNode(true))

let width = document.createAttribute('width')
let height = document.createAttribute ('height')

let githubPng = document.createElement('img')
githubLink.appendChild(githubPng)
src.value = 'assets/github.png'
width.value = "20px"
height.value = "20px"
githubPng.setAttributeNode(src.cloneNode(true))
githubPng.setAttributeNode(width.cloneNode(true))
githubPng.setAttributeNode(height.cloneNode(true))


let telegramLink = document.createElement('a')
footerNav.appendChild(telegramLink)
telegramLink.className = ('telegram-link')
telegramLink.textContent = "Мой ТГК"
hrefAtt.value = 'https://t.me/eternalcoding'
telegramLink.setAttributeNode(hrefAtt.cloneNode(true))

let telegramPng = document.createElement('img')
telegramLink.appendChild(telegramPng)
src.value = 'assets/telegram.png'
telegramPng.setAttributeNode(src.cloneNode(true))
telegramPng.setAttributeNode(width.cloneNode(true))
telegramPng.setAttributeNode(height.cloneNode(true))

let vkLink = document.createElement('a')
footerNav.appendChild(vkLink)
vkLink.className = ('vk-link')
vkLink.textContent = "Мой ВК"
hrefAtt.value = 'https://vk.com/8a6e5e4cfa774f4a8b9dae1288b0'
vkLink.setAttributeNode(hrefAtt.cloneNode(true))

let vkPng = document.createElement('img')
vkLink.appendChild(vkPng)
src.value = 'assets/vk.png'
vkPng.setAttributeNode(src.cloneNode(true))
vkPng.setAttributeNode(width.cloneNode(true))
vkPng.setAttributeNode(height.cloneNode(true))
