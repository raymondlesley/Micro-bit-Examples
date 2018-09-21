// DigitalRain - Matrix-style

basic.clearScreen()

function drawRaindrop(x: number, y: number, length: number) {
    // raindrop + tail
    for (let pos = 0; pos < length; pos++) {
        let ypos = y - pos;
        if ((ypos < 5) && (ypos >= 0)) {
            let bright = (length - pos) * 256 / length - 1;
            led.plotBrightness(x, ypos, bright);
        }
    }
    // whitespace after ...
    for (let ypos = y - length; ypos >= 0; ypos--) {
        led.unplot(x, ypos);
    }
}

function animateRaindrop(x: number, length: number, speed: number) {
    for (let head = 0; head < length + 5; head++) {
        drawRaindrop(x, head, length);
        basic.pause(1000 / speed);
    }
}

function animateRaindrops(x: number) {
    while (1) {
        let length = Math.random(6) + 2;
        let speed = Math.random(4) + 1;
        animateRaindrop(x, length, speed);
        // basic.pause(Math.random(4) * 100 + 200);
    }
}

// drop rain!
control.inBackground(() => {
    animateRaindrops(0);
})
control.inBackground(() => {
    animateRaindrops(1);
})
control.inBackground(() => {
    animateRaindrops(2);
})
control.inBackground(() => {
    animateRaindrops(3);
})
control.inBackground(() => {
    animateRaindrops(4);
})
