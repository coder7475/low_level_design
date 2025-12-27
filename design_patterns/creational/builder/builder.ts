class HttpRequest {
  // Required
  private readonly url: string;

  // Optional
  private readonly method: string;
  private readonly headers: Map<string, string>;
  private readonly queryParams: Map<string, string>;
  private readonly body: string;
  private readonly timeout: number;

  // Private constructor
  private constructor(builder: HttpRequest.Builder) {
    this.url = builder.url;
    this.method = builder.method;
    this.headers = builder.headers;
    this.queryParams = builder.queryParams;
    this.body = builder.body;
    this.timeout = builder.timeout;
  }

  // Getters (optional)
  getUrl(): string {
    return this.url;
  }
  getMethod(): string {
    return this.method;
  }
  getHeaders(): Map<string, string> {
    return this.headers;
  }
  getQueryParams(): Map<string, string> {
    return this.queryParams;
  }
  getBody(): string {
    return this.body;
  }
  getTimeout(): number {
    return this.timeout;
  }

  toString(): string {
    return `HttpRequest{url='${this.url}', method='${
      this.method
    }', headers=${JSON.stringify(
      Array.from(this.headers)
    )}, queryParams=${JSON.stringify(Array.from(this.queryParams))}, body='${
      this.body
    }', timeout=${this.timeout}}`;
  }

  // Builder Class
  static Builder = class {
    readonly url: string; // required
    method: string = "GET";
    headers: Map<string, string> = new Map();
    queryParams: Map<string, string> = new Map();
    body: string;
    timeout: number = 30000;

    constructor(url: string) {
      this.url = url;
    }

    setMethod(method: string): this {
      this.method = method;
      return this;
    }

    addHeader(key: string, value: string): this {
      this.headers.set(key, value);
      return this;
    }

    addQueryParam(key: string, value: string): this {
      this.queryParams.set(key, value);
      return this;
    }

    setBody(body: string): this {
      this.body = body;
      return this;
    }

    setTimeout(timeout: number): this {
      this.timeout = timeout;
      return this;
    }

    build(): HttpRequest {
      return new HttpRequest(this);
    }
  };
}

// Client Code
class HttpAppBuilderPattern {
  static main(): void {
    const request1 = new HttpRequest.Builder(
      "https://api.example.com/data"
    ).build();

    const request2 = new HttpRequest.Builder("https://api.example.com/submit")
      .setMethod("POST")
      .setBody('{"key":"value"}')
      .setTimeout(15000)
      .build();

    const request3 = new HttpRequest.Builder("https://api.example.com/config")
      .setMethod("PUT")
      .addHeader("X-API-Key", "secret")
      .addQueryParam("env", "prod")
      .setBody("config_payload")
      .setTimeout(5000)
      .build();

    console.log(request1.toString());
    console.log(request2.toString());
    console.log(request3.toString());
  }
}

HttpAppBuilderPattern.main();
