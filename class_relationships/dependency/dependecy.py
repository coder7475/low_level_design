class Document:
    def __init__(self, content):
        self.content = content

    def get_content(self):
        return self.content


# Printer depends on Document
class Printer:
    def print(self, document):  # dependency document
        print("Printing: ", document.get_content())
