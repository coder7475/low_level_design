from io import UnsupportedOperation  # Using the Python IO-style unsupported operation exception


class Document:
    def __init__(self, data):
        self.data = data

    def open(self):
        print("Document opened. Data:", self.data[:20] + "...")

    def save(self, new_data):
        # Base class contract: any Document instance is assumed to be savable.
        # Client code that works with `Document` can reasonably expect this to
        # succeed without raising an exception in normal use.
        self.data = new_data
        print("Document saved.")

    def get_data(self):
        return self.data


class ReadOnlyDocument(Document):
    def __init__(self, data):
        super().__init__(data)

    def save(self, new_data):
        # LSP violation:
        # The base type `Document` promises that `save` is a valid operation.
        # Client code using a `Document` can call `save` and expect it to work.
        #
        # By overriding `save` to *always* raise an exception, this subtype
        # *strengthens* the preconditions / weakens the guarantees:
        # - For some `Document` objects (`ReadOnlyDocument`), `save` is now an
        #   invalid operation where it used to be valid.
        #
        # This means any code written against the `Document` abstraction that
        # assumes "all Documents are savable" can break when given a
        # `ReadOnlyDocument`, so `ReadOnlyDocument` is not a true drop-in
        # substitute for `Document`.
        raise UnsupportedOperation("Cannot save a read-only document!")


class DocumentProcessor:
    def process_and_save(self, doc, additional_info):
        doc.open()
        current_data = doc.get_data()
        new_data = current_data + " | Processed: " + additional_info

        # This method embodies the contract/assumption of the base type:
        # "Any object that is a Document can be saved."
        #
        # From LSP's perspective, `doc` is used purely via the `Document`
        # interface: open(), get_data(), save(). The processor *does not and
        # should not* know which concrete subclass it gets.
        doc.save(new_data)  # Assumes all Documents are savable

        # Because `ReadOnlyDocument.save` throws instead of behaving like
        # `Document.save`, substituting a ReadOnlyDocument here changes the
        # observable behavior of correctly written client code, which is the
        # essence of an LSP violation.
        print("Document processing complete.")


if __name__ == "__main__":
    regular_doc = Document("Initial project proposal content.")
    confidential_report = ReadOnlyDocument("Top secret government data.")

    processor = DocumentProcessor()

    print("--- Processing Regular Document ---")
    processor.process_and_save(regular_doc, "Reviewed by Alice")

    print("\n--- Processing ReadOnly Document ---")
    try:
        # From the caller's point of view, `confidential_report` is a
        # `Document`, so it expects `process_and_save` to behave the same way
        # regardless of the concrete subclass. The fact that we now *must*
        # wrap this in try/except specifically because one subtype breaks the
        # base contract is a symptom of LSP violation.
        processor.process_and_save(confidential_report, "Reviewed by Bob")
    except UnsupportedOperation as e:
        # The need to handle a new exception type that the base `Document`
        # did not promise is another sign that the subtype changed the
        # contract rather than extended it.
        print("Error:", str(e))
