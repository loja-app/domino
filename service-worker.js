const CACHE_NAME = 'meu-app-cache-v1';
const ASSETS_TO_CACHE = [
  '/domino/',
  '/domino/index.html',
  '/domino/style.css',
  '/domino/script.js',
  '/domino/icon.png',
  '/domino/undo.svg'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // Ignora o ciclo de espera e ativa o SW imediatamente
});

// Ativação do Service Worker (limpeza de cache antigo)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Interceptando todas as requisições e sempre respondendo com o cache (sem fallback para rede)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || caches.match('/domino/index.html'); // Sempre retorna o cache
    })
  );
});
