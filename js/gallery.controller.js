'use strict'

function renderGallery() {
  const imgs = getMemesImgs()

  const imgsHTML = imgs.map(
    (img) => `<img src="${img.url}" onclick="onImgSelect(${img.id})" />`
  )

  const elGallery = document.querySelector('.gallery-section')
  elGallery.innerHTML = imgsHTML.join('')

  const elEditor = document.querySelector('.editor-section')
  const elAbout = document.querySelector('.about-section')

  elEditor.style.display = 'none'
  elAbout.style.display = 'flex'
  elGallery.style.display = 'grid'
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
  const elTxtInput = document.querySelector('#text-input')
  console.log(elTxtInput)
  const meme = getMeme()

  elTxtInput.value = meme.lines[0].txt
  elEditor.style.display = 'flex'
  elGallery.style.display = 'none'
  elAbout.style.display = 'none'
}
