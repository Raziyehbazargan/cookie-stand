//var stores=['Pike Place Market','SeaTac Airport','Southcenter Mall','Bellevue Square','Alki'];
var hours=['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];


// Define a object for pikePlace
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
