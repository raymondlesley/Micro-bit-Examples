// Blinker - random LED patterns

let start = input.runningTime()
for (let i = 0; i < 100000; i++) {
    led.plotBrightness(Math.random(5), Math.random(5), Math.random(256))
    led.unplot(Math.random(5), Math.random(5))
}
let end = input.runningTime()
while (1) {
    basic.clearScreen()
    basic.showNumber(end - start)
    basic.pause(1000)
}
// 8344 - 8348