input.onButtonPressed(Button.A, function () {
    cnt += 1
    basic.showNumber(cnt)
})
input.onButtonPressed(Button.AB, function () {
    cnt = 0
    basic.showNumber(cnt)
})
input.onButtonPressed(Button.B, function () {
    cnt += -1
    basic.showNumber(cnt)
})
let cnt = 0
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.showNumber(0)
