var hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
var stores = ['Pike Place Marcket','Alki','SeaTac Airport','SouthcenterMall','Bellevue Square']


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
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.floor(this.avgCookiePerCustomer * this.customerPerHour());
      this.hourlypurchasedCookies.push(hourlyCookies);
    }
    for (var i = 0; i < this.hourlypurchasedCookies.length; i++) {
        this.dailyCookiesTotal += this.hourlypurchasedCookies[i];
      }
};

// define a method to add the results array as a list to html
  Stores.prototype.render = function() {
    this.cookies();


    var pikePlaceLoc = document.getElementById('pikePlace');
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.storeName));

    for (var i = 0; i <= hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.hourlypurchasedCookies[i] + '  cookies ';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = ' Total: ' + this.dailyCookiesTotal + '  cookies';
    pikePlaceLoc.appendChild(ulEl);
  };





    /*
    var storesReports = document.getElementById('reports');
    var tableEl = document.createElement('table');

    for (var i = 0; i < stores.length + 1; i++) {
    //  var rowEl = tableEl.insertRow();
        var rowEl = document.createElement('tr');

        for (var j = 0; i < hours.length + 2; i++) {
          var cellEl = document.createElement('td');
          var cellText = document.createTextNode(this.hourlypurchasedCookies[i]);
          cellEl.appendChild(cellText);
          rowEl.appendChild(cellEl);
        }
        tableEl.appendChild(rowEl);
        //document.body.appendChild(tableEl);
        */








var pikePlaceStore = new Stores('Pike Place Market',17,88,5.2);
  pikePlaceStore.render();

var SeaTacAirportStore = new Stores('SeaTac Airport',6,44,1.2);
  SeaTacAirportStore.render();

var SouthcenterMallStore = new Stores('South center Mall',11,38,1.9);
    SouthcenterMallStore.render();

var BellevueSquareStore = new Stores('Bellevue Square Store',20,48,33);
    BellevueSquareStore.render();

var AlkiStore = new Stores('Alki',3,24,2.6);
    AlkiStore.render();
