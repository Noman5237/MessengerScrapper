from Entity.Message import *


class User:

    def __init__(self, name):
        self.name = name
        self.hourlyTally = {}
        self.totalChars = 0
        self.totalText = 0
        self.totalMultimedia = 0
        self.timesTagged = 0
        self.totalEmojis = 0
        self.reactionsGiven = 0
        self.totalReactions = 0
        self.totalTextReply = 0
        self.reactionPoints = {}

    def addMessage(self, message: Message):

        if message.timeHour not in self.hourlyTally:
            self.hourlyTally[message.timeHour] = 1
        else:
            self.hourlyTally[message.timeHour] += 1

        self.totalReactions += message.noReactions
        for reaction, point in message.reactionPoints.items():
            if reaction not in self.reactionPoints:
                self.reactionPoints[reaction] = point
            else:
                self.reactionPoints[reaction] += point

        if not message.isText:
            self.totalMultimedia += 1
            return
        else:
            self.totalText += 1

        self.totalChars += len(message)
        self.totalEmojis += message.emojis

        if message.isReply:
            self.totalTextReply += 1

    def tag(self):
        self.timesTagged += 1

    def react(self):
        self.reactionsGiven += 1
