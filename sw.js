const CACHE = 'vh-admin-v1';
const ASSETS = [
  './admin.html', 
  './manifest.json', 
  './icon.svg', 
  './icon-192.png', 
  './icon-512.png', 
  './apple-touch-icon.png'
];

// 1. Installatie: Sla de bestanden op in de cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// 2. Activatie: Verwijder oude caches (zoals de oude control-room versies)
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch: Laad de bestanden uit de cache (offline werking)
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const sameOrigin = url.origin === location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  
  // Laat externe links (zoals GitHub/Vercel) met rust
  if (!sameOrigin && !isFont) return; 

  e.respondWith(
    caches.match(e.request).then(hit => {
      const net = fetch(e.request).then(res => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit || (e.request.mode === 'navigate' ? caches.match('./admin.html') : undefined));
      return hit || net;
    })
  );
});