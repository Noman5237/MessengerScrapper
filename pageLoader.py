from pyautogui import press
from time import sleep


def loadPage():
    while True:
        press("pageup")
        sleep(1)
