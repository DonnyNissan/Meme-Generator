'use strict'

function init() {
    renderGallery()
}

function renderGallery() {
    const imgs = getImgs()
    console.log('imgs : ', imgs)
    let strHTML = ''
    imgs.forEach(img => {
        strHTML += `<img onclick="onImgSelect(${img.id})" src="${img.url}" alt="Img${img.id}">`
    })
    const elGallery = document.querySelector('.img-gallery')
    elGallery.innerHTML = strHTML
}

function onImgSelect(imgIdx) {

    renderMeme(imgIdx)
    document.querySelector('.img-gallery').style.display = "none"
    document.querySelector('.canvas-container').style.display = "block"
    document.querySelector('.control-box').style.display = "grid"
}