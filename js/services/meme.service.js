'use strict'

let gFilterBy = ''
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
  { id: 10, url: './img/meme-imgs/10.jpg', keywords: ['president'] },
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
      txt: 'Type Text Here',
      size: 35,
      align: 'center',
      color: 'white',
      posY: 50,
      lineChangeY: 0,
      font: 'impact',
    },
  ],
}

function getMeme() {
  return gMeme
}

function getMemesImgsForDisplay() {
  const memesImgs = gImgs.filter((image) =>
    image.keywords.some((keyword) =>
      keyword.toLowerCase().includes(gFilterBy.toLowerCase())
    )
  )

  return memesImgs
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

function addLine() {
  const newLine = {
    txt: '',
    size: 30,
    align: 'center',
    color: 'white',
    lineChangeY: 0,
    font: 'impact',
  }
  gMeme.lines.push(newLine)
  gMeme.selectedLineIdx++
}

function removeLine() {
  const meme = getMeme()
  const selectedLine = meme.selectedLineIdx

  meme.lines.splice(selectedLine, 1)
  meme.selectedLineIdx--
}

function alignLeft() {
  gMeme.lines[gMeme.selectedLineIdx].align = 'left'
}

function alignCenter() {
  gMeme.lines[gMeme.selectedLineIdx].align = 'center'
}

function alignRight() {
  gMeme.lines[gMeme.selectedLineIdx].align = 'right'
}

function lineUp(value) {
  gMeme.lines[gMeme.selectedLineIdx].lineChangeY += value
}

function lineDown(value) {
  gMeme.lines[gMeme.selectedLineIdx].lineChangeY += value
}

function setLineFont(font) {
  gMeme.lines[gMeme.selectedLineIdx].font = font
}

function removeSelectedLine() {
  gMeme.selectedLineIdx = null
}

function downloadMeme(el) {
  const data = gElCanvas.toDataURL()
  el.href = data
}

function uploadMeme() {
  const imgDataUrl = gElCanvas.toDataURL('image/jpeg')

  function onSuccess(uploadedImgUrl) {
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)

    let elShareBtn = document.querySelector('.share-btn-container')
    let elGoThereBtn = document.querySelector('.go-there-btn-container')
    elShareBtn.innerHTML = `
    <a class="flex align-center justify-center" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
       Share
    </a>`
    elGoThereBtn.innerHTML = `
    <a class="flex align-center justify-center" href="${uploadedImgUrl}" target="_blank">
       Go There
    </a>
    `

    elShareBtn.style.display = 'block'
    elGoThereBtn.style.display = 'block'
  }
  doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
  const formData = new FormData()
  formData.append('img', imgDataUrl)

  fetch('//ca-upload.com/here/upload.php', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.text())
    .then((url) => {
      onSuccess(url)
    })
    .catch((err) => {
      console.error(err)
    })
}

function setMemeFilter(filterBy) {
  if (filterBy !== undefined) gFilterBy = filterBy
}

function generateRandomMeme() {
  let randomImg = getRandomIntInclusive(1, gImgs.length)
  let lines = []

  lines.push({
    txt: getRandomMemeStr(),
    size: getRandomIntInclusive(30, 50),
    align: 'center',
    color: getRandomColor(),
    posY: 50,
    lineChangeY: 0,
    font: getRandomFont(),
  })

  if (getRandomIntInclusive(0, 1)) {
    lines.push({
      txt: getRandomMemeStr(),
      size: getRandomIntInclusive(30, 50),
      align: 'center',
      color: getRandomColor(),
      posY: 50,
      lineChangeY: 0,
      font: getRandomFont(),
    })
  }

  gMeme = {
    selectedImgId: randomImg,
    selectedLineIdx: 0,
    lines,
  }
}

function setDefaultMeme(imgId) {
  gMeme = {
    selectedImgId: imgId,
    selectedLineIdx: 0,
    lines: [
      {
        txt: 'Type Text Here',
        size: 35,
        align: 'center',
        color: 'white',
        posY: 50,
        lineChangeY: 0,
        font: 'impact',
      },
    ],
  }
}
