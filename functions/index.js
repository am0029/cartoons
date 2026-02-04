exports.handler = async (event, context) => {
  const targetHost = 'previous-ag-digidanesh123-01555492.koyeb.app';
  
  const url = new URL(event.rawUrl);
  url.host = targetHost;
  url.protocol = 'https:';
  
  // Ensure path is /chat for Koyeb
  if (url.pathname === '/') {
    url.pathname = '/chat';
  }

  // Forward request to Koyeb
  const response = await fetch(url.toString(), {
    method: event.httpMethod,
    headers: {
      ...event.headers,
      'Host': targetHost,
    },
    body: event.body,
  });

  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers),
    body: await response.text(),
    isBase64Encoded: false,
  };
};
