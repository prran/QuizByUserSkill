<?php 

	$data = file_get_contents('php://input');
	$info = json_decode(stripcslashes($data),true);
	$num = $info['num'];
	$col = $info['col'];
	
	$mysqli = new mysqli('localhost', 'id7464950_mystell', 'crossier7', 'id7464950_aplus');
	
	date_default_timezone_set('Asia/Seoul');
	$mysqltime = date ("Y-m-d H:i:s", time());
	
	$query = "insert into result values('id','".$mysqltime."','".$num."' ,'".$col."')";

	mysqli_query($mysqli, $query);
	
	echo "string";
?>