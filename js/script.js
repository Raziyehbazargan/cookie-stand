
var hours = ['Total','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
var storesLoc = ['Pike Place Market','Alki','SeaTac Airport','SouthcenterMall','Bellevue Square']
var storesReports = document.getElementById('reports');



// Define a object for all stores
var Stores = function(storeName,min,max,avgCookiePerCustomer) {
  this.storeName = storeName;
  this.min = min;
  this.max = max;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.hourlypurchasedCookies = [];
  this.dailyCookiesTotal = 0;
}

//define a method to produce a random number of customers
  Stores.prototype.customerPerHour = function() {
    return  Math.floor(Math.random() * (this.max - this.min)) + this.min;
  };

  //define a method to produce number of cookies purchased by  random number of customerPerHour * avgCookiePerCustomer
  //and then add to a array then sum the numbers and save in DailyCookiesTotal
  Stores.prototype.cookies = function() {
    for (var i = 1; i < hours.length; i++) {
      var hourlyCookies = Math.floor(this.avgCookiePerCustomer * this.customerPerHour());
      this.hourlypurchasedCookies.push(hourlyCookies);
    }
    for (var i = 0; i < this.hourlypurchasedCookies.length; i++) {
        this.dailyCookiesTotal += this.hourlypurchasedCookies[i];
      }
    };

// define a method to add the results array as a list to html
  Stores.prototype.render = function() {
    //call the function
    this.cookies();
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = this.storeName;

    trEl.appendChild(thEl);
    storesReports.appendChild(trEl);

    var tdEl = document.createElement("td");
    tdEl.textContent = Math.round(this.dailyCookiesTotal);
    trEl.appendChild(tdEl);
    storesReports.appendChild(trEl);

    for(var i=0; i < this.hourlypurchasedCookies.length; i++){
      var tdElem = document.createElement('td');
      tdElem.textContent = this.hourlypurchasedCookies[i];
      trEl.appendChild(tdElem);
      storesReports.appendChild(trEl);
    }
  }

  function CreateTable() {
    //get the section id that table wants to be show there
    var storesReports = document.getElementById('reports');

    //create a row for  headers
    var trEl = document.createElement('tr');
    //tableEl.appendChild(trEl);
    storesReports.appendChild(trEl);

    var thEl = document.createElement('th');
    thEl.textContent = 'Location';
    trEl.appendChild(thEl);

    for (var i = 0; i < hours.length; i++){
      var thEl = document.createElement('th');
      thEl.textContent = hours[i];
      trEl.appendChild(thEl);}
      storesReports.appendChild(trEl);
    }

//recall the function
CreateTable();

var pikePlaceStore = new Stores('pikePlace',77,80,5.2);
var alkiStore = new Stores('Alki',3,24,2.6);
var seaTacStore = new Stores('SeaTac Airport',6,44,1.2);
var switchouthcenterStore = new Stores('SouthcenterMall',11,38,1.9);
var bellevueSqureStore = new Stores('bellevue Square',20,48,3.3);

pikePlaceStore.render();
alkiStore.render();
seaTacStore.render();
switchouthcenterStore.render();
bellevueSqureStore.render();

//get the Form Id from Html
var formdata = document.getElementById('formdata');

//define a event for submit
formdata.addEventListener('submit', getInformation);

function getInformation(event){
  console.log(event);
  event.preventDefault();

  var storeName = event.target.storename.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  var newStore = new Stores(storeName,min,max,avg);
  newStore.render();

}
