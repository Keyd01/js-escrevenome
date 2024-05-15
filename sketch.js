function setup() {
    createCanvas(400, 400);
    background("#FF076E")
  }
  
  function draw() {
    stroke("rgb(0,165,103)");
    fill("rgb(95,2,155)");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }