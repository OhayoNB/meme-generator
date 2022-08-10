'use strict'

function renderMeme() {
  const img = new Image()
  img.src = './img/meme-imgs/1.jpg'
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  }
}
