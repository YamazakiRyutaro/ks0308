input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P1, 500)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
})
pins.digitalWritePin(DigitalPin.P14, 1)
led.enable(false)
