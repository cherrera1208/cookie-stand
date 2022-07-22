'use strict';

// global variables
let hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Constructor function
function Shop(city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieArr = [];
  this.dailyTotal = 0;
  this.randomCustomer = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.cookiesByHour = function () {
    for (let i = 0; i < hourArr.length; i++) {
      let customerByHour = this.randomCustomer();
      let cookiesSold = Math.ceil(customerByHour * this.avg);
      this.cookieArr.push(cookiesSold);
      this.dailyTotal += cookiesSold;
    }
  };

  // //Day09: Forms and Events

  // //This is not my code, borrowed for testing purposes from the class demo
  //   let myContainer = document.getElementById('container');
  //   let parentEl = document.getElementById('results');

  //   let handleClick = function (event) {
  //     console.log(event);

  //     if (event.target.id === 'box-one') {
  //       let pEl = document.createElement('p');
  //       pEl.textContent = 'Box 1 was clicked!';
  //       pEl.className = 'class-I-am-adding';
  //       parentEl.append(pEl);
  //     } else if (event.target.id === 'box-two') {
  //       let pEl = document.createElement('p');
  //       pEl.textContent = 'clicked:  Box 2!';
  //       pEl.setAttribute('class', 'class-I-am-adding');
  //       parentEl.append(pEl);
  //     } else if (event.target.id === 'box-three') {
  //       let pEl = document.createElement('p');
  //       pEl.textContent = 'Box 3 done got clicked!';
  //       parentEl.appendChild(pEl);
  //     } else {
  //       let pEl = document.createElement('p');
  //       pEl.textContent = 'FOLLOW INSTRUCTIONS!!!';
  //       parentEl.appendChild(pEl);
  //     }
  //   };

  //   myContainer.addEventListener('click', handleClick);

  // // this render needs to be included in the constructor function
  // this.render = function () {
  //   this.cookiesByHour();
  //   let cookieTable = document.getElementById('tableOfSales');
  //   let tRow = document.createElement('tr');
  //   cookieTable.appendChild(tRow);
  //   let rowCity = document.createElement('td');
  //   rowCity.textContent = this.name;
  //   tRow.appendChild(rowCity);
  //   for (let i = 0; i < hourArr.length; i++) {
  //     let rowSales = document.createElement('td');
  //     rowSales.textContent = this.cookies[i];
  //     tRow.appendChild(rowSales);
  //   }
  //   let rowTotal = document.createElement('td');
  //   rowTotal.textContent = this.dailyTotal;
  //   tRow.appendChild(rowTotal);
  // };

  // non construct render
  this.render = function () {
    let seattleList = document.getElementById('seattleSales');
    this.cookiesByHour();
    for (let i = 0; i < hourArr.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = (`${hourArr[i]}: ${this.cookieArr[i]} cookies`);
      seattleList.appendChild(listItem);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.dailyTotal} cookies`;
    seattleList.appendChild(totalLi);
  };
}


// New Instances
let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

// Invoking
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// // Outdated code from Lab:06 kept for reference
// const shop1 = {
//   city: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookieArr: [],
//   dailyTotal: 0,
//   randomCustomerNum: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hourArr.length; i++) {
//       // let customerByHour = this.randomCustomerNum();
//       let cookiesByHour = Math.ceil(this.randomCustomerNum() * this.avg);
//       this.cookieArr.push(cookiesByHour);
//       this.dailyTotal += cookiesByHour;
//     }
//   },
//   render: function () {
//     let seattleList = document.getElementById('seattleSales');
//     this.cookiesSold();
//     for (let i = 0; i < hourArr.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = (`${hourArr[i]}: ${this.cookieArr[i]} cookies`);
//       seattleList.appendChild(listItem);
//     }
//     let totalLi = document.createElement('li');
//     totalLi.textContent = `Total: ${this.dailyTotal} cookies`;
//     seattleList.appendChild(totalLi);
//   }
// };

// shop1.render();

// const shop2 = {
//   city: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   cookieArr: [],
//   dailyTotal: 0,
//   randomCustomerNum: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hourArr.length; i++) {
//       let customerByHour = this.randomCustomerNum();
//       let cookiesByHour = Math.ceil(customerByHour * this.avg);
//       this.cookieArr.push(cookiesByHour);
//       this.dailyTotal += cookiesByHour;
//     }
//   },
//   render: function () {
//     let seattleList = document.getElementById('tokyoSales');
//     this.cookiesSold();
//     for (let i = 0; i < hourArr.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = (`${hourArr[i]}: ${this.cookieArr[i]} cookies`);
//       seattleList.appendChild(listItem);
//     }
//     let totalLi = document.createElement('li');
//     totalLi.textContent = `Total: ${this.dailyTotal} cookies`;
//     seattleList.appendChild(totalLi);
//   }
// };

// shop2.render();

// const shop3 = {
//   city: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   cookieArr: [],
//   dailyTotal: 0,
//   randomCustomerNum: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hourArr.length; i++) {
//       let customerByHour = this.randomCustomerNum();
//       let cookiesByHour = Math.ceil(customerByHour * this.avg);
//       this.cookieArr.push(cookiesByHour);
//       this.dailyTotal += cookiesByHour;
//     }
//   },
//   render: function () {
//     let dubaiList = document.getElementById('dubaiSales');
//     this.cookiesSold();
//     for (let i = 0; i < hourArr.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = (`${hourArr[i]}: ${this.cookieArr[i]} cookies`);
//       dubaiList.appendChild(listItem);
//     }
//     let totalLi = document.createElement('li');
//     totalLi.textContent = `Total: ${this.dailyTotal} cookies`;
//     dubaiList.appendChild(totalLi);
//   }
// };

// shop3.render();

// const shop4 = {
//   city: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookieArr: [],
//   dailyTotal: 0,
//   randomCustomerNum: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hourArr.length; i++) {
//       let customerByHour = this.randomCustomerNum();
//       let cookiesByHour = Math.ceil(customerByHour * this.avg);
//       this.cookieArr.push(cookiesByHour);
//       this.dailyTotal += cookiesByHour;
//     }
//   },
//   render: function () {
//     let parisList = document.getElementById('parisSales');
//     this.cookiesSold();
//     for (let i = 0; i < hourArr.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = (`${hourArr[i]}: ${this.cookieArr[i]} cookies`);
//       parisList.appendChild(listItem);
//     }
//     let totalLi = document.createElement('li');
//     totalLi.textContent = `Total: ${this.dailyTotal} cookies`;
//     parisList.appendChild(totalLi);
//   }
// };

// shop4.render();

// const shop5 = {
//   city: 'Lima',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookieArr: [],
//   dailyTotal: 0,
//   randomCustomerNum: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hourArr.length; i++) {
//       let customerByHour = this.randomCustomerNum();
//       let cookiesByHour = Math.ceil(customerByHour * this.avg);
//       this.cookieArr.push(cookiesByHour);
//       this.dailyTotal += cookiesByHour;
//     }
//   },
//   render: function () {
//     let limaList = document.getElementById('limaSales');
//     this.cookiesSold();
//     for (let i = 0; i < hourArr.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = (`${hourArr[i]}: ${this.cookieArr[i]} cookies`);
//       limaList.appendChild(listItem);
//     }
//     let totalLi = document.createElement('li');
//     totalLi.textContent = `Total: ${this.dailyTotal} cookies`;
//     limaList.appendChild(totalLi);
//   }
// };

// shop5.render();
