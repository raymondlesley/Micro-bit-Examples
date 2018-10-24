// DigitalRain - Matrix-style
#include "MicroBit.h"

MicroBit uBit;

void draw_raindrop(int x, int y, int length) {
    // raindrop + tail
    for (int pos = 0; pos < length; pos++) {
        int ypos = y - pos;
        if ((ypos < 5) && (ypos >= 0)) {
            int bright = (length - ypos) * 256 / length - 1;
            uBit.display.image.setPixelValue(x, ypos, bright);
        }
    }
    // whitespace after ...
    for (int ypos = y - length; ypos >= 0; ypos--) {
        uBit.display.image.setPixelValue(x, ypos, 0);
    }
}

void animate_raindrop(int x, int length, int speed) {
    for (int head = 0; head < length + 5; head++) {
        draw_raindrop(x, head, length);
        uBit.sleep(500 / speed);
    }
}

void animate_raindrops(int x) {
    uBit.sleep(uBit.random(4) * 200 + 200);
    while (1) {
        int length = uBit.random(6) + 2;
        int speed = uBit.random(4) + 1;
        animate_raindrop(x, length, speed);
        // uBit.sleep(uBit.random(4) * 100 + 200);
    }
}

void animate_raindrops_0() { animate_raindrops(0); }
void animate_raindrops_1() { animate_raindrops(1); }
void animate_raindrops_2() { animate_raindrops(2); }
void animate_raindrops_3() { animate_raindrops(3); }
void animate_raindrops_4() { animate_raindrops(4); }

int main()
{
    // Initialise the micro:bit runtime.
    uBit.init();
    uBit.display.setDisplayMode(DISPLAY_MODE_GREYSCALE); //per pixel brightness
    
    create_fiber(animate_raindrops_0);
    create_fiber(animate_raindrops_1);
    create_fiber(animate_raindrops_2);
    create_fiber(animate_raindrops_3);
    create_fiber(animate_raindrops_4);

    // If main exits, there may still be other fibers running or registered event handlers etc.
    // Simply release this fiber, which will mean we enter the scheduler. Worse case, we then
    // sit in the idle task forever, in a power efficient sleep.
    release_fiber();
}
