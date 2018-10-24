# Add your Python code here. E.g.
from microbit import *
from random import randrange
# import _thread

def draw_raindrop(x, y, length):
    # raindrop + tail
    for pos in range(length):
        ypos = y - pos
        if ((ypos < 5) and (ypos >= 0)):
            bright = (length - ypos) * 10 / length - 1
            display.set_pixel(x, ypos, int(bright))

    # whitespace after ...
    for ypos in range(y - length, -1, -1):
        display.set_pixel(x, ypos, 0)


def animate_raindrop(x, length, speed):
    for head in range(length):
        draw_raindrop(x, head, length)
        sleep(500 / speed)


def animate_raindrops(x):
    sleep(randrange(4) * 200 + 200)
    while True:
        length = randrange(6) + 2
        speed = randrange(4) + 1
        animate_raindrop(x, length, speed)
        # sleep(randrange(4) * 100 + 200)


def animate_raindrops_0(): animate_raindrops(0)
def animate_raindrops_1(): animate_raindrops(1)
def animate_raindrops_2(): animate_raindrops(2)
def animate_raindrops_3(): animate_raindrops(3)
def animate_raindrops_4(): animate_raindrops(4)

def create_fiber(fn):
	fn()

create_fiber(animate_raindrops_0)
create_fiber(animate_raindrops_1)
create_fiber(animate_raindrops_2)
create_fiber(animate_raindrops_3)
create_fiber(animate_raindrops_4)

# If main exits, there may still be other fibers running or registered event handlers etc.
# Simply release this fiber, which will mean we enter the scheduler. Worse case, we then
# sit in the idle task forever, in a power efficient sleep.
# release_fiber()
