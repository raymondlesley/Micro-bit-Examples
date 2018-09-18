from microbit import *
from math import pi, sin

def brightness(x, y, coords):
    grid_x = x * 10
    grid_y = y * 10
    x_distance = abs(coords[0] - grid_x)
    y_distance = abs(coords[1] - grid_y)
    if (x_distance > 9 or y_distance > 9):
        return 0
    else:
        angle = pi * ((x_distance + y_distance) // 2) // 15
        return 9 - int(sin(angle) * 9)

def draw_grid(spot):
    for x in range(0, 5):
        for y in range(0, 5):
            display.set_pixel(x, y, brightness(x, y, spot))

# 50x50 grid
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
    sleep(100)
