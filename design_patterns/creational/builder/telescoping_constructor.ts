class HttpRequestTelescoping {
  private url: string;
  private method: string;
  private headers: Map<string, string>;
  private queryParams: Map<string, string>;
  private body: string;
  private timeout: number;

  constructor(url: string);
  constructor(url: string, method: string);
  constructor(url: string, method: string, headers: Map<string, string>);
  constructor(
    url: string,
    method: string,
    headers: Map<string, string>,
    queryParams: Map<string, string>
  );
  constructor(
    url: string,
    method: string,
    headers: Map<string, string>,
    queryParams: Map<string, string>,
    body: string
  );
  constructor(
    url: string,
    method: string,
    headers: Map<string, string>,
    queryParams: Map<string, string>,
    body: string,
    timeout: number
  );
  constructor(
    url: string,
    method: string = "GET",
    headers: Map<string, string> | null = null,
    queryParams: Map<string, string> | null = null,
    body: string | null = null,
    timeout: number = 30000
  ) {
    this.url = url;
    this.method = method;
    this.headers = headers === null ? new Map() : headers;
    this.queryParams = queryParams === null ? new Map() : queryParams;
    this.body = body;
    this.timeout = timeout;

    console.log(
      `HttpRequest Created: URL=${url}, Method=${method}, Headers=${
        this.headers.size
      }, Params=${this.queryParams.size}, Body=${
        body !== null
      }, Timeout=${timeout}`
    );
  }

  // Getters could be added here
}

class HttpAppTelescoping {
  static main(): void {
    const req1 = new HttpRequestTelescoping("https://api.example.com/data");

    const req2 = new HttpRequestTelescoping(
      "https://api.example.com/submit",
      "POST",
      null,
      null,
      '{"key":"value"}'
    );

    const req3 = new HttpRequestTelescoping(
      "https://api.example.com/config",
      "PUT",
      new Map([["X-API-Key", "secret"]]),
      null,
      "config_data",
      5000
    );
  }
}

HttpAppTelescoping.main();
