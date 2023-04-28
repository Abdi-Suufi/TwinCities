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
  const createMarker = (lat, lng, map, title, content, img) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      title: title,
      animation: google.maps.Animation.DROP,
    });

//The URL is constructed using a template literal that includes a path to a PHP file landmarks.php, and a query string parameter name whose value is the encoded content of a variable content
//The PHP file landmarks.php is likely responsible for rendering the HTML for the page that displays information about the selected landmark
    google.maps.event.addListener(marker, "click", function () {
      console.log(`/landmarks/${encodeURIComponent(content, img)}`)
      window.location.href = `landmarks.php?name=${encodeURIComponent(content, img)}`;
    });
  };
//created markers for several locations on the map using the createMarker function
//Each marker has a title and content associated with it, which can be clicked to redirect to a specific page with more information about the location.

  createMarker(53.482888198445494, -2.2004014365317137, map, "ManCity Stadium Click for more information", "ManCity Stadium", "<div id='infomarkerpic1'></div>");
  createMarker(53.47242932425202, -2.325088007881245, map, "Trafford Park Click for more information", "Trafford Park","<div id='infomarkerpic2'></div>");
  createMarker(53.46314742885288, -2.2913944951260934, map, "Trafford Stadium Click for more information", "Trafford Stadium","<div id='infomarkerpic3'></div>");
  createMarker(53.466916686501506, -2.2339445236776556, map, "Manchester University Click for more information", "Manchester Unviersity","<div id='infomarkerpic4'></div>")
  createMarker(53.50292324891882, -2.2337384007642465, map, "Museum of Transport Click for more information", "Museum of Transport","<div id='infomarkerpic5'></div>")

  const manchestercenterpointinfo = new google.maps.InfoWindow({ 
    content: "<h3>Manchester</h3> <div id='manchestermarker'></div>",

  })
  //adds an event listener to the manchesterpoint marker that listens for a click event
  //When the marker is clicked, the manchestercenterpointinfo info window is opened and displayed at the location of the manchesterpoint marker on the map
  google.maps.event.addListener(manchesterpoint, "click", function () { //Adds marker to map
    manchestercenterpointinfo.open(map, manchesterpoint);
  });
//creating markers for several locations in Wuhan, China using the createMarker function and adding a click listener to each of the markers to display more information about the location
// also creates an InfoWindow object named wuhanpointinfo that will display information about Wuhan when a user clicks on the city marker  
  createMarker(30.607516958985308, 114.2995129047251, map2, "Jiefang Park Click for more information", "Jiefang Park", "<div id='infomarkerpic6'></div>")
  createMarker(30.58553766638162, 114.27121616405233, map2, "Zhongshan Park Click for more information", "Zhongshan Park","<div id='infomarkerpic7'></div>")
  createMarker(30.6117019090396, 114.24900072516074, map2, "Technology Building Click for more information", "Technology Building", "<div id='infomarkerpic8'></div>")
  createMarker(30.567503767406887, 114.29131920092927, map2, "Longwang Pavilion Click for more information", "Longwang Pavilion", "<div id='infomarkerpic9'></div>")
  createMarker(30.591238272616856, 114.24302459419809, map2, "Menhzehu Park Click for more information", "Mengzehu Park", "<div id='infomarkerpic10'></div>")


  const wuhanpointinfo = new google.maps.InfoWindow({
    content: "<h3>Wuhan</h3> <div id='wuhanmarker'></div>",

  })
  // setting up an event listener for the "click" event on the marker for the city of Wuhan on the map
  //When the marker is clicked, the associated info window, wuhanpointinfo, will be displayed on the map at the location of the marker.
  google.maps.event.addListener(wuhanpoint, "click", function () { //Adds marker to map
    wuhanpointinfo.open(map2, wuhanpoint);
  });

}
