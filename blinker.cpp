// Blinker - random LED patterns
#include "MicroBit.h"

MicroBit uBit;

int main()
{
    uBit.seedRandom(time(NULL));
    while(1) {
        uBit.display.image.setPixelValue(uBit.random(5), uBit.random(5), uBit.random(256));
        uBit.display.image.setPixelValue(uBit.random(5), uBit.random(5), 0);
    }
}