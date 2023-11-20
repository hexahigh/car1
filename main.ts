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
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
radio.setGroup(101)
