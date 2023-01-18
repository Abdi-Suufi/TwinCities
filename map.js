function initMap() {
  // Manchester Map
  var manchester = { lat: 53.483959, lng: -2.244644 };

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

  const manchesterpointinfo = new google.maps.InfoWindow({
    content: "<h3>Twitter API Insert</h3> <div id='manchestermarker'></div>",

  })

  google.maps.event.addListener(manchesterpoint, "click", function () { //Adds marker to map
    manchesterpointinfo.open(map1, manchesterpoint);
  });

  const marker1 = new google.maps.Marker({
    position: { lat: 53.482888198445494, lng: -2.2004014365317137 },
    map: map1,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow1 = new google.maps.InfoWindow({
    content: "<h3>ManCity Stadium</h3><div id='infomarkerpic1'>",
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
    content: "<h3>TraffordPark</h3><div id='infomarkerpic2'></div>",

  });

  google.maps.event.addListener(marker2, "click", function () { //Adds marker to map
    infowindow2.open(map1, marker2);
  });

  const FlickrapiKey = "3cb96aaa4b49a42b1f147d5bfcf4d9e2";
  //center manchester marker
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=manchester&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get a Manchester photo container
      const manchesterPhotosContainer = document.getElementById("manchestermarker");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=manchester&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const manchesterPhotosContainer = document.getElementById("manchestermarker");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          manchesterPhotosContainer.appendChild(img);
        })
    })
  //marker2 for manchester map
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=mancity&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get another Manchester photo container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic1");
      
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=mancity&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const manchesterPhotosContainer = document.getElementById("infomarkerpic1");
          const photo = data.photos.photo[0];// Gets a single photo
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          manchesterPhotosContainer.appendChild(img);
        })
        
    })
  //marker3 trafford
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Trafford_Park&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get yet another Manchester photo container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic2");
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Trafford_Park&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const manchesterPhotosContainer = document.getElementById("infomarkerpic2");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          manchesterPhotosContainer.appendChild(img);
        })
        
    })

  //  ***Wuhan Map***
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

  const wuhanpointinfo = new google.maps.InfoWindow({
    content: "<h3>Wuhan</h3> <div id='wuhanmarker'></div>",

  })
  google.maps.event.addListener(wuhanpoint, "click", function () { //Adds marker to map
    wuhanpointinfo.open(map1, wuhanpoint);
  });

  const marker3 = new google.maps.Marker({
    position: { lat: 30.607516958985308, lng: 114.2995129047251 },
    map: map2,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  

  const infowindow3 = new google.maps.InfoWindow({
    content: "<h3>Jiefang Park</h3> <div id='infomarkerpic3'></div>"
  });

  google.maps.event.addListener(marker3, "click", function () { //Adds marker to map
    infowindow3.open(map2, marker3);
  });

  const marker4 = new google.maps.Marker({
    position: { lat: 30.58553766638162, lng: 114.27121616405233 },
    map: map2,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow4 = new google.maps.InfoWindow({
    content: "<h3>Zhongshan Park</h3> <div id='infomarkerpic4'></div>",
    shouldFocus: false
  });

  google.maps.event.addListener(marker4, "click", function () { //Adds marker to map
    infowindow4.open(map2, marker4);
  });
  
  //center wuhan marker
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=china&format=json&nojsoncallback=1`) //Tags search for china rather than the city wuhan due to covid pics lol
    .then(response => response.json())
    .then(data => {
      // Get the wuhan photos container
      const manchesterPhotosContainer = document.getElementById("wuhanmarker");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=china&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const manchesterPhotosContainer = document.getElementById("wuhanmarker");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          manchesterPhotosContainer.appendChild(img);
        })
    })

  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Jiefang_Park&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get the wuhan photos container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic3");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Jiefang_Park&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const manchesterPhotosContainer = document.getElementById("infomarkerpic3");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          manchesterPhotosContainer.appendChild(img);
        })
    })
  
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Zhongshan_Park&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get the wuhan photos container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic4");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Zhongshan_Park&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const manchesterPhotosContainer = document.getElementById("infomarkerpic4");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          manchesterPhotosContainer.appendChild(img);
        })
    })
  
}
