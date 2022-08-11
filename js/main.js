'use strict'

let gElCanvas
let gCtx

function init() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

  resizeCanvas()
  addListeners()
  renderGallery()
  renderMeme()
}

function addListeners() {
  window.addEventListener('resize', () => {
    resizeCanvas()
  })
}
