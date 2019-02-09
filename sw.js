self.addEventListener("install", function(event) {
  console.log("[Service Worker] Installing Service Worker", event);
});

self.addEventListener("activate", function(event) {
  console.log("[Service Worker] Activating Service Worker", event);
  return self.clients.claim();
});

/**
 * Dynamic Cache - Cache First
 */

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.open("pwa-dynamic-cache").then(function(cache) {
      return cache.match(event.request).then(function(response) {
        return (
          response ||
          fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
