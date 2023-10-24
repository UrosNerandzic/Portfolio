<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset($_POST["send"])){
  $name = htmlentities($_POST['name']);
  $email = htmlentities($_POST['email']);
  $subject = htmlentities($_POST['subject']);
  $message = htmlentities($_POST['message']);


  $mail = new PHPMailer(true);
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'uros.nerandzic.portfolio@gmail.com';
  $mail->Password = 'yilbkciwyqkfvsoq';
  $mail->Port = 465;
  $mail->SMTPSecure = 'ssl';
  $mail->isHTML(true);
  $mail->setFrom($email, $name);
  $mail->addAddress('uros.nerandzic.portfolio@gmail.com');
  $mail->Subject = ("$email ($subject)");
  $mail->Body = $message;
  $mail->send();

  echo "<script>
  alert('Sent Successfully');
  document.location.href = 'index.php';
  </script>";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST["email"]) && !empty($_POST["email"])) {
      $email = $_POST["email"];
      if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
          require 'PHPMailerAutoload.php';
          $mail = new PHPMailer;
          $mail->setFrom($email);
          $mail->addAddress('uros.nerandzic.portfolio@gmail.com', 'UrosNerandzic');
          $mail->Subject = 'email address';
          $mail->Body = 'text email';
          if ($mail->send()) {
              echo 'The email was successfully sent.';
          } else {
              echo 'Email could not be sent: ' . $mail->ErrorInfo;
          }
      } else {
          echo "The email address entered is incorrect.";
      }
  } else {
      echo "You must enter an email address.";
  }
}
?>