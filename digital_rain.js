// DigitalRain - Matrix-style

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
        basic.pause(500 / speed);
    }
}

function animateRaindrops(x: number) {
    basic.pause(Math.random(4) * 200 + 200);
    while (1) {
        let length = Math.random(6) + 2;
        let speed = Math.random(4) + 1;
        animateRaindrop(x, length, speed);
        // basic.pause(Math.random(4) * 100 + 200);
    }
}

function animateRaindrops_0() { animateRaindrops(0) }
function animateRaindrops_1() { animateRaindrops(1) }
function animateRaindrops_2() { animateRaindrops(2) }
function animateRaindrops_3() { animateRaindrops(3) }
function animateRaindrops_4() { animateRaindrops(4) }

basic.clearScreen()

// drop rain!
control.inBackground(animateRaindrops_0);
control.inBackground(animateRaindrops_1);
control.inBackground(animateRaindrops_2);
control.inBackground(animateRaindrops_3);
control.inBackground(animateRaindrops_4);
