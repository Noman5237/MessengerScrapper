
from classConstants import *


class Message:
    def __init__(self, message):
        self.message = message
        self.timeHour = self.parseTimeHour()

        # reactions
        self.reactors = []
        self.reactionPoints = {}
        self.noReactions = 0
        reactionBlock = message.find("div", {"class": cReactionBlock})
        if reactionBlock is not None:
            self.parseReactions(reactionBlock)

        if cMultimediaMessageIdentifier in message.attrs:
            # multimedia message
            self.isText = False
            return
        else:
            self.isText = True

        # text
        textBlock = message.find("div", {"class": cTextBlock})
        self.text = ""
        self.emojis = 0
        self.tags = []
        self.parseTextMessageContent(textBlock)
        if cReply in message["class"]:
            self.isReply = True
        else:
            self.isReply = False

    def parseTimeHour(self):
        message = self.message
        timeHourMatch = cTimeHourRegex.match(message.attrs["data-tooltip-content"])
        if timeHourMatch is not None:
            return int(timeHourMatch.groups()[0])

    def parseTextMessageContent(self, textContent):
        if textContent is None:
            return

        self.text = textContent.text
        self.emojis = len(textContent.find_all("img", {"class": cEmojiRegex}))

        tagsRaw = textContent.find_all("a", {"class": cTag})
        for tag in tagsRaw:
            self.tags.append(tag.text[1:])

    def parseReactions(self, reactionBlock):
        try:
            self.reactors += reactionBlock["data-tooltip-content"].split("\n")
        except KeyError:
            return

        noReactions = int(reactionBlock.find("span", {"class": cNoReactors}).text)
        self.noReactions = noReactions

        rawCReactions = reactionBlock.find_all("span", {"class": cReactionUnit})[:-1]
        for rawReaction in rawCReactions:
            if not rawReaction.attrs["style"].startswith("z-index: 1;"):
                noReactions /= 2

            reaction = next(next(rawReaction.children).children).attrs["alt"]
            if reaction not in self.reactionPoints:
                self.reactionPoints[reaction] = noReactions
            else:
                self.reactionPoints[reaction] += noReactions

    def __len__(self):
        return len(self.text)
