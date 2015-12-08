var hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
//var stores = ['Pike Place Marcket','Alki','SeaTac Airport','SouthcenterMall','Bellevue Square']


// Define a object for all stores
var stores = function(name,min,max,avgCookiePerCustomer) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  var purchasedCookies = [];
  var DailyCookiesTotal = 0;
}


  stores.prototype.intro = function() {
    return  Math.floor(Math.random() * (this.max - this.min)) + this.min;
  }

  stores.prototype.intro = function() {
    for (var i = 0; i < hours.length; i++) {
      var dailyCookies = Math.floor(this.avgCookiePerCustomer * this.customerPerHour());
      this.purchasedCookies.push(dailyCookies);
    }
    for (var i = 0; i < purchasedCookies.length; i++) {
        this.DailyCookiesTotal += this.purchasedCookies[i];
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





/*
// Define a object for all stores
var pikePlaceMarket = {
  min:17,
  max:88,
  avgCookiePerCustomer:5.2,
  purchasedCookies:[],
  DailyCookiesTotal:0,
  customerPerHour : function() {
    return  Math.floor(Math.random() * (this.max - this.min)) + this.min;
  },
  cookiesPerHour : function() {
    for (var i = 0; i < hours.length; i++) {
      var dailyCookies = Math.floor(this.avgCookiePerCustomer * this.customerPerHour());
      this.purchasedCookies.push(dailyCookies);
    }
    for (var i = 0; i < this.purchasedCookies.length; i++) {
        this.DailyCookiesTotal += this.purchasedCookies[i];
  }
},
  render : function() {
    var pikePlaceLoc = document.getElementById('pikePlace');
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(stores[0]));

    for (var i = 0; i <= hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.purchasedCookies[i] + '  cookies ';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = ' Total: ' + this.DailyCookiesTotal + '  cookies';
    pikePlaceLoc.appendChild(ulEl);
  }
};

var Alki = {
  min:3,
  max:24,
  avgCookiePerCustomer:2.6,
  purchasedCookies:[],
  DailyCookiesTotal:0,
  customerPerHour : function() {
    return  Math.floor(Math.random() * (this.max - this.min)) + this.min;
  },
  cookiesPerHour : function() {
    for (var i = 0; i < hours.length; i++) {
      var dailyCookies = Math.floor(this.avgCookiePerCustomer * this.customerPerHour());
      this.purchasedCookies.push(dailyCookies);
    }
    for (var i = 0; i < this.purchasedCookies.length; i++) {
        this.DailyCookiesTotal += this.purchasedCookies[i];
  }
},
  render : function() {
    var AlkiLoc = document.getElementById('bellevue');
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(stores[1]));

    for (var i = 0; i <= hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.purchasedCookies[i] + '  cookies ';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = ' Total: ' + this.DailyCookiesTotal + '  cookies';
    AlkiLoc.appendChild(ulEl);
  }
};

// Define a object for all stores
var SeaTacAirport = {
  min:6,
  max:44,
  avgCookiePerCustomer:1.2,
  purchasedCookies:[],
  DailyCookiesTotal:0,
  customerPerHour : function() {
    return  Math.floor(Math.random() * (this.max - this.min)) + this.min;
  },
  cookiesPerHour : function() {
    for (var i = 0; i < hours.length; i++) {
      var dailyCookies = Math.floor(this.avgCookiePerCustomer * this.customerPerHour());
      this.purchasedCookies.push(dailyCookies);
    }
    for (var i = 0; i < this.purchasedCookies.length; i++) {
        this.DailyCookiesTotal += this.purchasedCookies[i];
  }
},
  render : function() {
    var SeaTacAirportLoc = document.getElementById('SeaTac');
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(stores[2]));

    for (var i = 0; i <= hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.purchasedCookies[i] + '  cookies ';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = ' Total: ' + this.DailyCookiesTotal + '  cookies';
    SeaTacAirportLoc.appendChild(ulEl);
  }
};



// Define a object for all stores
var SouthcenterMall = {
  min:11,
  max:38,
  avgCookiePerCustomer:1.9,
  purchasedCookies:[],
  DailyCookiesTotal:0,
  customerPerHour : function() {
    return  Math.floor(Math.random() * (this.max - this.min)) + this.min;
  },
  cookiesPerHour : function() {
    for (var i = 0; i < hours.length; i++) {
      var dailyCookies = Math.floor(this.avgCookiePerCustomer * this.customerPerHour());
      this.purchasedCookies.push(dailyCookies);
    }
    for (var i = 0; i < this.purchasedCookies.length; i++) {
        this.DailyCookiesTotal += this.purchasedCookies[i];
  }
},
  render : function() {
    var SouthcenterMallLoc = document.getElementById('southcenter');
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(stores[3]));

    for (var i = 0; i <= hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.purchasedCookies[i] + '  cookies ';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = ' Total: ' + this.DailyCookiesTotal + '  cookies';
    SouthcenterMallLoc.appendChild(ulEl);
  }
};



// Define a object for all stores
var BellevueSquare = {
  min:11,
  max:38,
  avgCookiePerCustomer:1.9,
  purchasedCookies:[],
  DailyCookiesTotal:0,
  customerPerHour : function() {
    return  Math.floor(Math.random() * (this.max - this.min)) + this.min;
  },
  cookiesPerHour : function() {
    for (var i = 0; i < hours.length; i++) {
      var dailyCookies = Math.floor(this.avgCookiePerCustomer * this.customerPerHour());
      this.purchasedCookies.push(dailyCookies);
    }
    for (var i = 0; i < this.purchasedCookies.length; i++) {
        this.DailyCookiesTotal += this.purchasedCookies[i];
  }
},
  render : function() {
    var BellevueSquareMallLoc = document.getElementById('bellevue');
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(stores[4]));

    for (var i = 0; i <= hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.purchasedCookies[i] + '  cookies ';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = ' Total: ' + this.DailyCookiesTotal + '  cookies';
    BellevueSquareMallLoc.appendChild(ulEl);
  }
};

//recall
pikePlaceMarket.cookiesPerHour();
pikePlaceMarket.render();

Alki.cookiesPerHour();
Alki.render();

SeaTacAirport.cookiesPerHour();
SeaTacAirport.render();

SouthcenterMall.cookiesPerHour();
SouthcenterMall.render();

BellevueSquare.cookiesPerHour();
BellevueSquare.render();






*/
