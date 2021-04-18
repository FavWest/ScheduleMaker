//Business Logic
class AllInfo{
  constructor(){
    this.info={};
    this.currentID=0;
  }

  addChildInfo(childInfo){
    this.currentID ++;
    this.info[this.currentID]=childInfo;
  }

  getDaysById(id){
    let dayCount=0;
    this.info[id]["dayChoices"].forEach(function(day){
      if (day==="Yes") {
        dayCount ++;
      }
    });
    return dayCount;
  }

  getDaysByWeekDay(weekday) {
    let dayCount=0;
    for(let id in this.info){
      if(this.info[id]["dayChoices"][weekday]==="Yes"){
        dayCount++;
      }
    };
    return dayCount;
  }
}

class ChildInfo{
  constructor(name, mon, tue, wed, thu, fri, best, min, max){
    this.name=name;
    this.dayChoices=[mon, tue, wed, thu, fri];
    this.best=best;
    this.min=min;
    this.max=max;
  }
}


//TESTS
let sampleInfo = {1:{name: "Sam", "dayChoices":["Yes", "No", "Yes", "", ""], "best":3, "min":3, "max":3}, 
2:{name:"Jack", "dayChoices":["No", "No", "", "", ""], "best":2, "min":2, "max":2},
3:{name:"Jill", "dayChoices":["Yes", "", "Yes", "", "Yes"], "best":2, "min":2, "max":2}};

let allInfo = new AllInfo();
let lily=new ChildInfo("Lily", "", "Yes", "", "", "Yes", 3, 2, 3);
allInfo.addChildInfo(lily);
console.log(allInfo.getDaysById(1));