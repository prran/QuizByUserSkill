function InputBase(width, height)
{
	this.KeyX = 0;
	this.KeyY = 200;
	this.clickX = 0;
	this.clickY = 0;
	this.button = false;
	
	this.SpdX = 10;
	this.SpdY = 10;
	//키보드를 통한 이동속도가 정의되어 있는 변수.
	
	this.KeyAddress = [];
	this.ClkAddress = new Array();
	for(var i = 0; i <= width; i++)
	{
		this.ClkAddress[i] = new Array();
	}
	
	this.SureMuti = true;
	
	this.check = 0;
	this.SubCheck = 0;
	this.MutiBugCheck = [];
	this.NumOfKeyPrs = 0;
	
	return this;
}

var input;


window.addEventListener("keydown", keydown, false);
function keydown(e)
{	
	if(input.SubCheck == e.keyCode)
		input.check = 0;
		input.SubCheck = 0;
	if(input.check != e.keyCode)
		input.NumOfKeyPrs++;
	input.check = e.keyCode;
	input.KeyAddress[e.keyCode] = true;
}

window.addEventListener("keyup", keyup, false);
function keyup(e)
{
	if(input.SubCheck != e.keyCode)
		input.NumOfKeyPrs--;
	input.SubCheck = e.keyCode;
	input.KeyAddress[e.keyCode] = false;
}

window.addEventListener("mousemove", mousemove);
function mousemove(e)
{
	input.clickX = e.clientX;
	input.clickY = e.clientY;
}

window.addEventListener("mousedown", buttondown);
function buttondown(e)
{
	input.button = true;
	input.clickX = e.clientX;
	input.clickY = e.clientY;
}

window.addEventListener("mouseup", buttonup);
function buttonup(e)
{
	input.button = false;
	input.clickX = e.clientX;
	input.clickY = e.clientY;
}