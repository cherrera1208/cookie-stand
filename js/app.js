'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Shop(city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.cookieArray = [];

  this.randomCustomer = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };

  this.calcCookiesByHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let customersPerHour = this.randomCustomer();
      this.cookieArray[i] = Math.ceil(customersPerHour * this.avg);
      this.total += this.cookieArray[i];
    }
  };

  this.render = function () {
    this.calcCookiesByHour();
    let tableBody = document.querySelector('tbody');
    let tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    let tableData = document.createElement('td');
    tableData.textContent = this.city;
    tableRow.appendChild(tableData);
    for (let i = 0; i < hours.length; i++) {
      let rowSales = document.createElement('td');
      rowSales.textContent = this.cookieArray[i];
      tableRow.appendChild(rowSales);
    }
    let cityDailyTotal = document.createElement('td');
    cityDailyTotal.textContent = this.total;
    tableRow.appendChild(cityDailyTotal);
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

let header = document.querySelector('thead');
let headerRow = document.createElement('tr');
header.appendChild(headerRow);
let hoursRow = document.createElement('td');
hoursRow.textContent = 'Store Hours';
headerRow.appendChild(hoursRow);
for (let i = 0; i < hours.length; i++) {
  let hoursHeader = document.createElement('td');
  hoursHeader.textContent = hours[i];
  headerRow.appendChild(hoursHeader);
}

let footer = document.querySelector('tfoot');
let totalsRow = document.createElement('tr');
footer.appendChild(totalsRow);
let totalsLabel = document.createElement('td');
totalsLabel.textContent = 'Hourly Tot.';
totalsRow.appendChild(totalsLabel);
for (let i = 0; i < hours.length; i++) {
  let hourlyTotals = document.createElement('td');
  hourlyTotals.textContent = seattle.cookieArray[i] + tokyo.cookieArray[i] + dubai.cookieArray[i] + paris.cookieArray[i] + lima.cookieArray[i];
  totalsRow.appendChild(hourlyTotals);
}

let totals = document.createElement('td');
totals.textContent = 'Daily Tot.';
headerRow.appendChild(totals);

let grandTotals = document.createElement('td');
grandTotals.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;
totalsRow.appendChild(grandTotals);

let form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  let newCity = new Shop(
    event.target.city.value,
    parseInt(event.target.min.value),
    parseInt(event.target.max.value),
    parseInt(event.target.avg.value)
  );
  newCity.render();
  footer();
}

form.addEventListener('submit', handleSubmit);
