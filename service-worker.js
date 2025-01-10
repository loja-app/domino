const CACHE_NAME = "domino-cache-v1";
const urlsToCache = [
  "/domino/",
  "/domino/index.html",
  "/domino/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        // Se o recurso estiver no cache, retorna ele
        return response;
      }
      // Se não encontrar no cache, busca da rede e coloca no cache
      return fetch(event.request).catch(() => {
        // Se der erro na rede, retorna o index.html do cache
        return caches.match("/domino/index.html");
      });
    })
  );
});

// Função para atualizar o cache silenciosamente
const atualizarCacheSilenciosamente = async () => {
  const cache = await caches.open(CACHE_NAME);
  for (const url of urlsToCache) {
    try {
      // Tenta buscar o recurso mais recente da rede
      const resposta = await fetch(url);
      if (resposta && resposta.ok) {
        // Se a resposta for ok, atualiza o cache com o conteúdo mais recente
        await cache.put(url, resposta);
      }
    } catch (err) {
      // Se der erro ao tentar buscar, ignora
      console.log(`Erro ao tentar atualizar o cache para ${url}: ${err}`);
    }
  }
};

// Função para agendar atualizações periódicas de cache (exemplo: a cada 6 horas)
const agendarAtualizacao = () => {
  setInterval(() => {
    // Chama a função de atualização silenciosa a cada 6 horas
    atualizarCacheSilenciosamente();
  }, 21600000); // 6 horas em milissegundos
};

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  // Inicia a atualização silenciosa do cache
  agendarAtualizacao();
});
