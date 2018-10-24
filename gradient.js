// Gradient - display a grariend pattern

for (let row = 0; row <= 4; row++) {
    for (let col = 0; col <= 4; col++) {
        led.plotBrightness(col, row, (col + row) * 32)
        // basic.pause(500)
    }
}
