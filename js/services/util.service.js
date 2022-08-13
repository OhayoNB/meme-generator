'use strict'

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function getRandomMemeStr() {
  let memeStrs = [
    'Keep Calm and Carry On',
    'Are you entertained?',
    'Netflix and chill',
    'U mad bro?',
    'Fail',
    'Going to work',
    'This is Fine',
    'Change My Mind',
    'Yes, Please',
    'Woke up today',
    'It was terrible',
    'Here We Go Again',
    'Are you kidding me?',
    'I GOT THIS',
    'Just go',
  ]

  return memeStrs[getRandomIntInclusive(0, memeStrs.length - 1)]
}

function getRandomFont() {
  let memeFonts = ['impact', 'arial', 'david']

  return memeFonts[getRandomIntInclusive(0, memeFonts.length - 1)]
}
