var nextButton = false;
var switcher1 = true;
var switcher2 = true;
var switcher3 = true;
var QAChanged = false;
var timeLimit = 300;
var curTime = 0;
var curQA = 1;
var btnLabel = "다음";
var A = new Array();
var collect = new Array();
for(var i = 1; i<11 ; i++)
{collect[i] = "F";}
var type = "정답:";
var isWrite = "공백";
var finalChack = false;
var area = 40.4;

function BackGround()
{
	draw.paint("#FFFFFF", 0, 0, 800, 600);
	
	draw.image("image/logo.png", 0, 0);
	draw.text("문제풀이", 90, 50, "#000000", '30px Arial');
	draw.paint("#555555", 0, 70, 800, 2);
	draw.text("*측면의 문제 선택란을 통해 해답을 재 입력할 수 있습니다.", 10, 105, "#aaaaaa", '15px Arial');
	draw.text("Time", 600, 105, "#000000", '20px Arial');
	draw.paint("#555555", 0, 120, 800, 2);
	draw.image("image/choice.png", 600, 122, 800, 600);
	draw.text("문제 선택란", 638, 161, "#222222", '25px Arial');
	draw.image("image/q.png", 82, 232);
	draw.image("image/a.png", 82, 402);
}

function odject()
{
	draw.text(type, 90, 430, "#000000", '20px Arial');
	
	draw.text(": " + timeLimit + " sec", 646, 105, "#000000", '20px Arial');
	
	draw.text(""+curQA+"번 문제.", 82, 210, "#000000", '25px Arial');
	
	draw.text(question[curQA], 90, 315, "#333333", '25px Arial');
	
	if(nextButton)
	{
		draw.image("image/btndown.png", 448, 512);
		draw.text(btnLabel, 467, 540, "#cccccc", '18px Arial');
	}
	else
	{
		draw.image("image/button.png", 448, 512);
		draw.text(btnLabel, 467, 540, "#000000", '18px Arial');
	}
	
	for(i=1;i<11;i++)
	{
		var j = 0;
		var color;
		if(i == 10)
		j = 9;
		if(i == curQA)
		color = "#000000";
		else
		color = "#939393";
		
		draw.text(""+i+"번 문제.", 651 - j, 173 + 41 * i, color, '25px Arial');
	}
	
}

function active()
{
	if(QAChanged)
	{	
		if(A[curQA] != null)
		document.getElementById("text").value = A[curQA];
		else
		document.getElementById("text").value = "정답:";
		QAChanged = false;
	}
	
	type = document.getElementById("text").value;
	
	if(master.point(input.clickX, input.clickY, 82, 402, 82 + 442, 402 + 89) && input.button && switcher3)
	{
		switcher3 = false;
		document.getElementById("text").value = "|";
		document.getElementById("text").setSelectionRange(0,1); 
		document.getElementById("text").focus();
	}
	
	
	if(frame.count/60 >= 1)
	{
		frame.count = 0;
		--timeLimit;
	}
	
	if(curQA >= 10)
	btnLabel = "제출";
	else
	btnLabel = "다음";
	
	if(master.point(input.clickX, input.clickY, 548, 537, 548 + 76, 537 + 40) && input.button)
	{
		nextButton = true;

		
		if(switcher1 && curQA <= 10)
		{
			switcher1 = false;
			A[curQA] = document.getElementById("text").value;
			if(A[curQA] == answer[curQA])
			collect[curQA] = "T";
			else
			collect[curQA] = "F";
			++curQA;
			QAChanged = true;
		}
		if(curQA > 10)
		{
			finalChack = confirm('제출하시겠습니까?');
			input.button = false;
			curQA = 10;
		}
		if(finalChack)
		{
			
			var numSplit = "" + questNum[1] +"/"+ questNum[2] +"/"+ questNum[3] +"/"+ questNum[4] +"/"+ questNum[5] +"/"+ questNum[6] +"/"+ questNum[7] +"/"+ questNum[8] +"/"+ questNum[9] +"/"+ questNum[10];
			var colSplit = "" + collect[1] + "/" + collect[2] + "/" + collect[3] + "/" + collect[4] + "/" + collect[5] + "/" + collect[6] + "/" + collect[7] + "/" + collect[8] + "/" + collect[9] + "/" + collect[10];

			
			toPHP(numSplit,colSplit);
			//location.replace("result/result.html");
		}
	}
	else
	{
		nextButton = false;
	}
	
	
	if(master.point(input.clickX, input.clickY, 700, 203, 900, 600) && input.button&& switcher2)
	{
		curQA = Math.floor((input.clickY - 203)/area + 0.8);
		QAChanged = true;
		switcher2 = false;
	}
	
	if(!input.button)
	{
		switcher1 = true;
		switcher2 = true;
		switcher3 = true;
	}
}