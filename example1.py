# Write your code here :-)
from microbit import *
import music

notes = [
    'c4:1', 'e', 'g', 'c5', 'e5', 'g4'
]

for i in range(10):
    display.scroll("Hello, World!")
    sleep(500)
    display.show(Image.HEART)
    sleep(500)
    display.clear()
    sleep(500)
    display.show(Image.HEART)
    sleep(500)
    display.clear()
    sleep(2000)
    # music.play(notes)