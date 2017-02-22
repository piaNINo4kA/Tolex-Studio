<?php 

$name=strip_tags($_REQUEST[name]);
$phone=strip_tags($_REQUEST[phone]);
$title=strip_tags($_REQUEST[title]);
$to="Zamana.german@6499977.ru";
$subject="Новая заявка с Tolex tuning - ".$title;
$message=$name." - ".$phone;
$headers = "From: webm"."-f order".time()."@example.com";
mail($to,$subject,$message,$headers);

?>
