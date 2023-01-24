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

  const manchestercenterpointinfo = new google.maps.InfoWindow({ //Opens mini window when clicking on marker
    content: "<h3>Twitter API Insert</h3> <div id='manchestermarker'></div>", //idk how to id all pics the same without the pictures being tailored to the same filtered image

  })

  google.maps.event.addListener(manchesterpoint, "click", function () { //Adds marker to map
    manchestercenterpointinfo.open(map1, manchesterpoint);
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

  google.maps.event.addListener(marker1, "click", function () { 
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

  google.maps.event.addListener(marker2, "click", function () { 
    infowindow2.open(map1, marker2);
  });

  const marker3 = new google.maps.Marker({
    position: { lat: 53.46314742885288, lng: -2.2913944951260934},
    map: map1,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow3 = new google.maps.InfoWindow({
    content: "<h3>TraffordStadium</h3><div id='infomarkerpic3'></div>",

  });

  google.maps.event.addListener(marker3, "click", function () { 
    infowindow3.open(map1, marker3);
  });

  const marker4 = new google.maps.Marker({
    position: { lat: 53.466916686501506, lng: -2.2339445236776556 },
    map: map1,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow4 = new google.maps.InfoWindow({
    content: "<h3>ManchesterUnviersity</h3><div id='infomarkerpic4'></div>",

  });

  google.maps.event.addListener(marker4, "click", function () { 
    infowindow4.open(map1, marker4);
  });

  const marker5 = new google.maps.Marker({
    position: { lat: 53.50292324891882, lng: -2.2337384007642465 },
    map: map1,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow5 = new google.maps.InfoWindow({
    content: "<h3>Museum of Transport</h3><div id='infomarkerpic5'></div>",
  });

  google.maps.event.addListener(marker5, "click", function () { 
    infowindow5.open(map1, marker5);
  });

  //key used for flickrapi for both maps
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
  
  //marker4 trafford stadium
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Trafford_Stadium&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get yet another Manchester photo container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic3");
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Trafford_Stadium&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const manchesterPhotosContainer = document.getElementById("infomarkerpic3");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          manchesterPhotosContainer.appendChild(img);
        })
        
    })

  //marker5 manchester university
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=ManchesterUniversity&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get yet another Manchester photo container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic4");
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=ManchesterUniversity&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const manchesterPhotosContainer = document.getElementById("infomarkerpic4");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          manchesterPhotosContainer.appendChild(img);
        })
        
    })

  //marker6 idk yet
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Museum_of_Transport&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get yet another Manchester photo container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic5");
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Museum_of_Transport&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const manchesterPhotosContainer = document.getElementById("infomarkerpic5");
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

  const marker6 = new google.maps.Marker({
    position: { lat: 30.607516958985308, lng: 114.2995129047251 },
    map: map2,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  

  const infowindow6 = new google.maps.InfoWindow({
    content: "<h3>Jiefang Park</h3> <div id='infomarkerpic6'></div>"
  });

  google.maps.event.addListener(marker6, "click", function () { //Adds marker to map
    infowindow6.open(map2, marker6);
  });

  const marker7 = new google.maps.Marker({
    position: { lat: 30.58553766638162, lng: 114.27121616405233 },
    map: map2,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow7 = new google.maps.InfoWindow({
    content: "<h3>Zhongshan Park</h3> <div id='infomarkerpic7'></div>",
    shouldFocus: false
  });

  google.maps.event.addListener(marker7, "click", function () { //Adds marker to map
    infowindow7.open(map2, marker7);
  });

  const marker8 = new google.maps.Marker({
    position: { lat: 30.61170190903964,  lng: 114.24900072516074 },
    map: map2,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow8 = new google.maps.InfoWindow({
    content: "<h3>Technology Building</h3> <div id='infomarkerpic8'></div>",
    shouldFocus: false
  });

  google.maps.event.addListener(marker8, "click", function () { //Adds marker to map
    infowindow8.open(map2, marker8);
  });

  const marker9 = new google.maps.Marker({
    position: { lat: 30.567503767406887,  lng: 114.29131920092927 },
    map: map2,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow9 = new google.maps.InfoWindow({
    content: "<h3>Longwang Pavilion</h3> <div id='infomarkerpic9'></div>",
    shouldFocus: false
  });

  google.maps.event.addListener(marker9, "click", function () { //Adds marker to map
    infowindow9.open(map2, marker9);
  });

  const marker10 = new google.maps.Marker({
    position: { lat: 30.591238272616856, lng: 114.24302459419809 },
    map: map2,
    title: "Click for more information",
    animation: google.maps.Animation.DROP
  })

  const infowindow10 = new google.maps.InfoWindow({
    content: "<h3>Mengzehu Park</h3> <div id='infomarkerpic10'></div>",
    shouldFocus: false
  });

  google.maps.event.addListener(marker10, "click", function () { //Adds marker to map
    infowindow10.open(map2, marker10);
  });
  
  //center wuhan marker
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=china&format=json&nojsoncallback=1`) //Tags search for china rather than the city wuhan due to covid pics lol
    .then(response => response.json())
    .then(data => {
      // Get the wuhan photos container
      const wuhanPhotosContainer = document.getElementById("wuhanmarker");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=china&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const wuhanPhotosContainer = document.getElementById("wuhanmarker");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          wuhanPhotosContainer.appendChild(img);
        })
    })

  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Jiefang_Park&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get the wuhan photos container
      const Jiefang_ParkPhotosContainer = document.getElementById("infomarkerpic6");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Jiefang_Park&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const Jiefang_ParkPhotosContainer = document.getElementById("infomarkerpic6");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          Jiefang_ParkPhotosContainer.appendChild(img);
        })
    })
  
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Zhongshan_Park&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      const Zhongshan_ParkPhotosContainer = document.getElementById("infomarkerpic7");
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Zhongshan_Park&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const Zhongshan_ParkPhotosContainer = document.getElementById("infomarkerpic7");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          Zhongshan_ParkPhotosContainer.appendChild(img);
        })
    })

    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Technology_Building&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      const Technology_BuildingPhotosContainer = document.getElementById("infomarkerpic8");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Technology_Building&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const Technology_BuildingPhotosContainer = document.getElementById("infomarkerpic8");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          Technology_BuildingPhotosContainer.appendChild(img);
        })
    })

    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Longwang&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get the wuhan photos container
      const LongwangPhotosContainer = document.getElementById("infomarkerpic9");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=Longwang&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const LongwangPhotosContainer = document.getElementById("infomarkerpic9");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          LongwangPhotosContainer.appendChild(img);
        })
    })

    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=wuhanpark&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get the wuhan photos container
      const Mengzehu_ParkPhotosContainer = document.getElementById("infomarkerpic10");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FlickrapiKey}&tags=wuhanpark&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const Mengzehu_ParkPhotosContainer = document.getElementById("infomarkerpic10");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          Mengzehu_ParkPhotosContainer.appendChild(img);
        })
    })
  
}