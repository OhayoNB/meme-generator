'use strict'

const gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [
  { id: 1, url: './img/meme-imgs/1.jpg', keywords: ['president', 'cat'] },
  { id: 2, url: './img/meme-imgs/2.jpg', keywords: ['president', 'cat'] },
]
var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 30,
      align: 'left',
      color: 'white',
      posY: 50,
    },
    {
      txt: 'I sometimes eat Shnitzel',
      size: 30,
      align: 'left',
      color: 'white',
      posY: 450,
    },
  ],
}

function getMeme() {
  return gMeme
}

function getMemesImgs() {
  return gImgs
}

function setImg(id) {
  gMeme.selectedImgId = id
}

function setLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setLineColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setLineSize(size) {
  gMeme.lines[gMeme.selectedLineIdx].size += size
}

function switchLine() {
  const lineIdx = gMeme.selectedLineIdx
  if (lineIdx >= gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
  else gMeme.selectedLineIdx++
}
