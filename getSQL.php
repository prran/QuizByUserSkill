<?php

$question = array();
$questNum = array();
$answer = array();

$mysqli = new mysqli('localhost', 'id7464950_mystell', 'crossier7', 'id7464950_aplus');

$startQA = mt_rand(1, 5);//문제가 적을때 test전용으로 쓰는 렌덤뽑기


for($i = 1; $i<11; $i++,$startQA++)
{
	$query = "select pro_question, pro_answer from problem where pro_number=".$startQA;

	$result = mysqli_query($mysqli, $query);
	
	$arrayGet = mysqli_fetch_assoc($result);
	
	$question[$i] = $arrayGet['pro_question'];
	$answer[$i] = $arrayGet['pro_answer'];
	$questNum[$i] = $startQA;
}


?>