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
      color: 'red',
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
  gMeme.lines[0].txt = txt
}

function setLineColor(color) {
  gMeme.lines[0].color = color
}

function setLineSize(size) {
  gMeme.lines[0].size += size
}
