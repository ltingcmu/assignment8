
// animated gradient background source: https://codepen.io/quasimondo/pen/lDdrF

var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.001;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);





// window.onload = function() {
//   var btn = document.querySelector('.mouse-cursor-gradient-tracking')
//   btn.onmousemove = function(e) {
//     var x = e.pageX - btn.offsetLeft
//     var y = e.pageY - btn.offsetTop
//     btn.style.setProperty('--x', x + 'px')
//     btn.style.setProperty('--y', y + 'px')
//   }

window.onload = function() {
  AOS.init();
}



  // https://codepen.io/GreenSock/pen/BaarZmV

  // var scene = new THREE.Scene();
  // document.addEventListener( 'mousemove', onMouseMove, false );
  // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  // var mouseX;
  // var mouseY;

  // var renderer = new THREE.WebGLRenderer();
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // document.getElementById("sphere").appendChild( renderer.domElement );

  // window.addEventListener("resize", function() {
  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize( window.innerWidth, window.innerHeight );
  // });

  // var distance = Math.min(200, window.innerWidth / 4);
  // var geometry = new THREE.Geometry();

  // for (var i = 0; i < 1600; i++) {

  //   var vertex = new THREE.Vector3();

  //   var theta = THREE.Math.randFloatSpread(360); 
  //   var phi = THREE.Math.randFloatSpread(360); 

  //   vertex.x = distance * Math.sin(theta) * Math.cos(phi);
  //   vertex.y = distance * Math.sin(theta) * Math.sin(phi);
  //   vertex.z = distance * Math.cos(theta);

  //   geometry.vertices.push(vertex);
  // }
  // var particles = new THREE.Points(geometry, new THREE.PointsMaterial({color: 0xff44ff, size: 2}));
  // particles.boundingSphere = 50;


  // var renderingParent = new THREE.Group();
  // renderingParent.add(particles);

  // var resizeContainer = new THREE.Group();
  // resizeContainer.add(renderingParent);
  // scene.add(resizeContainer);

  // camera.position.z = 400;

  // var animate = function () {
  //   requestAnimationFrame( animate );
  //   renderer.render( scene, camera );
  // };
  // var myTween;
  // function onMouseMove(event) {
  //   if(myTween)
  //     myTween.kill();
    
  //   mouseX = ( event.clientX / window.innerWidth ) * 2 - 1;
  //   mouseY = - ( event.clientY / window.innerHeight ) * 2 + 1;
  //   myTween = gsap.to(particles.rotation, {duration: 0.1, x: mouseY*-1, y: mouseX});
  //   //particles.rotation.x = mouseY*-1;
  //   //particles.rotation.y = mouseX;
  // }
  // animate();

  // // Scaling animation
  // var animProps = {scale: 1, xRot: 0, yRot: 0};
  // gsap.to(animProps, {duration: 10, scale: 1.3, repeat: -1, yoyo: true, ease: "sine", onUpdate: function() {
  //   renderingParent.scale.set(animProps.scale,animProps.scale,animProps.scale);
  // }});

  // gsap.to(animProps, {duration: 120, xRot: Math.PI * 2, yRot: Math.PI * 4, repeat: -1, yoyo: true, ease: "none", onUpdate: function() {
  //   renderingParent.rotation.set(animProps.xRot,animProps.yRot,0);
  // }});


// }










