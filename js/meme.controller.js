'use strict'

function renderMeme() {
  const meme = getMeme()
  const lines = meme.lines
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
    gCtx.textAlign = line.align
    gCtx.lineWidth = 1
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = 'black'
    console.log(`gElCanvas.width / 2:`, gElCanvas.width / 2)
    gCtx.fillText(line.txt, gElCanvas.width / 2, posY + line.lineChangeY)
    gCtx.strokeText(line.txt, gElCanvas.width / 2, posY + line.lineChangeY)
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
  changeFontSelect()
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
  changeFontSelect()
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
  changeFontSelect()
}

function onChangeAlignLeft() {
  alignLeft()
  renderMeme()
}

function onChangeAlignCenter() {
  alignCenter()
  renderMeme()
}

function onChangeAlignRight() {
  alignRight()
  renderMeme()
}

function onChangeLineUp(value) {
  lineUp(value)
  renderMeme()
}

function onChangeLineDown(value) {
  lineDown(value)
  renderMeme()
}

function onChangeLineFont(font) {
  setLineFont(font)
  renderMeme()
}

function changeTextInput() {
  const meme = getMeme()
  const elTxtInput = document.querySelector('#text-input')
  elTxtInput.value = meme.lines[meme.selectedLineIdx].txt
}

function changeFontSelect() {
  const meme = getMeme()
  const elFontSelect = document.querySelector('#fonts-select')
  elFontSelect.value = meme.lines[meme.selectedLineIdx].font
}
