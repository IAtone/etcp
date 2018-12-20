<?php
  header("Content-type:text/html;charset=utf-8");
  date_default_timezone_get('Asia/Shanghai');
//   强制的报错机制；
  ini_set('display_errors','On');
  error_reporting(E_ALL);
//   判断当前PHP版本
  // if(version_compare("5.5",PHP_VERSION,">")){
  //     die('<h1>当前环境不符合系统要求："'.PHP_VERSION.'"</h1>');
  // }

  define('DB_HOST','sqld-gz.bcehost.com');
  define('DB_NAME',"QaziCuqxFvtPVXXametu");
  define('DB_USER',"da2920f392e84f73bb1834855039f6f5");
  define('DB_PASSWORD','c8b94d33af2740ec9cedfc4f4866356e');

  $conn = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
  mysqli_query($conn,"set character set utf-8");
  mysqli_query($conn,"set names utf8");
  if($conn->connect_error){
      die('数据库连接失败'.$conn->connect_error);
  }else{
      echo "数据库连接成功";
  }
  
  
