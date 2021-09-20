input.onButtonPressed(Button.A, function () {
    Entery = "" + Entery + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (password == Entery) {
        basic.showIcon(IconNames.Yes)
        basic.showString("YOU MAY ENTER.")
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        radio.sendString("DANGER")
        music.playMelody("F E F E F F E F ", 120)
        basic.pause(5000)
        music.stopAllSounds()
        basic.clearScreen()
    }
    basic.pause(100)
    Entery = ""
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "DANGER") {
        music.playMelody("F E F E F F E F ", 120)
        basic.pause(5000)
        music.stopAllSounds()
    } else {
        music.stopAllSounds()
    }
})
input.onButtonPressed(Button.B, function () {
    Entery = "" + Entery + "B"
})
let Entery = ""
let password = ""
password = "ABBAB"
Entery = ""
radio.setGroup(255)
basic.forever(function () {
    basic.pause(10000)
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.checkFace()) {
        basic.showString("please enter password on the board with the A and  B buttons. ")
    }
})
