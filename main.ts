function vorwärts () {
    pins.servoWritePin(AnalogPin.C5, 60)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.P2, 110)
    pins.servoWritePin(AnalogPin.P1, 110)
    control.waitMicros(Servodelay)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.C5, 90)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.C6, 120)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.P1, 60)
    pins.servoWritePin(AnalogPin.P2, 60)
    control.waitMicros(Servodelay)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.C6, 90)
    control.waitMicros(Servodelay)
}
function hip () {
    pins.servoWritePin(AnalogPin.P1, 90)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.P2, 90)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.C5, 60)
    pins.servoWritePin(AnalogPin.C6, 120)
    control.waitMicros(400000)
    pins.servoWritePin(AnalogPin.C5, 90)
    pins.servoWritePin(AnalogPin.C6, 90)
    control.waitMicros(400000)
}
function rückwärts () {
    pins.servoWritePin(AnalogPin.C5, 60)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.P2, 60)
    pins.servoWritePin(AnalogPin.P1, 60)
    control.waitMicros(Servodelay)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.C5, 90)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.C6, 120)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.P1, 120)
    pins.servoWritePin(AnalogPin.P2, 120)
    control.waitMicros(Servodelay)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.C6, 90)
    control.waitMicros(Servodelay)
}
function stehen () {
    pins.servoWritePin(AnalogPin.P1, 90)
    control.waitMicros(Servodelay)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.P2, 90)
    control.waitMicros(Servodelay)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.C5, 90)
    control.waitMicros(Servodelay)
    control.waitMicros(Servodelay)
    pins.servoWritePin(AnalogPin.C6, 90)
    control.waitMicros(Servodelay)
    control.waitMicros(Servodelay)
}
let Servodelay = 0
led.enable(false)
Servodelay = 120000
stehen()
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.C17) > 600) {
        vorwärts()
    } else if (pins.analogReadPin(AnalogPin.C17) < 400) {
        rückwärts()
    } else if (input.buttonIsPressed(Button.A)) {
        hip()
    }
})
