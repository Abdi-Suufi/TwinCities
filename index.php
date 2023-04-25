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
    body {
      background-image: url("https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg");
      object-fit: cover;
      background-attachment: fixed;
      background-color: rgba(0,0,0,0.1);
      background-blend-mode: lighten;
      overflow-x: hidden;
    }

    h1 {
      color: grey;
    }

    nav {
      margin-bottom: 10px;
      top: 0;
      position: fixed;
    }
    .btn {
      margin: 4px;
    }

    #manchesterMap {
      /* setting the margin of 0 auto, width of 500px and height of 300px of the Manchester map and along side with a 1px solid gray border */
      margin: 0 auto;
      width: 500px;
      height: 300px;
      box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
    }
    
    #manchesterMap:hover {
      transform: scale(1.05);
    }
    #wuhanMap {
    /* setting the margin of 0 auto, width of 500px and height of 300px of the Wuhan map and along side with a 1px solid gray border */
      margin: 0 auto;
      width: 500px;
      height: 300px;
      box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
    }
    h3 {
      color: red;
    }

    #wuhan-weather-box {
      border: 3px solid black;
      margin: 4px;
    }

    #manchester-description-box {
      margin-left: 4px;
      background-color: white; 
      box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
    }

    #wuhan-description-box {
      margin-left: 4px;
      background-color: white; 
      box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
    }

    .card:hover{
      transform: scale(1.05);
      transition: 0.2s;
    }
  </style>
</head>
<!-- The <head> tag in HTML is used to contain metadata about an HTML document, such as the title, scripts, styles, and other information that is not displayed on the page itself  -->

<body onload="initMap()">
<!-- Styling the aesthetics of the ("col"umn) class-->
<div class="fixed-top">
  <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top">
    <a class="navbar-brand" href="index.php" style="margin-left: 2px;">Home</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link black" href="weather.php">Weather</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Landmarks.php">Landmarks</a>
        </li>
      </ul>
    </div>
  </nav>
</div>

<!-- <a type="button" href="flickr.php"
class="btn btn-outline-dark btn-md">flickr temporary</a> -->

<div class="row">
<div class="col">
    <div class="container my-5" id="manchester-info-box">
        <div class="row justify-content-center">
          <div class="center">
            <h1> Manchester</h1>
            <!--HTML header tag that displays a level one heading on the web page. The text "Manchester" is wrapped in the h1 tags, which denote the largest and most important heading level in HTML. -->
            </div>
            <div  id="manchester-description-box">
            <p> Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry. The revitalised Salford Quays dockyards now house the Daniel Libeskind-designed Imperial War Museum North and the Lowry cultural centre.</p>
            </div>
            <!--  HTML paragraph tag that displays a block of text on the web page. The text describes Manchester as a major city in the northwest of England with a rich industrial heritage, and mentions some of the city's historical and cultural attractions.  -->
            <div id='manchesterMap'></div>
            <!-- HTML div tag that creates a container element with an id attribute set to "manchesterMap". -->
          
</div>
</div>
</div>
</div>

<div class="row">
<div class="col">
    <div class="container my-5" id="wuhan-info-box">
        <div class="row justify-content-center">
          <div class="center">
            <h1> Wuhan</h1>
            <!--HTML header tag that displays a level one heading on the web page. The text "Manchester" is wrapped in the h1 tags, which denote the largest and most important heading level in HTML. -->
            </div>
            <div  id="wuhan-description-box">
            <p> Wuhan, the sprawling capital of Central China’s Hubei province, is a commercial center divided by the Yangtze and Han rivers. The city contains many lakes and parks, including expansive, picturesque East Lake. Nearby, the Hubei Provincial Museum displays relics from the Warring States period, including the Marquis Yi of Zeng’s coff in and bronze musical bells from his 5th-century B.C. tomb.</p>
            </div>
            <!--  HTML paragraph tag that displays a block of text on the web page. The text describes Manchester as a major city in the northwest of England with a rich industrial heritage, and mentions some of the city's historical and cultural attractions.  -->
            <div id='wuhanMap'></div>
            <!-- HTML div tag that creates a container element with an id attribute set to "manchesterMap". -->
          
</div>
</div>
</div>
</div>

<div class="row" style="margin-bottom: 30px;">
<div class="card mx-auto" style="width: 18rem;"> 
  <div class="card bg-dark text-white">
    <img src="https://www.orphanednation.com/wp-content/uploads/2018/12/DSC_8830-1024x678-1024x678.jpg" alt="wuhan-tower">
    <div class="card-body">
      <h5 class="card-title">Landmarks</h5>
      <p class="card-text">Click button below to view information about each landmark on each map</p>
      <a href="landmarks.php" class="btn btn-outline-light">Landmark Info</a>
    </div>
  </div>
</div>

  <div class="card mx-auto" style="width: 18rem;"> 
  <div class="card bg-dark text-white">
    <img src="https://www.orphanednation.com/wp-content/uploads/2018/12/DSC_8830-1024x678-1024x678.jpg" alt="wuhan-tower">
    <div class="card-body">
      <h5 class="card-title">Weather</h5>
      <p class="card-text">Click button below to view weather details for both Manchester and Wuhan.</p>
      <a href="weather.php" class="btn btn-outline-light">Weather Info</a>
    </div>
  </div>
  </div>
  </div>
</body>
</html>
 <!-- This ends the HTML document by closing the <html> tag that was opened at the beginning of the document. -->