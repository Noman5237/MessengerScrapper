from datetime import datetime
from utility import *


class Message:
    """
    Parses message data from json
    """

    def __init__(self, message):
        self.sender = message["sender_name"]
        if self.sender == "Talimul Bari Shrestho":
            self.sender = "TAlimul BAri ShresTho"
        self.timestamp = datetime.fromtimestamp(message["timestamp_ms"] / 1e3)

        generate_key(message, "content", "")
        self.content = message["content"]

        # TODO classify message types manually
        self.type = message["type"]

        generate_key(message, "reactions", [])
        self.reactions = message["reactions"]
