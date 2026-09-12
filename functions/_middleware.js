const canonicalHost = "winpesttw.com";
const redirectHosts = new Set(["winpests.pages.dev", "www.winpesttw.com"]);

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (redirectHosts.has(url.hostname)) {
    url.protocol = "https:";
    url.hostname = canonicalHost;
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
