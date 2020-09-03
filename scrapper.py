
from bs4 import BeautifulSoup
from Entity.User import *

messengerHTML = "./resources/Messenger2.html"
page = open(messengerHTML, encoding="utf-8")
soup = BeautifulSoup(page.read(), "html.parser")

users = {}
tempUser = None

messageGroups = soup.find_all("div", {"class": cMessageGroup})
# Memory Shortage Maybe??
del soup

for messageGroup in messageGroups:
    sender = messageGroup.find("div", {"class": cMessageSender}).attrs["data-tooltip-content"]
    # Create new user when with first encounter
    if sender not in users:
        tempUser = User(sender)
        users[sender] = tempUser
    else:
        tempUser = users[sender]

    messageList = messageGroup.find_all("div", {"class": cMessageListRegex})
    for message in messageList:
        messageObj = Message(message)
        tempUser.addMessage(messageObj)

        # Handling reaction givers directly
        for reactor in messageObj.reactors:
            if reactor not in users:
                tempUser = User(reactor)
                tempUser.react()
                users[reactor] = tempUser
            else:
                users[reactor].react()

        # Handling tags directly
        for tagged in messageObj.tags:
            if tagged not in users:
                tempUser = User(tagged)
                tempUser.tag()
                users[tagged] = tempUser
            else:
                users[tagged].tag()
