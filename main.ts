function vorwärtz () {
    pins.servoWritePin(AnalogPin.C5, 60)
    control.waitMicros(100000)
    pins.servoWritePin(AnalogPin.P2, 110)
    pins.servoWritePin(AnalogPin.P1, 110)
}
basic.forever(function () {
	
})
