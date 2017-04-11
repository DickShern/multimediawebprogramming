<?php
// header("Content-type:text/xml");
// header("Access-Control-Allow-Origin: *"); //for compatibility with other devices

$host = "localhost";
$username = "root";
$password = "";
$dbname = "cosmetics";

//Connect to db and query student table items.
$dbconn = mysqli_connect($host, $username, $password, $dbname);

$query = mysqli_query($dbconn, "SELECT * FROM products");

//Create SimpleXMLElement instance.

$xml = new SimpleXMLElement('<COSMETICS/>');

while($row = mysqli_fetch_array($query)){
	$product = $xml->addChild("PRODUCT");
	$product->addChild("PICTURE", $row["pic_url"]);
	$product->addChild("CATEGORY", $row["category"]);
	$product->addChild("SELLER", $row["seller_name"]);
	$product->addChild("PRODUCTNAME", $row["product_name"]);
}

mysqli_close($dbconn);

echo $xml->asXML("CosmeticProducts.xml");
?>