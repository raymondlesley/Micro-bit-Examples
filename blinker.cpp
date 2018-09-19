// Blinker - random LED patterns
#include "MicroBit.h"

MicroBit uBit;
// MicroBitDisplay display;

int main()
{
    uBit.seedRandom();
    int start = uBit.systemTime();
    for (int i = 0; i < 100000; i++) {
        uBit.display.image.setPixelValue(uBit.random(5), uBit.random(5), uBit.random(256));
        uBit.display.image.setPixelValue(uBit.random(5), uBit.random(5), 0);
    }
    int end = uBit.systemTime();
    while (1) {
        uBit.display.clear();
        uBit.display.scroll(end-start);
        uBit.sleep(1000);
    }
    // 5595 - 5609
}