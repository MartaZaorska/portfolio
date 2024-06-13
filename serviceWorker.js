const cacheName = "v1";

const cacheAssets = [
  "index.html",
  "/css/main.css",
  "/js/data.js",
  "/js/handlers.js",
  "/js/main.js",
  "/js/TypeText.js",
  "/js/UI.js",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css",
  "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap",
];

self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service Worker: Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cache) => cache !== cacheName)
          .map((cache) => caches.delete(cache))
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
