window.addEventListener("load", LoopSet, false);

var StateLoop;
var loadDone = false;


function GetDataImage()
{
image.addI("image/background.jpg");
image.addI("image/logo.png");
image.addI("image/white.jpg");
image.addI("image/choice.png");
image.addI("image/q.png");
image.addI("image/a.png");
image.addI("image/button.png");
image.addI("image/btndown.png");
image.addI("patch");
}

function LoopSet()
{	
	var FPS = 60;
	
	frame = new FrameBase(FPS);
	draw = new DrawBase("PlayScreen", 800, 600);
	input = new InputBase(800, 600);
	
	loadDone = GetDataImage();
	
	StateLoop = setInterval(PlayState, 1000/FPS);
}

function PlayState()
{	
	frame.set("start");
	BackGround();
	active();
	odject();
}