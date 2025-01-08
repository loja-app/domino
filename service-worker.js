const CACHE_NAME = 'meu-app-cache-v1';
const ASSETS_TO_CACHE = [
  '/domino/',
  '/domino/index.html',
  '/domino/style.css',
  '/domino/script.js',
  '/domino/logo.png',
  '/domino/undo.svg'
  ];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || caches.match('/domino/');
    })
  );
});
