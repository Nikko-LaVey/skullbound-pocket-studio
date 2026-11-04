/* Offline shell cache for the current beta. Future releases increment CACHE_NAME. */
const CACHE_NAME = 'skullbound-pocket-v0.1.0';
const SHELL = ['./','./index.html','./app.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install', event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('skullbound-pocket-')&&key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(resp=>{if(resp.ok){const clone=resp.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,clone));}return resp;}).catch(()=>caches.match('./index.html'))));});
