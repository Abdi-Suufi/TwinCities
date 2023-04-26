<?php
// Connect to the database using PDO
$servername = "localhost";
$username = "yourusername";
$password = "yourpassword";
$dbname = "yourdatabase";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Retrieve data for Manchester and Wuhan
$sql = "SELECT cities.name as city, landmarks.name as landmark, landmarks.description, landmarks.image_url, landmarks.date_added
        FROM cities
        INNER JOIN landmarks ON cities.id = landmarks.city_id
        WHERE cities.name IN ('Manchester', 'Wuhan')
        ORDER BY landmarks.date_added DESC
        LIMIT 10";
$result = $conn->query($sql);

// Format the data into an RSS feed
header("Content-Type: application/rss+xml; charset=ISO-8859-1");

echo '<?xml version="1.0" encoding="ISO-8859-1" ?>
<rss version="2.0">
<channel>
<title>Cities and Landmarks</title>
<link>http://www.example.com</link>
<description>A list of cities and their landmarks</description>';

while($row = $result->fetch(PDO::FETCH_ASSOC)) {
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

$conn = null;
?>
