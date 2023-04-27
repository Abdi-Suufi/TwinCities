<?php
require 'connect.php';

// Retrieve data from the database
$stmt = $pdo->query("SELECT * FROM sys.Landmarks");
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Create new XML document
$xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><rss></rss>');
$xml->addAttribute('version', '2.0');

// Add required elements to the XML document
$channel = $xml->addChild('Landmark');

// Loop through the data and add each item to the XML document
foreach ($rows as $row) {
    $item = $channel->addChild('item');
    $item->addChild('Name', $row['name']);
    $item->addChild('City',  $row['city']);
    $item->addChild('Country', $row['country']);
    $item->addChild('Description', $row['description']);
    $item->addChild('Year_Built', $row['year_built']);
    $item->addChild('Architect', $row['architect']);
}

// Output the XML document
header('Content-Type: application/xml; charset=UTF-8');
echo $xml->asXML();
?>
