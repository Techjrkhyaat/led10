input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    music.setVolume(255)
    basic.pause(1000)
})
basic.forever(function () {
	
})
