
from bs4 import BeautifulSoup

messengerHTML = "./resources/Messenger.html"
page = open(messengerHTML)
soup = BeautifulSoup(page.read(), "html.parser")

# Finding Users
users = {}
for user in soup.findAll("h5", {"class": "_ih3"}):
    name = user["aria-label"]
    if name not in users:
        users[name] = 1
    else:
        users[name] += 1

page.close()
