self.addEventListener('install', (evt) => {
  evt.waitUntil((async () => {
    const cache = await caches.open('v1');
    await cache.addAll([
      '/',
      '/icon-512.png',
      '/icon-192.png',
      '/favicon.ico',
    ]);
  })());
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith((async () => {
    const cached = await caches.match(evt.request)
    if (cached) return cached;

    return await fetch(evt.request);
  })());
});
