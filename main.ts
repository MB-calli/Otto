function vorwärts () {
    pins.servoWritePin(AnalogPin.C5, 60)
    control.waitMicros(100)
    pins.servoWritePin(AnalogPin.P2, 110)
    pins.servoWritePin(AnalogPin.P1, 110)
    control.waitMicros(200)
    pins.servoWritePin(AnalogPin.C5, 90)
    control.waitMicros(100)
    pins.servoWritePin(AnalogPin.C6, 120)
    control.waitMicros(100)
    pins.servoWritePin(AnalogPin.P1, 60)
    pins.servoWritePin(AnalogPin.P2, 60)
    control.waitMicros(200)
    pins.servoWritePin(AnalogPin.C6, 90)
    control.waitMicros(100)
}
function hip () {
    pins.servoWritePin(AnalogPin.P1, 90)
    control.waitMicros(100)
    pins.servoWritePin(AnalogPin.P2, 90)
    control.waitMicros(100)
    pins.servoWritePin(AnalogPin.C5, 60)
    pins.servoWritePin(AnalogPin.C6, 120)
    control.waitMicros(400)
    pins.servoWritePin(AnalogPin.C5, 90)
    pins.servoWritePin(AnalogPin.C6, 90)
    control.waitMicros(400)
}
function rückwärts () {
    pins.servoWritePin(AnalogPin.C5, 60)
    control.waitMicros(100)
    pins.servoWritePin(AnalogPin.P2, 60)
    pins.servoWritePin(AnalogPin.P1, 60)
    control.waitMicros(200)
    pins.servoWritePin(AnalogPin.C5, 90)
    control.waitMicros(100)
    pins.servoWritePin(AnalogPin.C6, 120)
    control.waitMicros(100)
    pins.servoWritePin(AnalogPin.P1, 120)
    pins.servoWritePin(AnalogPin.P2, 120)
    control.waitMicros(200)
    pins.servoWritePin(AnalogPin.C6, 90)
    control.waitMicros(100)
}
function stehen () {
    pins.servoWritePin(AnalogPin.P1, 90)
    control.waitMicros(100)
    pins.servoWritePin(AnalogPin.P2, 90)
    control.waitMicros(100)
    pins.servoWritePin(AnalogPin.C5, 90)
    control.waitMicros(100)
    pins.servoWritePin(AnalogPin.C6, 90)
    control.waitMicros(100)
}
basic.clearScreen()
stehen()
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.C16) > 600) {
        vorwärts()
    } else if (pins.analogReadPin(AnalogPin.C16) < 400) {
        rückwärts()
    } else if (input.buttonIsPressed(Button.A)) {
        hip()
    }
})
