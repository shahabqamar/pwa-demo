importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);

workbox.setConfig({ debug: true });

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.routing.registerRoute(
    new RegExp(".*"),
    workbox.strategies.networkFirst()
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
