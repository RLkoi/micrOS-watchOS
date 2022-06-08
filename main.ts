input.onPinPressed(TouchPin.P0, function () {
    while (!(input.isGesture(Gesture.LogoDown))) {
        if (input.compassHeading() == 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        if (input.compassHeading() < 180 && input.compassHeading() > 89) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # #
                . . . . .
                . . . . .
                `)
        }
        if (input.compassHeading() < 270 && input.compassHeading() > 179) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
        if (input.compassHeading() < 360 && input.compassHeading() > 269) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(Steps)
})
input.onGesture(Gesture.Shake, function () {
    Steps += 1
})
let Steps = 0
soundExpression.giggle.playUntilDone()
basic.showString("watchOS")
input.calibrateCompass()
Steps = 0
let Minite = 0
let time = 0
let Hour = 0
basic.showString("Set time")
while (!(input.pinIsPressed(TouchPin.P0))) {
    if (input.buttonIsPressed(Button.A)) {
        time += 1
        Hour += 1
        basic.showNumber(time)
    }
    if (input.buttonIsPressed(Button.B)) {
        time += 0.01
        Minite += 1
        basic.showNumber(time)
    }
}
basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        while (!(input.buttonIsPressed(Button.AB))) {
            basic.showNumber(time)
            basic.pause(100)
        }
    }
})
control.inBackground(function () {
    for (let index = 0; index < 1e+90; index++) {
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        Minite += 1
        time += 0.01
        if (Minite > 9) {
            time += 0.1
            time += -0.1
        }
        if (Minite > 59) {
            time += 1
            Hour += 1
            time += -0.6
        }
    }
})
