const CACHE_NAME = 'raheeq-makhtum-v2';
const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Cairo:wght@400;600;700;900&family=Noto+Kufi+Arabic&family=Scheherazade+New&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});