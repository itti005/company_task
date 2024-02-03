<?php
// Read JSON file
$jsonFile = file_get_contents('mumbai_news.json'); // Replace with the correct path to your JSON file
$data = json_decode($jsonFile, true);

// Return JSON data
header('Content-Type: application/json');
echo json_encode($data['channel']['item']);
?>
