'use strict'

function renderMeme() {
  const meme = getMeme()
  const { txt, size, color } = meme.lines[0]
  const img = new Image()
  img.src = `./img/meme-imgs/${meme.selectedImgId}.jpg`
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(txt, size, color, 250, 50)
  }
}

function drawText(txt, size, color, x, y) {
  gCtx.beginPath()
  gCtx.textBaseline = 'middle'
  gCtx.textAlign = 'center'
  gCtx.lineWidth = 1
  gCtx.font = `${size}px impact`
  gCtx.fillStyle = color
  gCtx.strokeStyle = 'black'
  gCtx.fillText(txt, x, y)
  gCtx.strokeText(txt, x, y)
  gCtx.closePath()
}

function onChangeLineTxt(txt) {
  setLineTxt(txt)
  renderMeme()
}

function onChangeLineColor(color) {
  setLineColor(color)
  renderMeme()
}

function onChangeLineSize(size) {
  setLineSize(size)
  renderMeme()
}
