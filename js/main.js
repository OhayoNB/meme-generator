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

function toggleMenu() {
  document
    .querySelector('.main-nav-list')
    .classList.toggle('mobile-menu-height')

  document.querySelector('.hamburger').classList.toggle('change')
}
