// Files to cache
var cacheName = 'js13k2018-labi-v1';
var contentToCache = [
  '/js13k2018/labi/',
  '/js13k2018/labi/index.html',
  '/js13k2018/labi/media/icon32.png',
  '/js13k2018/labi/media/icon48.png',
  '/js13k2018/labi/media/icon72.png'
];

// Installing Service Worker
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(contentToCache);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});