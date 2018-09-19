// Pong - simple "tennis" game

while (true) {
    for (let i = 0; i <= 4; i = i + 1) {
        basic.pause(100);
        led.plot(i, 2);
        basic.pause(100);
        led.unplot(i - 1, 2);
    }
    for (let i = 4; i >= 0; i = i - 1) {
        basic.pause(100);
        led.plot(i, 2);
        basic.pause(100);
        led.unplot(i + 1, 2);
    }
}
