from utility import *


class Participant:

    def __init__(self, name):
        self.name = name
        self.noOfCharacters = 0
        self.messageTypes = {}
        self.totalMessages = 0
        self.noOfTimesTagged = 0
        self.noOfTimesTaggedOthers = 0
        self.hourlyMessageCount = {}
        self.monthlyMessageCount = {12: 0}
        self.totalReactionReceived = 0
        self.reactionsReceived = {}
        self.reactionsGiven = {}

    def parse_message(self, message):
        self.noOfCharacters += len(message.content)

        generate_key(self.messageTypes, message.type, 0)
        self.messageTypes[message.type] += 1
        self.totalMessages += 1

        self.noOfTimesTaggedOthers += message.content.count("@")

        generate_key(self.hourlyMessageCount, message.timestamp.hour)
        self.hourlyMessageCount[message.timestamp.hour] += 1

        # 1st Jan still counts as last years leftover
        if message.timestamp.year == 2021:
            self.monthlyMessageCount[12] += 1
        else:
            generate_key(self.monthlyMessageCount, message.timestamp.month)
            self.monthlyMessageCount[message.timestamp.month] += 1

        for reaction in message.reactions:
            generate_key(self.reactionsReceived, reaction["reaction"], 0)
            self.reactionsReceived[reaction["reaction"]] += 1
            self.totalReactionReceived += 1

    def calculate_points(self):
        return self.totalReactionReceived * 0.4 + self.noOfCharacters * 0.3 + self.totalMessages / 24 * 0.2 + \
               self.totalMessages / 365 * 0.1

    def pretty_print(self):
        print(self.name)
        print("Chars:", self.noOfCharacters)
        print("Total Messages:", self.totalMessages)
        # print(self.noOfTimesTagged)
        print("Tagged Others:", self.noOfTimesTaggedOthers)
        print("Hourly log:", self.hourlyMessageCount)
        print("Monthly log:", self.monthlyMessageCount)
        print("Total Reactions Received:", self.totalReactionReceived)
        print("Reactions:", self.reactionsReceived)
        # print(self.reactionsGiven)
