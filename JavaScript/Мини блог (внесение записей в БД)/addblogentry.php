<?php
header('Content-Type: text/xml; charset=windows-1251');
$filename = 'blog.xml';
$rawBlog = file_get_contents($filename);

$xml = new SimpleXmlElement($rawBlog);

$entry = $xml->entries->addChild("entry");
$entry->addChild("date", $_REQUEST["date"]);
$entry->addChild("body", stripslashes($_REQUEST["body"]));

 if($_REQUEST["img"] != "")
  $entry->addChild("img", $_REQUEST["img"]);

$file = fopen($filename, 'w');
fwrite($file, $xml->asXML());
fclose($file);

echo file_get_contents($filename);

?>