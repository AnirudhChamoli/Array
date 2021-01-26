class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.array = [];
  }

  display() {
    var Positions = [this.body.position.x , this.body.position.y]
    this.array.push(Positions);
    // this.array = [[200,100],[205,110],[210,115]];

    //image(imgname, arr[0][0],arr[0][1]);
    //arr[1][0],arr[1][1]
    //arr[2][0],arr[2][1]

    for (var Index = 0; Index < this.array.length ; Index++)
    {
      image (this.smoke , this.array[Index][0] , this.array[Index][1])
    }

    super.display();
  }
}
