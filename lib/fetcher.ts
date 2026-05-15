import { cookies } from "./cookies";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type FetcherOptions<T = unknown> = {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: T;
  params?: Record<string, string | number | boolean | undefined>;
  baseUrl?: string;
  withCredentials?: boolean;
};

type Interceptor<T> = (value: T) => T | Promise<T>;

type FetcherConfig = {
  baseUrl?: string;
  withCredentials?: boolean;
  requestInterceptors?: Interceptor<RequestInit>[];
  responseInterceptors?: Interceptor<Response>[];
};

type FetcherResponse<T> = {
  data: T;
  status: number;
  ok: boolean;
};

class Fetcher {
  private config: Required<FetcherConfig>;

  constructor(config: FetcherConfig = {}) {
    this.config = {
      baseUrl: config.baseUrl ?? "",
      withCredentials: config.withCredentials ?? true,
      requestInterceptors: config.requestInterceptors ?? [],
      responseInterceptors: config.responseInterceptors ?? [],
    };
  }

  private buildUrl(path: string, params?: Record<string, string | number | boolean | undefined>): string {
    const url = new URL(
      path.startsWith("http") ? path : `${this.config.baseUrl}${path}`,
      this.config.baseUrl || "http://localhost"
    );
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        if (v !== undefined) url.searchParams.set(k, String(v));
      });
    }
    return url.toString();
  }

  private async buildHeaders(
    extra?: Record<string, string>
  ): Promise<Record<string, string>> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...extra,
    };

    const token = await cookies.get("auth_token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
  }

  async request<TBody, TResponse>(
    path: string,
    options: FetcherOptions<TBody> = {}
  ): Promise<FetcherResponse<TResponse>> {
    const {
      method = "GET",
      body,
      params,
      headers: extraHeaders,
    } = options;

    const url = this.buildUrl(path, params);
    const headers = await this.buildHeaders(extraHeaders);

    let fetchInit: RequestInit = {
      method,
      headers,
      credentials: this.config.withCredentials ? "include" : "same-origin",
    };

    if (body && method !== "GET") {
      fetchInit.body = JSON.stringify(body);
    }

    for (const interceptor of this.config.requestInterceptors) {
      fetchInit = await interceptor(fetchInit);
    }

    const response = await fetch(url, fetchInit);

    let processedResponse = response;
    for (const interceptor of this.config.responseInterceptors) {
      processedResponse = await interceptor(processedResponse);
    }

    const data = processedResponse.headers
      .get("content-type")
      ?.includes("application/json")
      ? ((await processedResponse.json()) as TResponse)
      : ((await processedResponse.text()) as unknown as TResponse);

    return { data, status: processedResponse.status, ok: processedResponse.ok };
  }

  get<TResponse>(
    path: string,
    options?: Omit<FetcherOptions, "method" | "body">
  ) {
    return this.request<never, TResponse>(path, { ...options, method: "GET" });
  }

  post<TBody, TResponse>(path: string, body?: TBody, options?: Omit<FetcherOptions<TBody>, "method">) {
    return this.request<TBody, TResponse>(path, {
      ...options,
      method: "POST",
      body,
    });
  }

  put<TBody, TResponse>(path: string, body?: TBody, options?: Omit<FetcherOptions<TBody>, "method">) {
    return this.request<TBody, TResponse>(path, {
      ...options,
      method: "PUT",
      body,
    });
  }

  patch<TBody, TResponse>(path: string, body?: TBody, options?: Omit<FetcherOptions<TBody>, "method">) {
    return this.request<TBody, TResponse>(path, {
      ...options,
      method: "PATCH",
      body,
    });
  }

  delete<TResponse>(path: string, options?: Omit<FetcherOptions<never>, "method" | "body">) {
    return this.request<never, TResponse>(path, { ...options, method: "DELETE" });
  }
}

export function createFetcher(config?: FetcherConfig): Fetcher {
  return new Fetcher(config);
}

export const api = createFetcher({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
});

export type { FetcherConfig, FetcherResponse, FetcherOptions };
