basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (input.isGesture(Gesture.LogoDown)) {
        music.playTone(131, music.beat(BeatFraction.Whole))
    } else if (input.isGesture(Gesture.TiltLeft)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (input.isGesture(Gesture.TiltRight)) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
