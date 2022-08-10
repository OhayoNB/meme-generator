'use strict'

const gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
const gImgs = [
  { id: 1, url: './img/meme-imgs/1.jpg', keywords: ['president'] },
  { id: 2, url: './img/meme-imgs/2.jpg', keywords: ['dog', 'baby'] },
  { id: 3, url: './img/meme-imgs/3.jpg', keywords: ['dog', 'baby'] },
  { id: 4, url: './img/meme-imgs/4.jpg', keywords: ['cat', 'computer'] },
  { id: 5, url: './img/meme-imgs/5.jpg', keywords: ['baby', 'fist'] },
  { id: 6, url: './img/meme-imgs/6.jpg', keywords: ['suit', 'man'] },
  { id: 7, url: './img/meme-imgs/7.jpg', keywords: ['surprised', 'baby'] },
  { id: 8, url: './img/meme-imgs/8.jpg', keywords: ['magician'] },
  { id: 9, url: './img/meme-imgs/9.jpg', keywords: ['baby', 'laughing'] },
  {
    id: 10,
    url: './img/meme-imgs/10.jpg',
    keywords: ['president', 'laughing'],
  },
  { id: 11, url: './img/meme-imgs/11.jpg', keywords: ['kiss', 'wrestling'] },
  { id: 12, url: './img/meme-imgs/12.jpg', keywords: ['haim', 'tv'] },
  { id: 13, url: './img/meme-imgs/13.jpg', keywords: ['actor', 'tv'] },
  { id: 14, url: './img/meme-imgs/14.jpg', keywords: ['actor', 'tv'] },
  { id: 15, url: './img/meme-imgs/15.jpg', keywords: ['actor', 'tv'] },
  { id: 16, url: './img/meme-imgs/16.jpg', keywords: ['actor', 'tv'] },
  { id: 17, url: './img/meme-imgs/17.jpg', keywords: ['president'] },
  { id: 18, url: './img/meme-imgs/18.jpg', keywords: ['toystory', 'tv'] },
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
