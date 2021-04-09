//Business Logic
let sampleInfo = {"Sam":{"dayChoices":["Yes", "No", "Yes", "", ""], "best":3, "min":3, "max":3}, 
"Jack":{"dayChoices":["No", "No", "", "", ""], "best":2, "min":2, "max":2},
"Jill":{"dayChoices":["Yes", "", "Yes", "", "Yes"], "best":2, "min":2, "max":2}};

function ChildInfo(name, mon, tue, wed, thu, fri, best, min, max){
    this.name=name;
    this.dayChoices=[mon, tue, wed, thu, fri];
    this.best=best;
    this.min=min;
    this.max=max;
}

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
console.log(2)
console.log(result)

result=getDaysByWeekDay(sampleInfo, 4);
console.log(1)
console.log(result);

let lily=new ChildInfo("Lily", "", "", "", "", "Yes", 3, 2, 3);
console.log("Lily " + "Yes " + 3);
console.log(lily.name, lily.dayChoices[4], lily.best);