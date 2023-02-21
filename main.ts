let Steps = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1000) {
        Steps += 1
        basic.showNumber(Steps)
    }
})
