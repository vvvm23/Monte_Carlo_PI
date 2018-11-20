let radius = 1
let nb_points = 0
let nb_in = 0
let pi_approx = 0
let draw_scale = 200
let circle_centre_x = 300
let circle_centre_y = 300

function setup() {
  createCanvas(1000, 1000);
  background(255);
  stroke(0);
  fill(255);
  rect(circle_centre_x - radius*draw_scale, circle_centre_y - radius*draw_scale, 2*radius*draw_scale, 2*radius*draw_scale)
  ellipse(circle_centre_x, circle_centre_y, radius*2*draw_scale, radius*2*draw_scale)
  fill(0);
  frameRate(144);
}

function draw() {
  let coordinates = generate_point()
  let x = coordinates[0];
  let y = coordinates[1];
  ellipse(x*draw_scale + circle_centre_x, y*draw_scale + circle_centre_y, 1, 1)
}

function generate_point() {
  let coordinates = [random(-radius, radius), random(-radius, radius)]
  nb_points = nb_points + 1
  if (in_circle(coordinates)) {
    nb_in = nb_in + 1
  }
  pi_approx = 4 * nb_in / nb_points
  pi_error = (Math.abs(PI - pi_approx)/PI) * 100

  if (nb_points % 5 == 0) {
    document.getElementById("pi_display").innerHTML = "Approx. Pi = " + pi_approx;
    document.getElementById("pi_error").innerHTML = "Error = " + pi_error + "%";
  }

  return coordinates
}

function in_circle(coordinates) {
  if (Math.sqrt(Math.pow(coordinates[0], 2) + Math.pow(coordinates[1], 2)) < radius) {
    return true
  }
  return false
}
