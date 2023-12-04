radio.onReceivedNumber(function (receivedNumber) {
    isCar = 1
    if (receivedNumber == 0) {
        bitbot.goms(BBDirection.Forward, 60, 500)
    }
    if (receivedNumber == 1) {
        bitbot.rotatems(BBRobotDirection.Left, 60, 100)
    }
    if (receivedNumber == 2) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 100)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
let isCar = 0
isCar = 0
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
radio.setGroup(101)
bitbot.select_model(BBModel.XL)
basic.forever(function () {
    if (isCar == 1) {
        led.toggle(randint(0, 4), randint(0, 4))
    }
})
