function LoadBase()
{
	this.file = new Array();
	this.FileName = new Array();
	
	this.CurLodFile = 0;
	this.TotLodFile = 0;
	
	this.LoadDone = false;

	return this;
}

var image = new LoadBase();

LoadBase.prototype.addI = function (FileName)
{	
	if(this.LoadDone == true)
	{
		this.CurLodFile = 0;
		this.TotLodFile = 0;
	
		this.LoadDone = false;
	}
	
	//if(this.file[0] != undefined)
		//this.file.pop();
		
	if(FileName != "patch")
	{
		this.TotLodFile ++;
		this.FileName.push(FileName);
	}
	
	else
	{
	
		for(var i = 0; i < this.TotLodFile; i++)
		{
			var emage = new Image();
			emage.src = this.FileName[i];
			emage.addEventListener("load", CompleteFileI, false);
			this.file.push({name: this.FileName[i], data: emage});
		
			delete emage;
		}
		
		this.FileName.pop();
		this.LoadDone = true;
		
		return;
	}
};

LoadBase.prototype.get = function(FileName)
{
	for(var i = 0; i < this.TotLodFile; i++)
	{		
		if(this.file[i].name == FileName)
			return this.file[i].data;
	}
	
	return undefined;
};

LoadBase.prototype.I = function(FileName)
{
	for(var i = 0; i < this.TotLodFile; i++)
	{
		if(this.file[i].name == FileName)
			return i;
	}
	
	return undefined;
};


function CompleteFileI()
{
	image.CurLodFile++;
};