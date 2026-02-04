export async function onRequest(context) {
  const targetHost = 'previous-ag-digidanesh123-01555492.koyeb.app';
  
  const url = new URL(context.request.url);
  url.host = targetHost;
  url.protocol = 'https:';
  
  if (url.pathname === '/') url.pathname = '/chat';

  const newHeaders = new Headers(context.request.headers);
  newHeaders.set('Host', targetHost);

  const newRequest = new Request(url.toString(), {
    method: context.request.method,
    headers: newHeaders,
    body: context.request.body,
  });

  return fetch(newRequest);
}
