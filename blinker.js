// Blinker - random LED patterns
basic.forever(() => {
    led.plot(Math.random(5), Math.random(5))
    led.unplot(Math.random(5), Math.random(5))
})
