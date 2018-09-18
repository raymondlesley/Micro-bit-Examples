from microbit import *

img1 = Image(   "00000:"
                "00000:"
                "00900:"
                "00000:"
                "00000"
)
img2 = Image(   "00000:"
                "09990:"
                "09090:"
                "09990:"
                "00000"
)
img3 = Image(   "99999:"
                "90009:"
                "90009:"
                "90009:"
                "99999"
)

FPS = 10
while True:
    delay = 1000 // FPS
    display.show(img1)
    sleep(delay)
    display.show(img2)
    sleep(delay)
    display.show(img3)
    sleep(delay)
    if (button_a.was_pressed()):
        FPS -= 1
        if (FPS == 0): FPS = 1
    if (button_b.was_pressed()):
        FPS += 1
        if (FPS == 1000): FPS = 1000
