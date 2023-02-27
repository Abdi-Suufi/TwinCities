function initMap() {
  //This code initializes a Google Map with specific options and sets the default center location to Manchester.
  const manchester = { lat: 53.483959, lng: -2.244644 };
  const mapOptions = {
    zoom: 12,
    center: manchester,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
  };
//This part of the code sets up the options for the Google Maps display of Wuhan, China
//The const wuhan variable sets the latitude and longitude of Wuhan
//The const mapOptions2 variable defines the options for the map, including the zoom level, the center of the map 
  const wuhan = { lat: 30.583332, lng: 114.283333 };
  const mapOptions2 = {
    zoom: 12,
    center: wuhan,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
  };
  //These lines of code create two new Google Maps objects with the given options and assign them to the variables map and map2. 
  //The first map is created with the ID manchesterMap, and the second map is created with the ID wuhanMap.
  const map = new google.maps.Map(document.getElementById('manchesterMap'), mapOptions);
  const map2 = new google.maps.Map(document.getElementById('wuhanMap'), mapOptions2)

  //This creates a marker on the map with position at manchester location, assigns it to the map created earlier, gives it a title of "Manchester", and sets its animation to DROP which means the marker will drop onto the map when first loaded.
  const manchesterpoint = new google.maps.Marker({
    position: manchester,
    map: map,
    title: "Manchester",
    animation: google.maps.Animation.DROP
  });
//This code sets up a marker on the Wuhan map, indicating the location of Wuhan 
//It creates a new marker object using the google.maps.Marker constructor and sets its position to wuhan
//The marker is added to the map2 using the map option. 
//The title option sets the title for the marker, which will be displayed when the user hovers over the marker.
//The animation option sets the animation for the marker when it is dropped onto the map, in this case using the google.maps.Animation.DROP animation.
  const wuhanpoint = new google.maps.Marker({
    position: wuhan,
    map: map2,
    title: "Wuhan",
    animation: google.maps.Animation.DROP
  });

//This is a function that takes in latitude, longitude, a map object, a title, and content as parameters, and creates a marker on the map at the specified location
 //The marker is given a title and an animation. The function can be used to create markers on a map for various locations
  const createMarker = (lat, lng, map, title, content) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      title: title,
      animation: google.maps.Animation.DROP
    });
//The URL is constructed using a template literal that includes a path to a PHP file landmarks.php, and a query string parameter name whose value is the encoded content of a variable content
//The PHP file landmarks.php is likely responsible for rendering the HTML for the page that displays information about the selected landmark
    google.maps.event.addListener(marker, "click", function () {
      console.log(`/landmarks/${encodeURIComponent(content)}`)
      window.location.href = `landmarks.php?name=${encodeURIComponent(content)}`;
    });
  };
//created markers for several locations on the map using the createMarker function
//Each marker has a title and content associated with it, which can be clicked to redirect to a specific page with more information about the location.
// an info window with the manchestercenterpointinfo variable that contains a placeholder for Twitter API content.

  createMarker(53.482888198445494, -2.2004014365317137, map, "ManCity Stadium Click for more information", "ManCity Stadium");
  createMarker(53.47242932425202, -2.325088007881245, map, "Trafford Park Click for more information", "Trafford Park");
  createMarker(53.46314742885288, -2.2913944951260934, map, "Trafford Stadium Click for more information", "Trafford Stadium");
  createMarker(53.466916686501506, -2.2339445236776556, map, "Manchester University Click for more information", "Manchester Unviersity")
  createMarker(53.50292324891882, -2.2337384007642465, map, "Museum of Transport Click for more information", "Museum of Transport")

  const manchestercenterpointinfo = new google.maps.InfoWindow({ 
    content: "<h3>Twitter API Insert</h3> <div id='manchestermarker'></div>",

  })
  //adds an event listener to the manchesterpoint marker that listens for a click event
  //When the marker is clicked, the manchestercenterpointinfo info window is opened and displayed at the location of the manchesterpoint marker on the map
  google.maps.event.addListener(manchesterpoint, "click", function () { //Adds marker to map
    manchestercenterpointinfo.open(map, manchesterpoint);
  });
//creating markers for several locations in Wuhan, China using the createMarker function and adding a click listener to each of the markers to display more information about the location
// also creates an InfoWindow object named wuhanpointinfo that will display information about Wuhan when a user clicks on the city marker  
  createMarker(30.607516958985308, 114.2995129047251, map2, "Jiefang Park Click for more information", "Jiefang Park")
  createMarker(30.58553766638162, 114.27121616405233, map2, "Zhongshan Park Click for more information", "Zhongshan Park")
  createMarker(30.6117019090396, 114.24900072516074, map2, "Technology Building Click for more information", "Technology Building")
  createMarker(30.567503767406887, 114.29131920092927, map2, "Longwang Pavilion Click for more information", "Longwang Pavilion")
  createMarker(30.591238272616856, 114.24302459419809, map2, "Menhzehu Park Click for more information", "Mengzehu Park")


  const wuhanpointinfo = new google.maps.InfoWindow({
    content: "<h3>Wuhan</h3> <div id='wuhanmarker'></div>",

  })
  // setting up an event listener for the "click" event on the marker for the city of Wuhan on the map
  //When the marker is clicked, the associated info window, wuhanpointinfo, will be displayed on the map at the location of the marker.
  google.maps.event.addListener(wuhanpoint, "click", function () { //Adds marker to map
    wuhanpointinfo.open(map2, wuhanpoint);
  });


//This part of the code fetches data from the Flickr API to retrieve a photo related to Manchester, UK. 
//It then creates an img element and sets its src attribute to the URL of the retrieved photo, and appends it to an HTML element with the ID "manchestermarker", which is displayed in an info window when the Manchester marker is clicked on
  
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=manchester&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
     
      const manchesterPhotosContainer = document.getElementById("manchestermarker");
     
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
  //fetches photos from the Flickr API with a tag of "mancity" and displays the first photo in an image element.
  //The first fetch call retrieves data about photos with the tag "mancity". 
  //The second fetch call retrieves data about photos with the same tag, and then the code selects the first photo from the response and creates an image element with the source set to the URL of the selected photo. Finally, the image element is appended to a container element with the ID "infomarkerpic1".
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=mancity&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
   
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
  //code is using the Flickr API to search for photos tagged with "Trafford_Park" and display one of them on the Google Map info window associated with the "Trafford Park" marker
  //The first fetch call retrieves data for the Flickr photos tagged with "Trafford_Park", then the second fetch call retrieves more detailed data for the first photo in that list 
  //Once that photo data is available, an img element is created with its src attribute set to the URL of the photo, and then that img element is appended to the HTML element with the ID "infomarkerpic2", which is the div for the "Trafford Park" marker's photo container
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Trafford_Park&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
     
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

  //uses the Flickr API to search for photos with specific tags (in this case, "mancity", "Trafford_Park", and "Trafford_Stadium") and then display a single photo from the search results in an HTML container
  //Each fetch call to the API returns a JSON object containing information about the photos that match the search criteria
  //The code then extracts the URL of the first photo in the search results and creates an img element with that URL as the src attribute 
  //Finally, the code appends the img element to an HTML container on the webpage (specified by the getElementById method)
  //The code also includes some error handling in case the API call fails to return any photos or if there are issues with the photo URLs
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Trafford_Stadium&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
     
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
//This code fetches photos from Flickr that are tagged with "ManchesterUniversity", then appends the first photo to an HTML element with the ID "infomarkerpic4" in the webpage
//It does this by making two consecutive fetch requests to the Flickr API: the first fetches data about photos with the "ManchesterUniversity" tag, and the second fetches data about the first photo in the results of the first fetch
//If successful, the code creates an <img> element with the source URL of the first photo and appends it to the specified container element
  
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=ManchesterUniversity&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
     
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

//This code is using the Flickr API to search for photos with the tag "Museum_of_Transport", and then display the first photo in the response on the webpage
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Museum_of_Transport&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {

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

 //This code fetches photos from Flickr with the tag "china" and adds the first photo to a container with the ID "wuhanmarker"
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=china&format=json&nojsoncallback=1`) //Tags search for china rather than the city wuhan due to covid pics lol
    .then(response => response.json())
    .then(data => {
      
      const wuhanPhotosContainer = document.getElementById("wuhanmarker");
      
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
 //This code is using the Flickr API to search for photos tagged with "Jiefang_Park" and display the first photo in a container with the ID "infomarkerpic6"

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
//This code retrieves the first photo from Flickr that is tagged with "Zhongshan_Park"
//It sends a request to the Flickr API using the flickr.photos.search method and the tags parameter with the value "Zhongshan_Park"
//The API key is provided through the config.flickrApiKey variable.
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
//This code is using the Flickr API to find photos tagged with "Technology_Building"
//It first gets a list of matching photos using the flickr.photos.search method, and then displays the first photo in the list on the webpage by creating an img element with the photo's URL and adding it to a container on the webpage
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
//This code is using the Flickr API to find photos tagged with "Longwang"
//It first gets a list of matching photos using the flickr.photos.search method, and then displays the first photo in the list on the webpage by creating an img element with the photo's URL and adding it to a container on the webpage
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Longwang&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => {
      
      const LongwangPhotosContainer = document.getElementById("infomarkerpic9");
      
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
 //using the Flickr API to find photos tagged with "wuhanpark"
 //It first gets a list of matching photos using the flickr.photos.search method, and then displays the first photo in the list on the webpage by creating an img element with the photo's URL and adding it to a container on the webpage

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
