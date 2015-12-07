
var stores=['Pike Place Market','SeaTac Airport','Southcenter Mall','Bellevue Square','Alki'];
var hours=['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
var pikePlaceCookies = [];
var pikePlace = {
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
      pikePlaceCookies.push(dailyCookies);
    }
    for (var i = 0; i < pikePlaceCookies.length; i++) {
        this.DailyCookiesTotal += pikePlaceCookies[i];
  }
},
render: function() {
    var pikePlaceLoc = document.getElementById('pikePlace');

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode('Pike Place Market:'));


    for (var i = 0; i <= hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + pikePlaceCookies[i] + '  cookies ';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.DailyCookiesTotal + ' cookies';
    pikePlaceLoc.appendChild(ulEl);
  }
};

  pikePlace.cookiesPerHour();
  pikePlace.render();
