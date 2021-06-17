class Iron{
	constructor(x,y)
	{
	var options={
restitution:0.3,
friction:3,
density:30
	}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(x, y,70,70, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("orange")
			rect(0,0,this.x,this.y)
			

			pop()
	}

}