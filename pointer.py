from microbit import *

def minmax(number, min, max):
    if number < min:
        return min
    elif number > max:
        return max
    else:
        return number

while True:
    if (accelerometer.is_gesture("up")):
        display.show(Image.ARROW_N)
    elif (accelerometer.is_gesture("down")):
        display.show(Image.ARROW_S)
    elif (accelerometer.is_gesture("right")):
        display.show(Image.ARROW_W)
    elif (accelerometer.is_gesture("left")):
        display.show(Image.ARROW_E)
    else:
        display.clear()

    # start at the centre
    x = 2
    y = 2
    accel_x = accelerometer.get_x()
    accel_y = accelerometer.get_y()
    if accel_x < -600:
        x = 0
    elif accel_x < -300:
        x = 1
    elif accel_x < 300:
        x = 2
    elif accel_x < 600:
        x = 3
    else:
        x = 4
    if accel_y < -600:
        y = 0
    elif accel_y < -300:
        y = 1
    elif accel_y < 300:
        y = 2
    elif accel_y < 600:
        y = 3
    else:
        y = 4
    x = minmax(accel_x // 450 + 2, 0, 4)
    y = minmax(accel_y // 450 + 2, 0, 4)
    # print(accel_x, accel_y)
    display.set_pixel(x, y, 9)
    sleep(100)

'''
    if (abs(accelerometer.get_x()) < 300):
        display.set_pixel(0, 0, 0)
        display.set_pixel(1, 0, 0)
        display.set_pixel(2, 0, 9)
        display.set_pixel(3, 0, 0)
        display.set_pixel(4, 0, 0)
    elif (abs(accelerometer.get_x()) >= 300 and abs(accelerometer.get_x()) < 600):
        display.set_pixel(0, 0, 0)
        display.set_pixel(1, 0, 9)
        display.set_pixel(2, 0, 0)
        display.set_pixel(3, 0, 9)
        display.set_pixel(4, 0, 0)
    elif (abs(accelerometer.get_x()) >= 600 and abs(accelerometer.get_x()) < 800):
        display.set_pixel(0, 0, 9)
        display.set_pixel(1, 0, 0)
        display.set_pixel(2, 0, 0)
        display.set_pixel(3, 0, 0)
        display.set_pixel(4, 0, 9)
'''
