class Stone{
	constructor(x,y){
	
	var options={
restitution:0.8,
friction:0.9,
density:12

	}


		this.x=x;
		this.y=y;
        
	
		this.body=Bodies.rectangle(x, y,60,60, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("black")

            rect(0,0,this.x,this.y)
			

			pop()
	}

}