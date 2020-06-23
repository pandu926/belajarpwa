const CACHE_NAME = 'wonosoboku';
var urlsToCache = [
	'/',
	'/nav.html',
	'/index.html',
	'/pages/home.html',
	'/pages/kesenian.html',
	'/pages/sejarah.html',
	'/pages/pariwisata.html',
	'/css/home.css',
	'/css/materialize.min.css',
	'/js/materialize.min.js',
	'/js/script.js',
	'/img/bg.png',
	'/img/bg-hp.png',
	'/img/bg-tablet.png',
	'/img/lengger.png',
	'/img/sejarah.jpg',
	'/img/sikunir.jpg',
	'/component/kesenian-card.js',
	'/component/sejarah-card.js',
	'/component/pariwisata-card.js'
];

self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
})

self.addEventListener('activate', function(event){
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName){
					if(cacheName != CACHE_NAME){	
						console.log("ServiceWorker: cache " + cacheName + " dihapus");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
})

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request, {cacheName:CACHE_NAME})
		.then(function(response) {
			if(response){
				console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
				return response;
			}
			
			console.log("ServiceWorker: Memuat aset dari server: ", event.request.url);
			return fetch(event.request);
		})
	);
});

