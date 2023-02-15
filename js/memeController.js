'use strict'

let gElCanvas
let gCtx
let gTextPos = 0

function renderMeme(imgIdx) {
    console.log('imgIdx : ', imgIdx)
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    // resizeCanvas()
    drawImgFromLocal(imgIdx)
}

function addTexts() {
    if (gTextPos === 0) addText((gElCanvas.width / 2), 50)
    else if (gTextPos === 1) addText((gElCanvas.width / 2), 350)
}

function addText(x, y) {
    const text = document.querySelector('.user-text').value
    console.log('text : ', text)
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    gTextPos++
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img'
}

function clearCanvas() {
    gCtx.fillStyle = '#ede5ff'
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}


    // function resizeCanvas() {
    //     const elContainer = document.querySelector('.canvas-container')
    //     gElCanvas.width = (elContainer.offsetWidth - 20)
    //     gElCanvas.height = (elContainer.offsetHeight - 20)
    // }
