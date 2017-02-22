<?php 

$name=strip_tags($_REQUEST[name]);
$phone=strip_tags($_REQUEST[phone]);
$to="Zamana.german@6499977.ru";
$subject="Новая заявка на обратный звонок";
$message=$name." - ".$phone;
$headers = "From: webm"."-f order".time()."@example.com";
mail($to,$subject,$message,$headers);

?>
