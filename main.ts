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
let wooweeewooweee = 0
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
radio.setGroup(101)
bitbot.select_model(BBModel.XL)
bitbot.go(BBDirection.Forward, 60)
let weeewooweeewoo = 40
basic.forever(function () {
    if (wooweeewooweee == 0) {
        if (bitbot.readLight(BBLightSensor.Left) + bitbot.readLight(BBLightSensor.Right) > weeewooweeewoo) {
            if (bitbot.readLight(BBLightSensor.Left) > bitbot.readLight(BBLightSensor.Right)) {
                bitbot.rotate(BBRobotDirection.Left, 60)
            } else if (bitbot.readLight(BBLightSensor.Left) < bitbot.readLight(BBLightSensor.Right)) {
                bitbot.rotate(BBRobotDirection.Right, 60)
            }
        } else {
            bitbot.go(BBDirection.Forward, 60)
        }
    } else if (wooweeewooweee == 1) {
    	
    }
})
