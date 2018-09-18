# Magic 8 ball by Nicholas Tollervey. February 2016.
#
# Ask a question then shake.
#
# This program has been placed into the public domain.
# Modified by Raymond Lesley

from microbit import *
import random

answers = [
    "Yes",
    "No",
    "Possibly",
    "Try again later",
    Image(  "00000:"
            "00009:"
            "00090:"
            "90900:"
            "09000"
    ),
    "X",
    "?",
    "Woteva",
    Image.HAPPY,
    Image.SAD
]

def show(result):
    if type(result) == type(Image.ANGRY):
        display.show(result)
    elif len(result) == 1:
        display.show(result)
    else:  # assume string
        display.scroll(result)

NUM_STATES = 10
def animate(state):
    if state < (NUM_STATES // 5 * 4):
        display.show('8')
    else:
        display.clear()
    return (state + 1) % NUM_STATES

animation_state = 0
while True:
    animation_state = animate(animation_state)
    if accelerometer.was_gesture('shake'):
        display.clear()
        sleep(1000)
        #display.scroll(random.choice(answers))
        #display.show(random.choice(answers))
        show(random.choice(answers))
        sleep(1000)
    sleep(10)
