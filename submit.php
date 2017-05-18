<?php
require 'phpmailer/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Set AuthType
$mail->AuthType = 'XOAUTH2';
//User Email to use for SMTP authentication - Use the same Email used in Google Developer Console
$mail->oauthUserEmail = "info@progressivedental.com";
//Obtained From Google Developer Console
$mail->oauthClientId = "587;136342347263-vddijck40n8e6ri3vknqt2puffhslv4v.apps.googleusercontent.com";
//Obtained From Google Developer Console
$mail->oauthClientSecret = "7ASRQK_az4qVT8e2p7oc5aCs";
//Obtained By running get_oauth_token.php after setting up APP in Google Developer Console.
//Set Redirect URI in Developer Console as [https/http]://<yourdomain>/<folder>/get_oauth_token.php
// eg: http://localhost/phpmail/get_oauth_token.php
//$mail->oauthRefreshToken = "RANDOMCHARS-----DWxgOvPT003r-yFUV49TQYag7_Aod7y0";
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission

//Set who the message is to be sent from
$mail->setFrom('info@progressivedental.com', 'Progressive Dental');
//Set an alternative reply-to address
//Set who the message is to be sent to
$mail->addAddress('veronica@progressivedental.com', 'Veronica Makowski');
$mail->addAddress('gracie@progressivedental.com', 'Gracie Kovacik');
$mail->addAddress('john.a@progressivedental.com', 'John Aloia');
//Set the subject line
$mail->Subject = 'Catalyst: Lead Submission from: ' . ucwords($_POST['name']);
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$message = '<p style="font-family:\'interstate-light\',Arial,sans-serif,Helvetica;font-size:18px;color:#036fa9;line-height:1;font-style:normal">New Lead Submission</p><ul>';
foreach($_POST as $key => $value) {
  $message .= '<li>' . ucwords($key) . ': ' . ucwords($value) . "</li>\n\n";
}
$message .= '</ul>';
$mail->msgHTML($message);
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';
//Attach an image file

//send the message, check for errors
if (!$mail->send()) {
    $status = 'error';
} else {
    $status = 'success';
}
echo $mail->ErrorInfo;
