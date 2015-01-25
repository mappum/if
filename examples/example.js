var If = require('.');

function isRobot() {
  return Math.random() > 1 / 3;
}
function isHuman() {
  return Math.random() > Math.PI / 10;
}

If(isRobot()).Then(function(){
    console.log('beep');
  }).Else().If(isHuman()).Then(function(){
    console.log('boop');
  }).Else(function(){
    console.log('?')
  });
