//Business Logic
var numerals =  ["I", "V", "X", "L", "C", "D", "M"]
var numeralI = "I"
var toThree
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
  for(var j = 1; j <=input; j++) {
    if(input < 4){
      output5 +="I"
    } else if(input === 4){
      output5 = "IV"
    } else if (input===5){
      output5 = "V"
    }
  }
  return output5
}

function romanSubTen(input) {
  var output10 = ""
  for(var j = 1; j <=input; j++) {
    if(input >6 && <10){
      output5 + "I"
    } else if(input === 4){
      output5 = "IV"
    } else if (input===5){
      output5 = "V"
    }
  }
  return output5
}

  //   } else if (input > 5 && input < 9){
  //     output
  //   }
  // }
//   return output
// }


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
