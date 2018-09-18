from microbit import *

ALL_IMAGES = [
    Image.ANGRY,
    Image.ARROW_N,
    Image.ARROW_NE,
    Image.ARROW_E,
    Image.ARROW_SE,
    Image.ARROW_S,
    Image.ARROW_SW,
    Image.ARROW_W,
    Image.ARROW_NW,
    Image.ASLEEP,
    Image.BUTTERFLY,
    Image.CHESSBOARD,
    Image.CLOCK1,
    Image.CLOCK2,
    Image.CLOCK3,
    Image.CLOCK4,
    Image.CLOCK5,
    Image.CLOCK6,
    Image.CLOCK7,
    Image.CLOCK8,
    Image.CLOCK9,
    Image.CLOCK10,
    Image.CLOCK11,
    Image.CLOCK12,
]

for image in ALL_IMAGES:
    display.show(image)
    sleep(250)
display.clear()