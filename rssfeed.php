<?php
// Connect to the database
$host = '127.0.0.1';
$dbname = 'mySQL';
$username = 'root';
$password = 'password';

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve data for Manchester and Wuhan
$sql = "SELECT cities.name as city, landmarks.name as landmark, landmarks.description, landmarks.image_url, landmarks.date_added
        FROM cities
        INNER JOIN landmarks ON cities.id = landmarks.city_id
        WHERE cities.name IN ('Manchester', 'Wuhan')
        ORDER BY landmarks.date_added DESC
        LIMIT 10";
$result = mysqli_query($conn, $sql);

// Format the data into an RSS feed
header("Content-Type: application/rss+xml; charset=ISO-8859-1");

echo '<?xml version="1.0" encoding="ISO-8859-1" ?>
<rss version="2.0">
<channel>
<title>Cities and Landmarks</title>
<link>http://www.example.com</link>
<description>A list of cities and their landmarks</description>';

while($row = mysqli_fetch_assoc($result)) {
    $city = $row['city'];
    $landmark = $row['landmark'];
    $description = $row['description'];
    $image_url = $row['image_url'];
    $date_added = date("D, d M Y H:i:s O", strtotime($row['date_added']));

    echo "<item>
    <title>$landmark in $city</title>
    <link>http://www.example.com/$city/$landmark</link>
    <description><![CDATA[$description]]></description>
    <pubDate>$date_added</pubDate>
    <enclosure url=\"$image_url\" type=\"image/jpeg\" />
    </item>";
}

echo '</channel>
</rss>';

mysqli_close($conn);
?>

