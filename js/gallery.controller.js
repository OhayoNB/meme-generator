'use strict'

function renderGallery() {
  const imgs = getMemesImgs()

  const imgsHTML = imgs.map(
    (img) => `<img src="${img.url}" onclick="onImgSelect(${img.id})" />`
  )

  const elGallery = document.querySelector('.gallery-section')
  elGallery.innerHTML = imgsHTML.join('')
}

function onImgSelect(id) {
  setImg(id)
  renderMeme()
}
