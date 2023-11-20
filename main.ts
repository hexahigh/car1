radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        bitbot.goms(BBDirection.Forward, 60, 500)
    }
    if (receivedNumber == 1) {
        bitbot.rotatems(BBRobotDirection.Left, 60, 500)
    }
    if (receivedNumber == 2) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 500)
    }
    if (receivedNumber == 3) {
        bitbot.goms(BBDirection.Forward, 60, 250)
    }
})
input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.A) && modus == 0) {
        radio.sendNumber(1)
        modus = 1
    }
    if (input.buttonIsPressed(Button.A) && modus == 1) {
        radio.sendNumber(3)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.buttonIsPressed(Button.AB) && modus == 0) {
        radio.sendNumber(0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.B) && modus == 0) {
        radio.sendNumber(2)
    }
})
let modus = 0
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
radio.setGroup(101)
bitbot.select_model(BBModel.XL)
loops.everyInterval(500, function () {
    while (true) {
        if (0 > 0) {
        	
        }
    }
})
