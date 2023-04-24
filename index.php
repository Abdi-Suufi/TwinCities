<!DOCTYPE html>
<!--HTML comment -->
<!--specifies that the document is written in HTML5  -->
<html lang="en">
    <!-- HTML tag  -->
<head>
   <!--The <head> tag in HTML is used to contain metadata about an HTML document, such as the title, scripts, styles, and other information that is not displayed on the page itself. -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twin Cities Project: Manchester | Wuhan</title>
    <link rel="stylesheet" href="css/bootstrap.css">
  <!--The link tag tells the browser where to find the CSS file, which is specified in the href attribute, and the rel attribute indicates that it is a stylesheet. -->
    <script src="js/bootstrap.bundle.js"></script>
  <!-- This is a script tag in HTML that is used to include an external JavaScript file in an HTML document. -->
  <link rel="page icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/1527/1527807.png">
  <!-- This is an HTML link tag that is used to specify the favicon for a web page.  -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpHvJ3OmlFeu3pJ3kcGMlR1860aQSepLo"></script>
  <!-- HTML script tag that loads the Google Maps JavaScript API into an HTML document  -->
  <script src="map.js"></script>
  <!-- HTML script tag that links to an external JavaScript file named "map.js" and loads it into an HTML document.  -->
  <style>
  nav {
    margin-bottom: 10px;
  }
   .btn {
    margin: 4px;
   }

    #manchesterMap {
    /* setting the margin of 0 auto, width of 500px and height of 300px of the Manchester map and along side with a 1px solid gray border */
    margin: 0 auto;
    width: 500px;
    height: 300px;
  }
  
  #wuhanMap {
   /* setting the margin of 0 auto, width of 500px and height of 300px of the Wuhan map and along side with a 1px solid gray border */
    margin: 0 auto;
    width: 500px;
    height: 300px;
  }
  h3 {
    color: red;
  }
  /*Temporary outline */
  #manchester-weather-box {
    border: 3px solid black;
    margin: 4px;
  }

  #wuhan-weather-box {
    border: 3px solid black;
    margin: 4px;
  }

  #manchester-description-box {
    margin-left: 4px;
  }

  #wuhan-description-box {
    margin-left: 4px;
  }
 </style>
<!-- The <head> tag in HTML is used to contain metadata about an HTML document, such as the title, scripts, styles, and other information that is not displayed on the page itself  -->

<!-- Styling the aesthetics of the ("col"umn) class-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="index.php">Home</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="weather.php">Weather</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Landmarks.php">Landmarks</a>
        </li>
      </ul>
    </div>
  </nav>
  
</head>
<body>

<!-- <a type="button" href="flickr.php"
class="btn btn-outline-dark btn-md">flickr temporary</a> -->

<div class="row">
<div class="col">
    <div class="container my-5">
        <div class="row justify-content-center">
          <div class="center">
            <h1> Manchester</h1>
            <!--HTML header tag that displays a level one heading on the web page. The text "Manchester" is wrapped in the h1 tags, which denote the largest and most important heading level in HTML. -->
            </div>
            <div  id="manchester-description-box">
            <p> Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry. The revitalised Salford Quays dockyards now house the Daniel Libeskind-designed Imperial War Museum North and the Lowry cultural centre.</p>
            <!--  HTML paragraph tag that displays a block of text on the web page. The text describes Manchester as a major city in the northwest of England with a rich industrial heritage, and mentions some of the city's historical and cultural attractions.  -->
            <div id='manchesterMap'></div>
            <!-- HTML div tag that creates a container element with an id attribute set to "manchesterMap". -->
          </div>
</div>
</div>
</div>
<div class="col" id="manchester-weather-box">
<div class="container my-5">
  <div class="row justify-content-center">
  <h1>Weather</h1>
  </div>
</div>
</div>
</div>

<div class="row">
<div class="col">
    <div class="container my-5">
        <div class="row justify-content-center">
          <div class="center">
            <h1> Manchester</h1>
            <!--HTML header tag that displays a level one heading on the web page. The text "Manchester" is wrapped in the h1 tags, which denote the largest and most important heading level in HTML. -->
            </div>
            <div  id="wuhan-description-box">
            <p> Wuhan, the sprawling capital of Central China’s Hubei province, is a commercial center divided by the Yangtze and Han rivers. The city contains many lakes and parks, including expansive, picturesque East Lake. Nearby, the Hubei Provincial Museum displays relics from the Warring States period, including the Marquis Yi of Zeng’s coff in and bronze musical bells from his 5th-century B.C. tomb.</p>
            <!--  HTML paragraph tag that displays a block of text on the web page. The text describes Manchester as a major city in the northwest of England with a rich industrial heritage, and mentions some of the city's historical and cultural attractions.  -->
            <div id='wuhanMap'></div>
            <!-- HTML div tag that creates a container element with an id attribute set to "manchesterMap". -->
          </div>
</div>
</div>
</div>
<div class="col" id="wuhan-weather-box">
<div class="container my-5">
  <div class="row justify-content-center">
  <h1>Weather</h1>
  </div>
</div>
</div>
</div>

    <div class="container my-5">
    <div class="row justify-content-center">
    <button type="button" class="btn btn-outline-dark">View Manchester Map</button>
    <script>
      /* the opening tag for a script element in HTML. The script element is used to embed or reference client-side scripts, such as JavaScript, on a web page.*/
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=manchester&format=json&nojsoncallback=1`)
    /*  the fetch() function in JavaScript to make a network request to the Flickr API to retrieve photos tagged with "Manchester".*/
    </script>
      <!-- This ends the JavaScript code block that was started earlier with the <script> -->
    <button type="button" class="btn btn-outline-dark">View Wuhan Map</button>
    <script>
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Wuhan&format=json&nojsoncallback=1`)
          /* the fetch() function to make a network request to the Flickr API to retrieve photos tagged with "Wuhan"*/
    </script>
    </div>
</div>
<div class="card" style="width: 18rem;"> 
  <div class="card bg-dark text-white">
    <img src="https://www.orphanednation.com/wp-content/uploads/2018/12/DSC_8830-1024x678-1024x678.jpg" alt="wuhan-tower">
    <div class="card-body">
      <h5 class="card-title">**FLICKR API POI Name**</h5>
      <p class="card-text">**POI Description**</p>
      <a href="landmarks.php" class="btn btn-outline-light">Landmark Info</a>
    </div>
  </div>
  </div>

  <div class="card" style="width: 18rem;"> 
    <div class="card bg-dark text-white">
    <div class="card-body">
      <h5 class="card-title">**OpenWeatherAPI Metadata**</h5>
      <p class="card-text">**Weather Description**</p>
      
      <body onload="initMap()">
      <a href="weather.php" class="btn btn-outline-light">Weather Info</a>
    </div>
    </div>
  </div>
</body>
</html>
 <!-- This ends the HTML document by closing the <html> tag that was opened at the beginning of the document. -->