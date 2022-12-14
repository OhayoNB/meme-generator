'use strict'

function renderMeme(func = null) {
  const meme = getMeme()
  const lines = meme.lines
  const img = new Image()
  img.src = `./img/meme-imgs/${meme.selectedImgId}.jpg`
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(lines, func)
  }
}

function drawText(lines, func = null) {
  lines.forEach((line, idx) => {
    let posY
    if (idx === 0) posY = gElCanvas.height / 10
    else if (idx === 1) posY = gElCanvas.height - 50
    else if (idx > 1) posY = gElCanvas.height / 2

    let posX
    if (line.align === 'center') {
      posX = gElCanvas.width / 2
    } else if (line.align === 'left') {
      posX = 10
    } else {
      posX = gElCanvas.width - 10
    }

    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = line.align
    gCtx.lineWidth = 1
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = 'black'
    gCtx.fillText(line.txt, posX, posY + line.lineChangeY)
    gCtx.strokeText(line.txt, posX, posY + line.lineChangeY)
    gCtx.closePath()
    if (getMeme().selectedLineIdx === idx) {
      drawRect(posY)
    }
  })

  if (func) func(gElCanvas.toDataURL('image/jpeg'))
}

function drawRect(y) {
  gCtx.beginPath()
  gCtx.rect(10, y - 30, gElCanvas.width - 20, 60)
  gCtx.strokeStyle = '#ff7f00'
  gCtx.stroke()
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

function onSwitchLine() {
  switchLine()
  changeTextInput()
  changeFontSelect()
  renderMeme()
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
  renderMeme()
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

function resizeCanvas() {
  let widths = [0, 520, 800]
  let elCanvas = document.querySelector('canvas')
  if (window.innerWidth >= widths[0] && window.innerWidth < widths[1]) {
    elCanvas.height = 350
    elCanvas.width = 350
    renderMeme()
  } else if (window.innerWidth >= widths[1] && window.innerWidth < widths[2]) {
    elCanvas.height = 400
    elCanvas.width = 400
    renderMeme()
  } else {
    elCanvas.height = 450
    elCanvas.width = 450
    renderMeme()
  }
}

function onDownloadMeme() {
  const selectedMemeLine = gMeme.selectedLineIdx
  const elDownload = document.querySelector('.download-meme')

  removeSelectedLine()
  renderMeme(downloadMeme)

  function downloadMeme(memeImg) {
    elDownload.href = memeImg
    elDownload.click()
    gMeme.selectedLineIdx = selectedMemeLine
    renderMeme()
  }
}

function onUploadMeme() {
  uploadMeme()
}

function onRandomMeme() {
  generateRandomMeme()
  renderEditor()
  renderMeme()
}
