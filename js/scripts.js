//Business Logic
let sampleInfo = {"Sam":{"dayChoices":["Yes", "No", "Yes", "", ""], "best":3, "min":3, "max":3}, 
"Jack":{"dayChoices":["No", "No", "", "", ""], "best":2, "min":2, "max":2},
"Jill":{"dayChoices":["Yes", "", "Yes", "", "Yes"], "best":2, "min":2, "max":2}};

function getDaysByName(nameInDictionary) {
  let dayCount=0;
  nameInDictionary["dayChoices"].forEach(function(day){
    if (day==="Yes") {
      dayCount ++;
    }
  });
  return dayCount;
}

function getDaysByWeekDay(dictionary, weekday) {
  let dayCount=0;
  for(let person in dictionary){
    if(dictionary[person]["dayChoices"][weekday]==="Yes"){
      dayCount++;
    }
  };
  return dayCount;
}


//TESTS
let result=getDaysByName(sampleInfo["Sam"]);
console.log("Result: "+ result + "\nExpected: 2");

result=getDaysByWeekDay(sampleInfo, 4);
console.log("Result: "+ result + "\nExpected: 1");