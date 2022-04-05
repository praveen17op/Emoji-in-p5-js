let x = 150,
  y = 150;
background(255, 255, 255);
push();
translate(x, y);

rotate(TWO_PI);

//face
ellipse(0, 0, 135, 150);
//ears
arc(-30, -70, 60, 80, 2.39, 4.45);
arc(30, -70, 60, 80, 5, 0.759);
arc(-50, -70, 60, 80, 5, 6.2);
arc(50, -70, 60, 80, 3.2, 4.45);
//nose and mouth
arc(0, 0, 120, 120, 07, 2.4);
arc(0, 15, 23, 40, 1, 2.1);
//eyes
ellipse(-25, -10, 40, 75);
ellipse(25, -10, 40, 75);
//left moustache
line(-25, 35, -95, 0);
line(-25, 40, -98, 30);
line(-25, 45, -95, 60);
//right moustache
line(25, 35, 95, 0);
line(25, 40, 92, 30);
line(25, 45, 95, 60);
//pupils
fill(0, 0, 0);
ellipse(-25, -10, 20, 75);
ellipse(25, -10, 20, 75);
//ear
triangle(-55, -54, -40, -100, -28, -80);
triangle(55, -54, 40, -100, 25, -80);

pop();
