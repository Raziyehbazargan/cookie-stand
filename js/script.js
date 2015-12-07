var hours=['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];

// Define a object for all stores
var stores = function(name,min,max,avgCookiePerCustomer) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  var purchasedCookies = [];
  var DailyCookiesTotal = 0;

  this.customerPerHour = function() {
    return  Math.floor(Math.random() * (this.max - this.min)) + this.min;
  };


  this.cookiesPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      var dailyCookies = Math.floor(this.avgCookiePerCustomer * this.customerPerHour());
      purchasedCookies.push(dailyCookies);
    }
    for (var i = 0; i < purchasedCookies.length; i++) {
        DailyCookiesTotal += purchasedCookies[i];
  }
};


this.render = function() {
    var pikePlaceLoc = document.getElementById('pikePlace');

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));

    for (var i = 0; i <= hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + purchasedCookies[i] + '  cookies ';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = ' Total: ' + DailyCookiesTotal + '  cookies';
    pikePlaceLoc.appendChild(ulEl);
  }
};

var pikePlaceStore = new stores('Pike Place Market',17,88,5.2);
pikePlaceStore.cookiesPerHour();
pikePlaceStore.render();

var SeaTacAirportStore = new stores('SeaTac Airport',6,44,1.2);
SeaTacAirportStore.cookiesPerHour();
SeaTacAirportStore.render();

var SouthcenterMallStore = new stores('South center Mall',11,38,1.9);
SouthcenterMallStore.cookiesPerHour();
SouthcenterMallStore.render();

var BellevueSquareStore = new stores('Bellevue Square Store',20,48,33);
BellevueSquareStore.cookiesPerHour();
BellevueSquareStore.render();

var AlkiStore = new stores('Alki',3,24,2.6);
AlkiStore.cookiesPerHour();
AlkiStore.render();








































// Define a object for pikePlace
/*
var stores = {
  name:'Pike Place Market',
  purchasedCookies :[],
  min: 17,
  max: 88,
  avgCookiePerCustomer: 5.2,
  DailyCookiesTotal: 0,
  customerPerHour: function() {
    return  Math.floor(Math.random() * (this.max - this.min)) + this.min;
  },
  cookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var dailyCookies = Math.floor(this.avgCookiePerCustomer * this.customerPerHour());
      this.purchasedCookies.push(dailyCookies);
    }
    for (var i = 0; i < this.purchasedCookies.length; i++) {
        this.DailyCookiesTotal += this.purchasedCookies[i];
  }
},
render: function() {
    var pikePlaceLoc = document.getElementById('pikePlace');

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));


    for (var i = 0; i <= hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.purchasedCookies[i] + '  cookies ';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.DailyCookiesTotal + ' cookies';
    pikePlaceLoc.appendChild(ulEl);
  }
};

  stores.cookiesPerHour();
  stores.render();
*/
