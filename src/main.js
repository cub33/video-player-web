
const options = {
  aspectRatio: '16:9'
}
 
const player = videojs('player', options, function onPlayerReady() {
  videojs.log('Player is ready')
  this.play()
})

player.hlsQualitySelector = require("videojs-hls-quality-selector")
player.hlsQualitySelector({
  displayCurrentQuality: true,
})
