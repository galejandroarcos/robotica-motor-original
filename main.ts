input.onButtonPressed(Button.A, function () {
    adelante()
})
function derecha () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showIcon(IconNames.Giraffe)
}
function parada () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showIcon(IconNames.Rabbit)
}
function adelante () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showArrow(ArrowNames.North)
}
input.onButtonPressed(Button.AB, function () {
    parada()
})
input.onButtonPressed(Button.B, function () {
    adelante()
    basic.pause(1000)
    basic.pause(500)
    basic.pause(500)
    basic.pause(1000)
    adelante()
    basic.pause(1000)
    adelante()
    basic.pause(1000)
    parada()
    derecha()
    basic.pause(500)
    izquierda()
    basic.pause(500)
})
function izquierda () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showIcon(IconNames.Chessboard)
}
