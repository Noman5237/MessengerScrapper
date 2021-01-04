import json
import os
from utility import *

from Participant import Participant
from Message import Message

participants = {}
directory_prefix = "messages/"

for file in os.listdir(directory_prefix):
    data = json.load(open(directory_prefix + file))
    for participant in data["participants"]:
        name = participant["name"]
        generate_key(participants, name, Participant(name))

    for message in data["messages"]:
        message = Message(message)
        participant = participants[message.sender]
        participant.parse_message(message)

# y = -7643.51549 + 28.3723533 * x
participants["Maheen Hoque"].noOfCharacters = 213746

for k, v in sorted(participants.items(), key=lambda p: p[1].calculate_points(), reverse=True):
    print(v.calculate_points())
    v.pretty_print()
    print()
