# Blinker - random LED patterns
from microbit import *
import random

start = running_time()
for i in range(100000):
	display.set_pixel(random.randrange(5), random.randrange(5), random.randrange(10))
	display.set_pixel(random.randrange(5), random.randrange(5), 0)
end = running_time()
while True:
    display.clear()
    display.scroll("%d" % (end - start))
    sleep(1000)
# 68232