# Blinker - random LED patterns
from microbit import *
import random

while True:
	display.set_pixel(random.randrange(5), random.randrange(5), random.randrange(10))
    display.set_pixel(random.randrange(5), random.randrange(5), 0)
