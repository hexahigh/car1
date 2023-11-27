def on_received_number(receivedNumber):
    if receivedNumber == 0:
        bitbot.goms(BBDirection.FORWARD, 60, 500)
    if receivedNumber == 1:
        bitbot.rotatems(BBRobotDirection.LEFT, 60, 100)
    if receivedNumber == 2:
        bitbot.rotatems(BBRobotDirection.RIGHT, 60, 100)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(1)
    basic.show_leds("""
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        """)
    basic.pause(100)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_number(0)
    basic.show_leds("""
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        """)
    basic.pause(100)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    radio.send_number(2)
    basic.show_leds("""
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        """)
    basic.pause(100)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

bitbot.bb_enable_bluetooth(BBBluetooth.BT_ENABLE)
radio.set_group(101)
bitbot.select_model(BBModel.XL)