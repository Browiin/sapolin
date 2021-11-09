var cacheName = "holamundo-pwa";
var filesToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js'
];
/*inicie el service worker y almacene en cache todo el contenido de la app*/
self.addEventListener('install', function(e){
e.waitUntill (
    caches.open(cacheName) .then(function(cache) {    
        return cacheName.addAll (filesToCache);
    })
);
}); 
 /* sirve contenido almacenado en cache sin conexcion*/
 
self.addEventListener('fetch', function(e){
 e.respondWith(
     cache.match (e.request) .then ( function(response) {
         return response || fetch(e.request);
     })
 )
})