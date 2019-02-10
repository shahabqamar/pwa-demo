$(function() {
  $.getJSON(
    "https://newsapi.org/v2/top-headlines?country=au&apiKey=eccb97bb5d134e7891299fea81bb590a",
    function(data) {
      var items = [];
      $.each(data.articles, function(key, val) {
        var imageUrl = val.urlToImage;
        if (imageUrl === null)
          imageUrl = "https://via.placeholder.com/500x500.png?text=No+Image";
        items.push(
          '<div class="col-md-4">' +
            '<div class="card mb-4 shadow-sm">' +
            '<div class="card-img-top news-image" style="background-image: url(' +
            imageUrl +
            ')"></div>' +
            '<div class="card-body">' +
            '<h5 class="card-title">' +
            val.title +
            "</h5>" +
            '<p class="card-text">' +
            val.description +
            "</p>" +
            '<div class="d-flex justify-content-between align-items-center">' +
            '<div class="btn-group">' +
            '<a href="' +
            val.url +
            '" class="btn btn-sm btn-outline-secondary">Read more</a>' +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>"
        );
      });
      $("#news-container").append(items.join(""));
    }
  );
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw-workbox.js").then(function() {
    console.log("Service worker registered!");
  });

  if ("Notification" in window) {
    Notification.requestPermission(function(status) {
      console.log("Notification permission status:", status);
    });
  }
}
