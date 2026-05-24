type CookieOptions = {
  expires?: Date | number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
};

function isServer(): boolean {
  return typeof document === "undefined";
}

export const cookies = {
  async get(name: string): Promise<string | undefined> {
    console.log("Getting cookie", name, isServer());
    if (isServer()) {
      const { cookies: nextCookies } = await import("next/headers");
      const store = await nextCookies();
      console.log("Store", store);
      console.log("Store get", store.get(name));
      return store.get(name)?.value;
    }
    const match = document.cookie.match(
      new RegExp(`(?:^|;\\s*)${name}=([^;]*)`)
    );
    console.log("Match", match);
    return match ? decodeURIComponent(match[1]) : undefined;
  },

  async set(
    name: string,
    value: string,
    options: CookieOptions = {}
  ): Promise<void> {
    const { path = "/", secure = true, sameSite = "lax" } = options;
    if (isServer()) {
      const { cookies: nextCookies } = await import("next/headers");
      const store = await nextCookies();
      store.set(name, value, { path, secure, sameSite, ...options });
      return;
    }
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path}`;
    if (secure) cookie += "; secure";
    if (sameSite) cookie += `; samesite=${sameSite}`;
    if (options.expires) {
      const date =
        options.expires instanceof Date
          ? options.expires
          : new Date(Date.now() + options.expires);
      cookie += `; expires=${date.toUTCString()}`;
    }
    if (options.domain) cookie += `; domain=${options.domain}`;
    document.cookie = cookie;
  },

  async remove(name: string, path = "/"): Promise<void> {
    await cookies.set(name, "", {
      path,
      expires: new Date(0),
    });
  },
};
