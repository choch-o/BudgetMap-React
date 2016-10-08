var orgData = require('../files/categorized_budget.json');

var parsedJSON = {};
for (var i = 3; i < orgData.length; i++) {
  var year;
  var categories = [];
  for (var key in orgData[i]) {
    if (key == "COL0") {
      year = parseInt(orgData[i][key].replace("년", "")); 
    }
    else {
      categories.push({
        label: orgData[0][key],
        value: parseInt(orgData[i][key].replace(/,/g, ""))
      });
    }
  }
  parsedJSON[year] = categories;
}
console.log("PARSED JSON");
console.log(parsedJSON);

export { parsedJSON };
