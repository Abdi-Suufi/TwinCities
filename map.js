function initMap() {
  // Manchester Map
  var manchester = { lat: 53.483959, lng: -2.244644 };
  let img = document.createElement("img");
  img.src = "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/40000/40504-Albert-Square.jpg";

  var map1 = new google.maps.Map(document.getElementById('manchesterMap'), {
    zoom: 12,
    center: manchester,
    mapTypeControl: false, //Gets rid of unnecessary stuff on the map
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false
  });

  //Creating custom markers on the google map
  var manchesterpoint = new google.maps.Marker({
    position: manchester,
    map: map1,
    title: "Manchester",
    animation: google.maps.Animation.DROP
  });

  const manchesterpointinfo = new google.maps.InfoWindow ({
    content: '<h3>Flicker API and Twitter<br> API  can probably go here</h3> <img id="infowindowimg" src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/40000/40504-Albert-Square.jpg"> '
  })

  google.maps.event.addListener(manchesterpoint, "click", function () { //Adds marker to map
    manchesterpointinfo.open(map1, manchesterpoint);
  });

  const marker1 = new google.maps.Marker({
    position: { lat: 53.47832441074729, lng: -2.272145749287349 },
    map: map1,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow1 = new google.maps.InfoWindow({
    content: "Needs updating",
  });

  google.maps.event.addListener(marker1, "click", function () { //Adds marker to map
    infowindow1.open(map1, marker1);
  });

  const marker2 = new google.maps.Marker({
    position: { lat: 53.47242932425202, lng: -2.325088007881245 },
    map: map1,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow2 = new google.maps.InfoWindow({
    content: '<h3>test test test</h3> <img id="infowindowimg" src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/40000/40504-Albert-Square.jpg"> ',
    
  });

  google.maps.event.addListener(marker2, "click", function () { //Adds marker to map
      infowindow2.open(map1, marker2);
    });

  // Wuhan Map
  var wuhan = { lat: 30.583332, lng: 114.283333 };
  var map2 = new google.maps.Map(document.getElementById('wuhanMap'), {
    zoom: 12,
    center: wuhan,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false
  });

  var wuhanpoint = new google.maps.Marker({
    position: wuhan,
    map: map2,
    title: "Wuhan",
    animation: google.maps.Animation.DROP
  });

  const marker3 = new google.maps.Marker({
    position: { lat: 30.571763480318264, lng: 114.25053489417029 },
    map: map2,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow3 = new google.maps.InfoWindow({
    content: "Needs updating",
  });

  google.maps.event.addListener(marker3, "click", function () { //Adds marker to map
    infowindow3.open(map2, marker3);
  });

  const marker4 = new google.maps.Marker({
    position: { lat: 30.56469311711552, lng: 114.32984612537149 },
    map: map2,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow4 = new google.maps.InfoWindow({
    content: "Needs updating",
    shouldFocus: false
  });

  google.maps.event.addListener(marker4, "click", function () { //Adds marker to map
    infowindow4.open(map2, marker4);
  });

}