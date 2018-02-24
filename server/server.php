<?php

include('conn.php');

if($_REQUEST['name']!=NULL){
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $college=$_REQUEST['college'];
    $department=$_REQUEST['department'];
    $age=$_REQUEST['age'];
    $why1=$_REQUEST['why1'];
    $why2=$_REQUEST['why2'];

    $sql = "INSERT INTO ca (name,email,college,department,age,why1,wh2)
    VALUES ('$name', '$email', '$college','$department','$age','$why1','$why2')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }



}




?>