"""
Polymorphism is the ability of an object to take on multiple forms
"""


class Document:
    def show(self):
        raise NotImplementedError("Subclass must implement abstract method")


class Pdf(Document):
    def show(self):
        return "Show pdf content"


class Word(Document):
    def show(self):
        return "Show Word content"


docs = [Pdf(), Word()]

for doc in docs:
    print(doc.show())
