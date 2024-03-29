# ScheduleMaker

#### Create a weekly class schedule

#### By _**Victoria West**_

## Technologies Used
* HTML
* CSS
* Bootstrap
* JQuery
* JavaScript

## Description
_Helps the user create a weekly class schedule that accommodates specific scheduling needs._

## Setup/Installation Requirements
### View Online
* [Click here](https://favwest.github.io/ScheduleMaker) to view on GitHub pages
### Run Locally
* **Requirements:** ability to view HTML in a web browser, internet access, Git
#### Using GitHub Desktop
* **Requires GitHub Desktop**
* Go to https://github.com/FavWest/ScheduleMaker
* Click green CODE button and select "Open with GitHub Desktop" from the dropdown menu
* Open the repository in your editor and run "index.html" OR open the repository in your file manager and double-click "index.html" to open it in a browser
#### Using command line with Git
* Clone code using `git clone https://github.com/FavWest/ScheduleMaker.git`
* Open Portfolio folder in Explorer or Finder
* Double-click "index.html" to open in a browser
## Known Bugs
* 
## License
MIT
Copyright (c) 2021 Victoria West
## Contact Information
Victoria West email@email.com


## Tests
#### Describe: getDaysByName PASSED
Test: "Return number of days marked "Yes" for a person whose name is in the example data"
Code:
getDaysByName(sampleInfo:["Sam"]);
Expected Output: 2

#### Describe: getDaysByWeekDay PASSED
Test: "Return number of days marked "Yes" by day of the week"
Code:
getDaysByWeekDay(sampleInfo, 4);
Expected Output: 1

#### Describe: ChildInfo
Test: "Should construct a ChildInfo type object"
Code:
let lily = new ChildInfo("Lily", "", "", "", "", "No", 3, 2, 3);
console.log(lily.name, lily.dayChoices[4], lily.best);
Expected Output: "Lily" "Yes" 3

#### Describe: ClassList
Test: "Construct an ClassList type object"
Code:
let myClass = new ClassList;
console.log(myClass);
Expected Output: {children:{}, currentId:0};

