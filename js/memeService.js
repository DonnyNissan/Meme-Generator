'use strict'


let gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'politics'] },
    { id: 2, url: 'img/2.jpg', keywords: ['cute', 'dog'] },
    { id: 3, url: 'img/3.jpg', keywords: ['cute', 'baby', 'dog'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'science'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'politics'] },
    { id: 11, url: 'img/11.jpg', keywords: ['guys', 'kissing'] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny'] },
    { id: 13, url: 'img/13.jpg', keywords: ['cheers', 'actor'] },
    { id: 14, url: 'img/14.jpg', keywords: ['matrix', 'actor'] },
    { id: 15, url: 'img/15.jpg', keywords: ['lord of the rings', 'actor'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'actor'] },
    { id: 17, url: 'img/17.jpg', keywords: ['politics'] },
    { id: 18, url: 'img/18.jpg', keywords: ['toy story'] }
]

let gKeywordSearchCountMap = {}

let gMeme = {
    selectedImgId: null,
    selectedLineIdx: null,
    lines: [
        {
            txt: null,
            size: 40,
            align: 'center',
            color: 'white'
        },
        {
            txt: null,
            size: 40,
            align: 'center',
            color: 'white'
        }
    ]
}

function drawImgFromLocal(idx) {
    const img = new Image()
    img.src = `img/${idx}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd
    }
}

function setTextLine(currLine, lineNum) {
    gMeme.lines[lineNum].txt = currLine.txt
    gMeme.lines[lineNum].size = currLine.size
    gMeme.lines[lineNum].align = currLine.align
    gMeme.lines[lineNum].color = currLine.color
    drawText(lineNum)
}

function clearText(lineNum) {
    gMeme.lines[lineNum].txt = ''
    renderMeme(gMeme.selectedImgId)
    gMeme.lines[0].txt = gMeme.lines[1].txt = null
}

function clearMeme() {
    gMeme = {
        selectedImgId: null,
        selectedLineIdx: null,
        lines: [
            {
                txt: null,
                size: 40,
                align: 'center',
                color: 'white'
            },
            {
                txt: null,
                size: 40,
                align: 'center',
                color: 'white'
            }
        ]
    }
}

function setSelectedImgId(imgId) {
    gMeme.selectedImgId = imgId
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}