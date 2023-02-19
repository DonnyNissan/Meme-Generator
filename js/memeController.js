'use strict'

let gElCanvas
let gCtx

function setCanvas() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function renderMeme() {
    const meme = getMeme()
    drawImgFromLocal(meme)
    console.log('meme : ', meme)
}

function drawImgFromLocal(meme) {
    const img = new Image()
    img.src = `img/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd
        drawLines(meme.lines)
    }
}

function drawLines(lines) {
    console.log('lines : ', lines)
    lines.forEach((line, idx) => {
        if (idx === 0) {
            line.pos.x = gElCanvas.width / 2
            line.pos.y = 50
        } else if (idx === 1) {
            line.pos.x = gElCanvas.width / 2
            line.pos.y = gElCanvas.height - 50
        }
        // } else {
        //     line.pos.x = gElCanvas.width / 2
        //     line.pos.y = (meme.lines[idx - 1].pos.y + meme.lines[idx - 2].pos.y) / 2
        // }
        console.log('line : ', line)
        drawLine(line)
    })
}

function drawLine(line) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.textAlign = line.align
    gCtx.textBaseline = 'middle'
    gCtx.fillText(line.txt, line.pos.x, line.pos.y)
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
}

function onEnteringTxt(txt) {
    setLineText(txt)
    renderMeme()
}

function onSwitchLines() {
    switchLines()
    const meme = getMeme()
    const txt = meme.lines[meme.selectedLineIdx].txt
    const elTxtInput = document.querySelector('.text-input')
    elTxtInput.value = txt
    elTxtInput.focus()
    renderMeme()
}

function onAddTextLine() {
    const lines = getMeme().lines
    if (lines.length > 1) return
    const elTxtInput = document.querySelector('.text-input')
    elTxtInput.value = ''
    elTxtInput.focus()
    addTxtLine()
    setSelectedLineIdx(lines.length - 1)
    renderMeme()
}

function onSetFont(val) {
    setFont(val)
    renderMeme()
}

function onSetAlign(val) {
    setAlign(val)
    renderMeme()
}

// function onGenerateMeme() {
//     const idx = getRandomInt(1, 18)
//     gCurrLine.txt = 'Random Text'
//     onImgSelect(idx)
// }

function onChangeColor(color) {
    changeColor(color)
    renderMeme()
}

function onChangeFontSize(diff) {
    changeFontSize(diff)
    renderMeme()
}

// function onClearText() {
//     clearText()
// }


function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img'
}

function clearCanvas() {
    gCtx.fillStyle = '#ede5ff'
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

