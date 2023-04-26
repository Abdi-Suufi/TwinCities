<html>
<title>Twin Cities Project: Manchester | Wuhan</title>
    <link rel="stylesheet" href="css/bootstrap.css"/>
  <!--The link tag tells the browser where to find the CSS file, which is specified in the href attribute, and the rel attribute indicates that it is a stylesheet. -->
    <script src="js/bootstrap.bundle.js"></script>
  <!-- This is a script tag in HTML that is used to include an external JavaScript file in an HTML document. -->
  <link rel="page icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/1527/1527807.png">

<h1 style="text-align:center" >Temporary flickr page</h1>

<a type="button" href="index.php"
  class="btn btn-outline-dark btn-md">Homepage</a>

<?php
$flickrApiKey = '3cb96aaa4b49a42b1f147d5bfcf4d9e2';

// Flickr API endpoint for searching photos
$url_base = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
$url_base .= '&api_key=' . $flickrApiKey;
$url_base .= '&page=1';
$url_base .= '&per_page=1';
$url_base .= '&format=json';
$url_base .= '&nojsoncallback=1';

// Array of points of interest and their corresponding tags and IDs
$points_of_interest = array(
    'Manchester' => array('tag' => 'manchester', 'id' => 'manchester'),
    'Trafford Park' => array('tag' => 'Trafford+Park', 'id' => 'Trafford-Park'),
    'ManCity Stadium' => array('tag' => 'ManCity+Stadium', 'id' => 'ManCity-Stadium'),
    'The University of Manchester' => array('tag' => 'university+of+manchester', 'id' => 'university-of-manchester'),
    'Museum of Transport' => array('tag' => 'Museum+Transport', 'id' => 'Museum-of-Transport'),
    'Trafford Stadium' => array('tag' => 'Old+Trafford', 'id' => 'Trafford-Stadium'),
    //wuhan images
    'Jiefang Park' => array('tag' => 'Jiefang+Park', 'id' => 'Jiefang+Park'),
    'Zhongshan Park' => array('tag' => 'Zhongshan+Park', 'id' => 'Zhongshan-Park'),
    'Technology Building' => array('tag' => 'Technology+Building', 'id' => 'Technology-Building'),
    'Longwang Pavilion' => array('tag' => 'Longwang', 'id' => 'Longwang-Pavilion'),
    //The tag is bugging out here
    'Mengzehu Park' => array('tag' => 'Mengzehu+Park', 'id' => 'Mengzehu-Park')
);

// Makes API requests and display photos in separate divs with unique IDs
foreach ($points_of_interest as $poi_name => $poi_data) {
    $url = $url_base . '&tags=' . $poi_data['tag'];
    $response = file_get_contents($url);
    $data = json_decode($response, true);
    $photo = $data['photos']['photo'][0];
    $photo_url = 'https://live.staticflickr.com/' . $photo['server'] . '/' . $photo['id'] . '_' . $photo['secret'] . '.jpg';
    //need to figure out how to get it to display into specific marker only
    //maybe ifelse statement
    echo '<div class="flickrimg" id="' . $poi_data['id'] . '"><h2>' . $poi_name . '</h2><img src="' . $photo_url . '" alt="' . $photo['title'] . '"></div>';
}
?>