class Document {
  private String content;

  public Document(String content) {
    this.content = content;
  }

  public String getContent() {
    return content;
  }
}

interface Printable {
  void print(Document Doc);
}

class PDFPrinter implements Printable {
  @Override
  public void print(Document doc) {
    System.out.println("Printing PDF: " + doc.getContent());
  }
}

class InkjetPrinter implements Printable {
  @Override
  public void print(Document doc) {
    System.out.println("Printing via Inkjet: " + doc.getContent());
  }

}

public class Printer {
  public static void main(String[] args) {
    Document myDoc = new Document("Hello World");
    PDFPrinter printer1 = new PDFPrinter();
    InkjetPrinter printer2 = new InkjetPrinter();

    printer1.print(myDoc);
    printer2.print(myDoc);
  }
}
