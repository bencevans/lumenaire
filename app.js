const screenshot = require('screenshot-desktop')
const pify = require('pify')
const pixelAverage = require('pixel-average')
const brightness = require('brightness')
const ActiveAppWatcher = require('active-app-watcher')
const activeAppWatcher = new ActiveAppWatcher()

const minBrightness = 0
const maxBrightness = 0.4


function updateBrightness() {
  screenshot()
  .then((img) => {
    return pify(pixelAverage)(img)
  })
  .then((avgs) => {
    let imgBrightness = avgs.brightness / 255
    let newLevel = ((1 - imgBrightness) * (maxBrightness - minBrightness)) - minBrightness
    return brightness.set(newLevel)
  })
  .then(() => {
    console.log('Brightness Updated!')
  })
  .catch((err) => {
    console.error('OH NO: ', err)
  })
}

activeAppWatcher.on('change', (a) => {
  updateBrightness()
})

activeAppWatcher.start()
