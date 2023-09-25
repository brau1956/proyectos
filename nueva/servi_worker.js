
const CACHE_NAME = 'mi-cache';

// Define las librerías (debes añadir el signo igual)
const archivosParaCache = [
    '/proyecto.html',
    '/estilo.css',
    '/todo.js',
    '/h'
];

// Evento de instalación del Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Almacena los archivos en caché
        return cache.addAll(archivosParaCache);
      })
  );
});

// Evento de activación del Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cache) {
          if (cache !== CACHE_NAME) {
            // Borra las cachés antiguas si existen
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Evento Fetch para interceptar las solicitudes de red
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Si se encuentra en caché, devuelve la respuesta en caché
        if (response) {
          return response;
        }
        // Si no se encuentra en caché, realiza la solicitud a la red
        return fetch(event.request);
      })
  );
});
