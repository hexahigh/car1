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
    	
    }
})
input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.A) && modus == 0) {
        radio.sendNumber(1)
        telle_opp += 1
    }
    if (input.buttonIsPressed(Button.A) && modus == 1) {
        radio.sendNumber(4)
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
let telle_opp = 0
let modus = 0
let wooweeewooweee = 0
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
radio.setGroup(101)
bitbot.select_model(BBModel.XL)
bitbot.go(BBDirection.Forward, 60)
let weeewooweeewoo = 40
modus = 0
loops.everyInterval(500, function () {
    if (telle_opp < 2 && modus == 0) {
        telle_opp += -1
    }
    if (telle_opp == 2 && modus == 0) {
        modus = 1
    }
    if (telle_opp > 2 && modus == 0) {
        telle_opp = 2
    }
})
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
