from microbit import *
from math import pi, sin

scale = 50
max_dist = 70
maxx = 5 * scale

def brightness(x, y, coords):
    grid_x = x * scale
    grid_y = y * scale
    x_distance = abs(coords[0] - grid_x)
    y_distance = abs(coords[1] - grid_y)
    if (x_distance > max_dist or y_distance > max_dist):
        return 0
    else:
		// TODO: update brightness algorithm
		// dist = sqrt(x_distance*x_distance+y_distance*y_distance)
		// bright = 256 - dist * 256 / max_dist
        angle = pi * ((x_distance + y_distance) // 2) // 15
        return 9 - int(sin(angle) * 9)

def draw_grid(spot):
    for x in range(0, 5):
        for y in range(0, 5):
            display.set_pixel(x, y, brightness(x, y, spot))

# 5x5 grid * scale
x = 0
y = 0
dx = 2
dy = 3
while True:
    spot = [x, y]
    draw_grid(spot)
    x += dx
    y += dy
    if (x >= 50 or x < 0):
        dx = 0 - dx
        x += dx
    if (y >= 50 or y < 0):
        dy = 0 - dy
        y += dy
    sleep(1)
