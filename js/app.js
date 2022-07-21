'use strict';

let hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Constructor function
function Shop(city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieArr = [];
  this.dailyTotal = 0;
  this.randCust = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.cookiesByHour = function () {
    for (let i = 0; i < hourArr.length; i++) {
      let custByHour = this.randCust();
      let cookiesSold = Math.ceil(custByHour * this.avg);
      this.cookieArr.push(cookiesSold);
      this.dailyTotal += cookiesSold;
    }
  };
  this.render = function () {
    let cookieList = document.getElementById('cookiesSoldList');
    this.cookiesByHour();
    for (let i = 0; i < hourArr.length; i++) {
      let listHead = document.createElement('h3');
      listHead.textDocument = this.name;
      cookieList.appendChild(listHead);
      let listItem = document.createElement('li');
      listItem.textContent = (`${hourArr[i]}: ${this.cookieArr[i]} cookies`);
      cookieList.appendChild(listItem);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.dailyTotal} cookies`;
    cookieList.appendChild(totalLi);
  };
}

// //New Instances
let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

// //Invoking
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// #lab06 objects by city

// const shop1 = {
//   city: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookieArr: [],
//   dailyTotal: 0,
//   randCustNum: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hourArr.length; i++) {
//       // let custByHour = this.randCustNum();
//       let cookiesByHour = Math.ceil(this.randCustNum() * this.avg);
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
//   randCustNum: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hourArr.length; i++) {
//       let custByHour = this.randCustNum();
//       let cookiesByHour = Math.ceil(custByHour * this.avg);
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
//   randCustNum: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hourArr.length; i++) {
//       let custByHour = this.randCustNum();
//       let cookiesByHour = Math.ceil(custByHour * this.avg);
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
//   randCustNum: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hourArr.length; i++) {
//       let custByHour = this.randCustNum();
//       let cookiesByHour = Math.ceil(custByHour * this.avg);
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
//   randCustNum: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hourArr.length; i++) {
//       let custByHour = this.randCustNum();
//       let cookiesByHour = Math.ceil(custByHour * this.avg);
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
