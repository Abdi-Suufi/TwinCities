<!DOCTYPE html>
//This code creates an HTML document with a title "Landmarks" and an empty div element with an id of landmarkName
//It also includes JavaScript code that extracts the value of the name parameter from the URL query string and sets it as the content of the div element.
<html>
<head>
  <title>Landmarks</title>
</head>
<body>
  <div id="landmarkName"></div>
  
  <script>
    const urlParams = new URLSearchParams(window.location.search);
    const landmarkName = urlParams.get('name');

    document.getElementById('landmarkName').innerHTML = landmarkName;
  </script>
</body>
</html>
