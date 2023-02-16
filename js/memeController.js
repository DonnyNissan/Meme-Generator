'use strict'

let gElCanvas
let gCtx
let gLineNum = 0
let gCurrLine = {
    txt: null,
    size: 40,
    align: 'center',
    color: 'white',
}

function renderMeme(imgIdx) {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    drawImgFromLocal(imgIdx)
    drawText(0)
    drawText(1)
}

function onAddText() {
    const meme = getMeme()
    if (meme.lines[gLineNum].txt) return
    gCurrLine.txt = document.querySelector('.user-text').value
    setTextLine(gCurrLine, gLineNum)
}

function drawText(lineNum) {
    const line = getMeme().lines[lineNum]
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    const y = (lineNum) ? 350 : 50
    const x = gElCanvas.width / 2
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
}

function onGenerateMeme() {
    const idx = getRandomInt(1, 18)
    gCurrLine.txt = 'Random Text'
    onImgSelect(idx)
}

function onChangeColor(color) {
    gCurrLine.color = color
}

function onChangeFontSize(diff) {
    gCurrLine.size += diff
    document.querySelector('.text-size span').innerText = gCurrLine.size
}

function onChangeAlign(align) {
    gCurrLine.align = align
}

function onClearText() {
    clearText(gLineNum)
}

function onSwitchLines() {
    if (gLineNum) gLineNum = 0
    else gLineNum = 1
    const line = (gLineNum) ? 'Bottom' : 'Top'
    document.querySelector('.choose-line span').innerText = line
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
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }
