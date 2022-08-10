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
  renderEditor()
}

function renderEditor() {
  const elEditor = document.querySelector('.editor-section')
  const elGallery = document.querySelector('.gallery-section')
  const elAbout = document.querySelector('.about-section')

  elEditor.style.display = 'flex'
  elGallery.style.display = 'none'
  elAbout.style.display = 'none'
}
