<?php

 // ++++++++++++++++++++++++++++++++++++
error_reporting(0);

  
 // configuration
 
$email_it_to = "francisco.prieto@stradasa.com, nestor.prieto@stradasa.com";

$error_message = "Por favor, complete el formulario primero";

$rnd=$_POST['rnd'];
$name=$_POST['name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$body=$_POST['body'];

  
if(!isset($rnd) || !isset($name) || !isset($email) || !isset($subject) || !isset($body)) {
	echo $error_message;
    die();
}


$subject = stripslashes($subject);
$email_from = $email;

$email_message = "Nuevo mensaje desde StradaSA Web<br><br>";
$email_message .= "Nombre: " . stripslashes($name) . "<br>";
$email_message .= "Email: " . $email_from . "<br>";
$email_message .="Fecha: ".date("d/m/Y")."<br>";
$email_message .= "Mensaje: " . stripslashes($body) . "<br>";
$email_message .="\n\n";

// Always set content-type when sending HTML email


$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8". "\r\n";
$headers .= 'From: "StradaSA" <web@stradasa.com>';

//$headers .= 'From: <'.$email_from.'>' . "\r\n";

mail($email_it_to,$subject,$email_message,$headers);



?>