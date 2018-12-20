<?php
	$servername = "sqld-gz.bcehost.com";
    $username = "da2920f392e84f73bb1834855039f6f5";
    $password = "c8b94d33af2740ec9cedfc4f4866356e";
    $flag=1;
 	//获取ajax数据
 	if (isset($_GET['province'])) {
 		$province=$_GET['province'];
 	}else{
 		$province="";
 	}
 	if (isset($_GET['city'])) {
 		$city=$_GET['city'];
 	}else{
 		$city="22";
 	}
	if (isset($_GET['parkname'])&&$_GET['parkname']!="") {
 		$parkname=$_GET['parkname'];
 	}else{
 		$flag=0;
 		echo "1";;
 	}
	if (isset($_GET['num'])&&$_GET['num']!="") {
 		$num=$_GET['num'];
 	}else{
 		$num=0;
 	}
	if (isset($_GET['contact'])) {
 		$contact=$_GET['contact'];
 	}else{
 		$contact="";
 	}
 	if (isset($_GET['phone'])&&$_GET['phone']!="") {
 		$phone=$_GET['phone'];
 	}else{
 		$flag=0;
 		echo "2";
 	}
 	if (isset($_GET['email'])) {
 		$email=$_GET['email'];
 	}else{
 		$email="";
 	}
 	if (isset($_GET['address'])) {
 		$address=$_GET['address'];
 	}else{
 		$address="";
 	}
	// 创建连接
    $conn = mysqli_connect($servername, $username, $password,"QaziCuqxFvtPVXXametu");
    // 检测连接
    if (!$conn) {
        die("连接失败: " . mysqli_connect_error());
    }
    //核对数据,车场名已存在则返回上一页。
    if($flag==1){
    	$sql = "SELECT * FROM parkinfo where parkname='".$parkname."'";
	    $result = mysqli_query($conn, $sql);
	    $row = mysqli_fetch_assoc($result);
	    if (mysqli_num_rows($result) > 0) {
	        echo '3';
	    }else{
	    	 //插入数据
		    $sql = "INSERT INTO parkinfo (province, city, parkname,num,contact,phone,email,address)
		    VALUES ('$province', '$city', '$parkname',$num,'$contact',$phone,'$email','$address')";
		    //显示数据
		    if ($conn->query($sql) === TRUE) {
		    	echo "4";
		        
		    } else {
		        echo "Error: " . $sql . "<br>" . $conn->error;
		    }
    	}
    }
    $conn->close();
?>
