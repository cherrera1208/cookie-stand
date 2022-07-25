'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Shop(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookies = [];
  this.salesList = [];
  this.addShopArray = function () {
  };

  this.randomCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };

  this.calcCookiesByHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCustomers() * this.avg);
      this.cookies[i] = hourlyCookies;
    }
    return this.cookies;
  };

  this.cookiesSold = function () {
    this.calcCookiesByHour();
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      let message = (`${hours[i]}: ${this.cookies[i]} cookies`);
      this.salesList[i] = message;
      total = total + this.cookies[i];
    }
    let totalMessage = (`Total: ${total} cookies`);
    this.salesList[hours.length] = totalMessage;
    return this.salesList;
  };

  this.render = function () {
    this.cookiesSold();
    let tableBody = document.querySelector('tbody');
    let tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    let tableData = document.createElement('td');
    tableData.textContent = this.name;
    tableRow.appendChild(tableData);
    for (let i = 0; i < hours.length; i++) {
      let rowSales = document.createElement('td');
      rowSales.textContent = this.cookies[i];
      tableRow.appendChild(rowSales);
    }
  };
}

let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
