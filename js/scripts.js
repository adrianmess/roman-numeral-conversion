//Business Logic
var numerals =  ["I", "V", "X", "L", "C", "D", "M"]
var numeralI = "I"
var rFour = "IV"
var rFive = "V"
var rNine = "IX"
var rTen = "X"
var rFifty = "L"
var rHundred = "C"
var rFiveHundred = "D"
var rThousand = "M"
var input = parseInt($("input#input").val());

function romanBasic(input){
  if (input === 1){
    return "I"
  } else if (input === 5){
    return "V"
  } else if (input === 10){
    return "X"
  } else if (input === 50){
    return "L"
  } else if (input === 100){
    return "C"
  } else if (input === 500){
    return "D"
  } else if (input === 1000){
    return "M"
  }
};
// debugger
function romanSubFive(input) {
  var output5 = ""
  for(var j = 0; j <input; j++) {
    if(input < 4){
      output5 +="I"
    } else if(input === 4){
      return rFour
    } else if (input===5){
      return rFive
    }
  }
  return output5
}
function romanToTen(input){
  var output10 = "V"
  for (var k = 5; k <input; k++){
    if(input >5 && input <9){
      output10+= "I"
    } else if(input === 9){
      output10 = "IX"
    } else if(input === 10){
      output10 = "X"
    }
  }
  return output10
}

function romanSubFifty(input){
  var output19 = "X"
  for (var n = 10; n < input; n++){
    if (input >10 && input < 14){
      output19 +="I"
    } else if(input === 14){
      return rTen + rFour
    } else if (input===5){
      return rTen + rFive
    } else if(input >15 && input <19){
      return rTen + rFive + output19
    } else if(input === 19){
      output19 = "XIX"
    } else if(input === 20){
      output19 = "XX"
    }
  }
  return output19
}
 //     for (var j = 1; j <= 3; j+=) {
 //       numeralI++
 //       console.log(numeralI)
 //     };
 //   }


//User Interface Logic
$(document).ready(function(){
  $("form#userForm").submit(function(event){
    event.preventDefault();

  $("#output").text(output)
  });
});
