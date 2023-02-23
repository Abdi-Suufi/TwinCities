<!DOCTYPE html>
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