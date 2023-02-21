<!DOCTYPE html>
<!--HTML comment -->
  <!--specifies that the document is written in HTML5  -->
<html>
    <!-- HTML tag  -->
<link rel="stylesheet" href="styles.css">
  <!--The link tag tells the browser where to find the CSS file, which is specified in the href attribute, and the rel attribute indicates that it is a stylesheet. -->

<head>
  <!--The <head> tag in HTML is used to contain metadata about an HTML document, such as the title, scripts, styles, and other information that is not displayed on the page itself. -->
  <script src="config.js"></script>
      <!-- This is a script tag in HTML that is used to include an external JavaScript file in an HTML document. -->
  <title>Twin Cities: Manchester and Wuhan</title>
    <!-- This is the text that will appear in the browser's title bar or tab when the document is loaded. -->
  <link rel="page icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/1527/1527807.png">
    <!-- This is an HTML link tag that is used to specify the favicon for a web page.  -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpHvJ3OmlFeu3pJ3kcGMlR1860aQSepLo"></script>
    <!-- HTML script tag that loads the Google Maps JavaScript API into an HTML document  -->
  <script src="map.js"></script>
    <!-- HTML script tag that links to an external JavaScript file named "map.js" and loads it into an HTML document.  -->
</head>
    <!-- The <head> tag in HTML is used to contain metadata about an HTML document, such as the title, scripts, styles, and other information that is not displayed on the page itself  -->
<body onload="initMap()">
    <!-- HTML body tag of a web page and specifies that a JavaScript function called initMap() should be called when the web page has finished loading. -->
  <h1>Twin Cities: Manchester and Wuhan</h1>
    <!--HTML header tag that displays a level one heading on the web page. The text "Twin Cities: Manchester and Wuhan" is wrapped in the h1 tags, which denote the largest and most important heading level in HTML. -->
  <h2>Manchester, England</h2>
    <!-- HTML header tag that displays a level two heading on the web page. The text "Manchester, England" is wrapped in the h2 tags, which denote a secondary heading level in HTML.  -->
  <p>Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 
    18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the intera
    ctive Museum of Science & Industry. The revitalised Salford Quays dockyards now house the Daniel Libeskind-designed Imperial
     War Museum North and the Lowry cultural centre.</p>
    <!--  HTML paragraph tag that displays a block of text on the web page. The text describes Manchester as a major city in the northwest of England with a rich industrial heritage, and mentions some of the city's historical and cultural attractions.  -->
  <div id='manchesterMap'></div>
    <!-- HTML div tag that creates a container element with an id attribute set to "manchesterMap".   -->
  <h2>Wuhan, China</h2>
    <!--HTML header tag that displays a level two heading on the web page. The text "Wuhan, China" is wrapped in the h2 tags, which denote a secondary heading level in HTML.  -->
  <p>Wuhan, the sprawling capital of Central China’s Hubei province, is a commercial center divided by the Yangtze and Han rivers. The city contains many lakes and parks, 
    including expansive, picturesque East Lake. Nearby, the Hubei Provincial Museum displays relics from the Warring States period, including the Marquis Yi of Zeng’s coff
    in and bronze musical bells from his 5th-century B.C. tomb.</p>
    <!--HTML paragraph tag that displays a block of text on the web page. The text describes Wuhan as a sprawling commercial center in Central China's Hubei province, and mentions some of the city's geographical features and cultural attractions. -->
  <div id="wuhanMap"></div>

  <?php include 'weather.php'; ?>
</body>
    <!-- the closing HTML body tag, which marks the end of the body section of the web page. All visible content on a web page is contained within the body section.  -->
<script>
    /* the opening tag for a script element in HTML. The script element is used to embed or reference client-side scripts, such as JavaScript, on a web page.*/
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=manchester&format=json&nojsoncallback=1`)
    /*  the fetch() function in JavaScript to make a network request to the Flickr API to retrieve photos tagged with "Manchester".*/
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&tags=Wuhan&format=json&nojsoncallback=1`)
    /* the fetch() function to make a network request to the Flickr API to retrieve photos tagged with "Wuhan"*/
</script>
    <!-- This ends the JavaScript code block that was started earlier with the <script> -->

</html>
    <!-- This ends the HTML document by closing the <html> tag that was opened at the beginning of the document. -->
