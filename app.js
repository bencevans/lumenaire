const screenshot = require('screenshot-desktop')
const pify = require('pify')
const pixelAverage = require('pixel-average')
const brightness = require('brightness')

function updateBrightness() {
  screenshot()
  .then((img) => {
    return pify(pixelAverage)(img)
  })
  .then((avgs) => {
    let imgBrightness = avgs.brightness / 255
    let newLevel = 0.4 + ((1 - imgBrightness) * 0.6)
    return brightness.set(newLevel)
  })
  .then(() => {
    console.log('Brightness Updated!')
  })
  .catch((err) => {
    console.error('OH NO: ', err)
  })
}

setInterval(updateBrightness, 500)