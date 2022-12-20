setTimeout(() => {
    let body = document.querySelector('body')
    let scriptJS = document.createElement('script')
    let src = document.createAttribute('src')
    src.value = "js/markup.js"
    scriptJS.setAttributeNode(src.cloneNode(true))
    body.appendChild(scriptJS)
}, 1);