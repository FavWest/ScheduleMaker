//Business Logic
let sampleInfo = {"Sam":{"dayChoices":["Yes", "No", "Yes", "", ""], "best":3, "min":3, "max":3}, 
"Jack":{"dayChoices":["No", "No", "", "", ""], "best":2, "min":2, "max":2},
"Jill":{"dayChoices":["Yes", "", "Yes", "", "Yes"], "best":2, "min":2, "max":2}};

function getDaysByName(arrayAndName) {
  let dayCount=0;
  arrayAndName["dayChoices"].forEach(function(day){
    if (day==="Yes") {
      dayCount ++;
    }
  });
  return dayCount;
}


//TESTS
function runTest(input, expected){
  const result=getDaysByName(input);
  console.log("Result: "+ result + "\nExpected: " + expected);
}

runTest(sampleInfo["Sam"], 2);
