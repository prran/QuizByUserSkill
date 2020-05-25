<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8"/>
		<title>행운을 빕니다</title>
		<META HTTP-EQUIV="refresh" CONTENT="300">
		<script src="FrameWork\ScriptFile.js"></script>
		
		<?php include "getSQL.php"; ?>
		<script>
			var question = <?php echo json_encode($question) ?>;
			var answer = <?php echo json_encode($answer) ?>;
			var questNum = <?php echo json_encode($questNum) ?>;
		</script>
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script>
		function toPHP(str1, str2)
		{
			var data = new Object();
			data.num = str1;
			data.col = str2;
			var info = JSON.stringify(data);
			
    		$.ajax
    		({     
 				type: 'post',
 				url: 'setSQL.php',
 				contentType: 'application/json',
 				data: info,
				error: function(request,status,error)
				{alert("code = "+ request.status + " message = " + request.responseText + " error = " + error);},
 				success: function(data) 
 				{alert('통신성공!!');}
			});			
		}
		</script>
		
		<script src="object.js"></script>
		<script src="mainCanvas.js"></script>
	</head>
	
	<body background="image/background.jpg"><!-- 아무 이상 없음 -->
		
		<div style = "position: absolute; top: 25px; left: 100px">
		<textarea id="text" rows="5" cols="70" name="contents" style = "background-color:transparent; border:0">정답</textarea>
		</div>
		
		<div style = "position: absolute; top: 25px; left: 100px">
			<canvas id="PlayScreen" width="800" height="600">
				<p><b>이 글귀가 보이시는 분은 HTML5가 지원되지 않는 브라우저를 사용하고 계십니다.</b></p><!-- p는 엔터, b는 굵은글씨 -->
				<p><b>구글 크롬/파이어폭스 로 실행해 주시거나 인터넷익스프롤러를 최신버전으로 업데이트 해주세요!</b></p>
			</canvas>
		</div>
	</body>
</html>