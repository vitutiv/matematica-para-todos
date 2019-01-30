var runAnimation = localStorage['liteMode'] == 'true' || $(document).ready(function () {
  function setOpts(standard, user) {
    if (typeof user === 'object') {
      for (var key in user) {
        standard[key] = user[key];
      }
    }
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function drawRotatedShape(shape, x, y, width, height, degrees, color, direction) {

    // first save the untranslated/unrotated context
    context.save();

    context.beginPath();
    // move the rotation point to the center of the rect
    context.translate(x + width / 2, y + height / 2);
    // rotate the rect
    if (direction == 'clockwise') {
      context.rotate(degrees * Math.PI / 180);
    } else {
      context.rotate(-(degrees * Math.PI / 180));
    }

    context.fillStyle = color;
    context.lineWidth = 3;

    // draw the rect on the transformed context
    // Note: after transforming [0,0] is visually [x,y]
    //       so the rect needs to be offset accordingly when drawn
    switch (shape) 
    {
        case 0:
          context.arc(-width , -height , width , 0, Math.PI * 2, true);
          context.fill();
        break;
      default:
        nLados = shape;
        var size = width;
        for (var side = 0; side < nLados + 1; side++) {
          context.lineTo(x + size * Math.cos(side * 2 * Math.PI / nLados), y + size * Math.sin(side * 2 * Math.PI / nLados));
        }
        context.fill();
    }

    // restore the context to its untranslated/unrotated state
    context.stroke();
    context.restore();

  }

  // Initialise an empty canvas and place it on the page
  var canvas = document.getElementById("geometric");
  var context = canvas.getContext("2d");

  $(canvas).attr('width', $(canvas).width()).attr('height', $(canvas).height());
  $('.accent').height($(canvas).height());

  $(window).resize(function () {
    $(canvas).attr('width', $(canvas).width()).attr('height', $(canvas).height());
    $('.accent').height($(canvas).height());
  });

  //$(canvas).width($(window).width());

  var particles = {},
    particleIndex = 0,
    settings;

  // Set up a function to create multiple particles
  function Particle(x, y) {
    // Establish starting positions and velocities
    this.x = x;
    this.y = y;

    // Determine original X-axis speed based on setting limitation
    this.vx = Math.floor(randomNumber(0, 5));
    this.vy = Math.floor(randomNumber(0, 5));

    this.size = Math.floor(randomNumber(settings.minSize, settings.maxSize));

    this.rotation = Math.floor(randomNumber(0, 180));

    if (randomNumber(0, 100) > 50) {
      this.rotationDirection = 'clockwise';
    } else {
      this.rotationDirection = 'counter-clockwise';
    }

    this.shape = settings.shapes[randomNumber(0, settings.shapes.length)];

    // Add new particle to the index
    // Object used as it's simpler to manage that an array
    particleIndex++;
    particles[particleIndex] = this;
    this.id = particleIndex;

    this.life = 0;
    this.maxLife = 10000;
  }

  // Some prototype methods for the particle's "draw" function
  Particle.prototype.draw = function () {
    // this.x +=  1;
    this.y += settings.gravity * Math.floor(randomNumber(1, 2));

    // Adjust for gravity
    this.vy += settings.gravity * Math.floor(randomNumber(0.5, 8));

    // Age the particle
    this.life++;

    if (this.rotation == 'clockwise') {
      this.rotation += settings.rotationVelocity;
    } else {
      this.rotation -= settings.rotationVelocity;
    }


    // If Particle is old, it goes in the chamber for renewal
    if (this.life >= this.maxLife) {
      delete particles[this.id];
    }

    // Create the shapes
    var size = this.size;
    context.clearRect(canvas.width, canvas.height, canvas.width, canvas.height);
    //context.beginPath();
    context.fillStyle = settings.color;
    //context.rect(this.x,this.y, size, size);
    drawRotatedShape(this.shape, this.x, this.y, size, size, this.rotation, settings.color, this.rotationDirection);
    //context.closePath();

    //context.fill();

    /*    if(settings.rotation == true) {
          context.rotate(this.rotation);
        }*/


  };

  function shapify(preset) {
    switch (preset) {
      case 'math':
        settings = {
          density: 10,
          velocity: 1,
          //startingX: canvas.width / 2,
          //startingY: canvas.height / 4,
          gravity: -0.6,
          color: 'rgba(0,0,0,0.3)',
          maxSize: 100,
          minSize: 15,
          rotation: true,
          rotationVelocity: 0.1,
          shapes: [0, 3, 4, 5, 6, 7, 8 , 9 , 10]
        };
        break;
    }
    for (var i = 0; i < settings.density; i++) {
      new Particle(Math.floor(randomNumber(0, canvas.width)), Math.floor(randomNumber(0, canvas.height)));
    }
    for (var p in particles) {
      particles[p].draw();
    }
    setInterval(function () {
      context.fillStyle = "#ededed";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the particles
      for (var i = 0; i < settings.density; i++) {
        if (Math.random() > 0.999) {
          // Introducing a random chance of creating a particle
          // corresponding to an chance of 1 per second,
          // per "density" value
          new Particle(Math.floor(randomNumber(0, canvas.width)), (canvas.height + 70));
        }
      }

      for (var p in particles) {
        particles[p].draw();
      }
    }, 30);
  }

  shapify('math');
});