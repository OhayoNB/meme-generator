'use strict'

function renderMeme() {
  const meme = getMeme()
  const lines = meme.lines
  console.log(`lines:`, lines)
  const img = new Image()
  img.src = `./img/meme-imgs/${meme.selectedImgId}.jpg`
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(lines)
  }
}

function drawText(lines) {
  lines.forEach((line, idx) => {
    let posY
    if (idx === 0) posY = gElCanvas.height / 10
    else if (idx === 1) posY = gElCanvas.height - 50
    else if (idx > 1) posY = gElCanvas.height / 2
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = 'center'
    gCtx.lineWidth = 1
    gCtx.font = `${line.size}px impact`
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = 'black'
    gCtx.fillText(line.txt, 250, posY)
    gCtx.strokeText(line.txt, 250, posY)
    gCtx.closePath()
  })
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

function onSwitchLine() {
  switchLine()
  changeTextInput()
}

function onAddLine(el) {
  if (gMeme.lines.length >= 3) {
    el.style.backgroundColor = 'red'
    setTimeout(() => {
      el.style.backgroundColor = 'white'
    }, 250)
    return
  }

  addLine()
  changeTextInput()
}

function onRemoveLine(el) {
  const meme = getMeme()
  if (meme.selectedLineIdx === 0) {
    el.style.backgroundColor = 'red'
    setTimeout(() => {
      el.style.backgroundColor = 'white'
    }, 250)
    return
  }

  removeLine()
  renderMeme()
  changeTextInput()
}

function changeTextInput() {
  const meme = getMeme()
  const elTxtInput = document.querySelector('#text-input')
  elTxtInput.value = meme.lines[meme.selectedLineIdx].txt
}
