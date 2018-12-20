<?php
include 'conn.php';

if(isset($_GET['parkName']) && $_GET['parkName']!=""){
	$parkName = $_GET['parkName'];
}else{
	$parkName = "";
}

if(isset($_GET['parkNumber']) &&  $_GET['parkNumber']!=""){
	$parkNumber = $_GET['parkNumber'];
}else{
	$parkNumber = 0;
}

if(isset($_GET['user']) && $_GET['user']!=""){
	$user = $_GET['user'];
}else{
	$user = "";
}

if(isset($_GET['tel']) && $_GET['tel']!=""){
	$tel = $_GET['tel'];
}else{
	$tel = "";
}

if(isset($_GET['email']) && $_GET['email']!=""){
	$email = $_GET['email'];
}else{
	$email = "";
}

if(isset($_GET['address']) && $_GET['address']!=""){
	$address = $_GET['address'];
}else{
	$address = "";
}

$sql = "INSERT INTO car(parkName,parkNumber,user,tel,email,address)VALUES('$parkName',$parkNumber,'$user','$tel','$email','$address')";
if(mysqli_query($conn,$sql)){
     echo 1; //添加成功返回1
 }else{
     echo $sql; //添加失败返回0
 }


//  if(isset($_POST['username']) && isset($_POST['password']) ){
//      $name = $_POST['username'];
//      $pass = sha1($_POST['password']);

//      $sql = "INSERT INTO users(username,password)VALUES('$name','$pass')";
//      if(mysqli_query($conn,$sql)){
//          echo '1'; //添加成功返回1
//      }else{
//          echo '0'; //添加失败返回0
//      }
//  }