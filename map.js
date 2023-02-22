function initMap() {
  // Manchester Map
  const manchester = { lat: 53.483959, lng: -2.244644 };
  const mapOptions = {
    zoom: 12,
    center: manchester,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
  };

  const wuhan = { lat: 30.583332, lng: 114.283333 };
  const mapOptions2 = {
    zoom: 12,
    center: wuhan,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
  };
  const map = new google.maps.Map(document.getElementById('manchesterMap'), mapOptions);
  const map2 = new google.maps.Map(document.getElementById('wuhanMap'), mapOptions2)

  //Creating custom markers on the google map
  const manchesterpoint = new google.maps.Marker({
    position: manchester,
    map: map,
    title: "Manchester",
    animation: google.maps.Animation.DROP
  });

  const wuhanpoint = new google.maps.Marker({
    position: wuhan,
    map: map2,
    title: "Wuhan",
    animation: google.maps.Animation.DROP
  });


  const createMarker = (lat, lng, map, title, content) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      title: title,
      animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(marker, "click", function () {
      window.open(content, '_blank', 'width=700,height=600');
    });
  };

  createMarker(53.482888198445494, -2.2004014365317137, map, "ManCity Stadium Click for more information", "<h3>ManCity Stadium</h3><div id='infomarkerpic1'></div>");
  createMarker(53.47242932425202, -2.325088007881245, map, "Trafford Park Click for more information", "<h3>TraffordPark</h3><div id='infomarkerpic2'></div>");
  createMarker(53.46314742885288, -2.2913944951260934, map, "Trafford Stadium Click for more information", "<h3>TraffordStadium</h3><div id='infomarkerpic3'></div>");
  createMarker(53.466916686501506, -2.2339445236776556, map, "Manchester University Click for more information", "<h3>ManchesterUnviersity</h3><div id='infomarkerpic4'></div>")
  createMarker(53.50292324891882, -2.2337384007642465, map, "Museum of Transport Click for more information", "<h3>Museum of Transport</h3><div id='infomarkerpic5'></div>")

  const manchestercenterpointinfo = new google.maps.InfoWindow({ //Opens mini window when clicking on marker
    content: "<h3>Twitter API Insert</h3> <div id='manchestermarker'></div>", //idk how to id all pics the same without the pictures being tailored to the same filtered image

  })

  google.maps.event.addListener(manchesterpoint, "click", function () { //Adds marker to map
    manchestercenterpointinfo.open(map, manchesterpoint);
  });

  createMarker(30.607516958985308, 114.2995129047251, map2, "Jiefang Park Click for more information", "<h3>Jiefang Park</h3> <div id='infomarkerpic6'></div>")
  createMarker(30.58553766638162, 114.27121616405233, map2, "Zhongshan Park Click for more information", "<h3>Zhongshan Park</h3> <div id='infomarkerpic7'></div>")
  createMarker(30.6117019090396, 114.24900072516074, map2, "Technology Building Click for more information", "<h3>Technology Building</h3> <div id='infomarkerpic8'></div>")
  createMarker(30.567503767406887, 114.29131920092927, map2, "Longwang Pavilion Click for more information", "<h3>Longwang Pavilion</h3> <div id='infomarkerpic9'></div>")
  createMarker(30.591238272616856, 114.24302459419809, map2, "Menhzehu Park Click for more information", "<h3>Mengzehu Park</h3> <div id='infomarkerpic10'></div>")


  const wuhanpointinfo = new google.maps.InfoWindow({
    content: "<h3>Wuhan</h3> <div id='wuhanmarker'></div>",

  })
  google.maps.event.addListener(wuhanpoint, "click", function () { //Adds marker to map
    wuhanpointinfo.open(map2, wuhanpoint);
  });



  //center manchester marker
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=manchester&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get Manchester photo container
      const manchesterPhotosContainer = document.getElementById("manchestermarker");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=manchester&format=json&nojsoncallback=1`)
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
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=mancity&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get mancity container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic1");

      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=mancity&format=json&nojsoncallback=1`)
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
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Trafford_Park&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get Trafford Park photo container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic2");
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Trafford_Park&format=json&nojsoncallback=1`)
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
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Trafford_Stadium&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get trafford stadium photo container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic3");
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Trafford_Stadium&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const manchesterPhotosContainer = document.getElementById("infomarkerpic3");
          const photo = data.photos.photo[0];
          if (photo && photo.farm) {
            const img = document.createElement("img");
            img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            manchesterPhotosContainer.appendChild(img);
          } else {
            console.error("Error: idk how to fix this");
          }
        })

    })

  //marker5 manchester university
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=ManchesterUniversity&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get yet another Manchester photo container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic4");
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=ManchesterUniversity&format=json&nojsoncallback=1`)
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
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Museum_of_Transport&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get yet another Manchester photo container
      const manchesterPhotosContainer = document.getElementById("infomarkerpic5");
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Museum_of_Transport&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const manchesterPhotosContainer = document.getElementById("infomarkerpic5");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          manchesterPhotosContainer.appendChild(img);
        })

    })

  //center wuhan marker
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=china&format=json&nojsoncallback=1`) //Tags search for china rather than the city wuhan due to covid pics lol
    .then(response => response.json())
    .then(data => {
      // Get the wuhan photos container
      const wuhanPhotosContainer = document.getElementById("wuhanmarker");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=china&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const wuhanPhotosContainer = document.getElementById("wuhanmarker");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          wuhanPhotosContainer.appendChild(img);
        })
    })

  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Jiefang_Park&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get the wuhan photos container
      const Jiefang_ParkPhotosContainer = document.getElementById("infomarkerpic6");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Jiefang_Park&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const Jiefang_ParkPhotosContainer = document.getElementById("infomarkerpic6");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          Jiefang_ParkPhotosContainer.appendChild(img);
        })
    })

  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Zhongshan_Park&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      const Zhongshan_ParkPhotosContainer = document.getElementById("infomarkerpic7");
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Zhongshan_Park&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const Zhongshan_ParkPhotosContainer = document.getElementById("infomarkerpic7");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          Zhongshan_ParkPhotosContainer.appendChild(img);
        })
    })

  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Technology_Building&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      const Technology_BuildingPhotosContainer = document.getElementById("infomarkerpic8");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Technology_Building&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const Technology_BuildingPhotosContainer = document.getElementById("infomarkerpic8");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          Technology_BuildingPhotosContainer.appendChild(img);
        })
    })

  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Longwang&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get the wuhan photos container
      const LongwangPhotosContainer = document.getElementById("infomarkerpic9");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Longwang&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(data => {
          const LongwangPhotosContainer = document.getElementById("infomarkerpic9");
          const photo = data.photos.photo[0];
          const img = document.createElement("img");
          img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          LongwangPhotosContainer.appendChild(img);
        })
    })

  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=wuhanpark&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      // Get the wuhan photos container
      const Mengzehu_ParkPhotosContainer = document.getElementById("infomarkerpic10");
      // Gets a single photo
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=wuhanpark&format=json&nojsoncallback=1`)
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