const static = "notusknot-crypto"
const assets = [
    "./",
    "./index.html",
    "../assets/style.css",
    "./app.js",
    "../assets/image.jpg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(static).then(cache => {
      cache.addAll(assets)
    })
  )
})
