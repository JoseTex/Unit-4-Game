$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)

  $('#randomNumber').text(Random);

  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
 
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
$('#finalTotal').text(0)

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1, num2, num3, num4 = Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

function drive(){
alert("YOU'VE COLLECTED ALL THE CARS!!!");
alert("Now Go For A Drive!")
  wins++; 
  $('#numberWins').text(wins);
  reset();
}

function loser(){
alert ("YOU'VE CRASHED ALL THE CARS!!!!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          
          if (userTotal == Random){
          drive();
        }
          else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
          drive();
        }
          else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

          if (userTotal == Random){
          drive();
        }
          else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          drive();
        }
          else if ( userTotal > Random){
          loser();
        }
  });   
}); 