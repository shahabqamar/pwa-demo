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

self.addEventListener("push", function(e) {
  var body;

  if (e.data) {
    body = e.data.text();
  } else {
    body = "Push message no payload";
  }

  var options = {
    body: body,
    icon: "images/icon.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: "foo",
        title: "goto foo"
      },
      {
        action: "bar",
        title: "goto bar"
      }
    ]
  };
  e.waitUntil(
    self.registration.showNotification("Hungry for apples?", options)
  );
});
