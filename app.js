'use strict';


Book.arr = [];
function Book (name, price){
    this.name = name;
    this.price = price;
    Book.arr.push(this);
    saveData();

}
 let theForm = document.getElementById('theForm');
 theForm.addEventListener('submit', handleSubmit);

 function handleSubmit(event){
     event.preventDefault();
     let newName = event.target.namefield.value;
     let newPrice = event.target.pricefield.value;
     let inst = new Book(newName, newPrice)
     
     inst.renderData();


 }

 function saveData(){
     let savedData = JSON.stringify(Book.arr);
     localStorage.setItem('UserInput', savedData);
 }

 function loadData(){
     let loadedData = localStorage.getItem('UserIput');
     let parseData = JSON.parse(loadedData);
     if (parseData) {
         for (let i = 0; i < parseData.length; i++) {
             let reInst = new Book(parseData[i].name, parseData[i].price)
             console.log(reInst)
             
         }
     }
 }
 loadData();

 let table = document.getElementById('two');
 function renderheader(){
     let headerRow = document.createElement('tr');
     table.appendChild(headerRow);
     let BookName = document.createElement('th');
     headerRow.appendChild(BookName);
     BookName.textContent = 'Book Name';
     let BookPage = document.createElement('th');
     headerRow.appendChild(BookPage);
     BookPage.textContent = 'Book Page';
     let BookPrice = document.createElement('th');
     headerRow.appendChild(BookPrice);
     BookPrice.textContent = 'Price';
 }
 renderheader();

 Book.prototype.renderData = function(){
     let dataRow = document.createElement('tr');
     table.appendChild(dataRow);
     let BookName1 = document.createElement('td');
     dataRow.appendChild(BookName1);
     BookName1.textContent = this.name;
     let BookPage1 = document.createElement('td');
     dataRow.appendChild(BookPage1);
     BookPage1.textContent = Math.floor(Math.random() * 500) + 1;
     let BookPrice1 = document.createElement('td');
     dataRow.appendChild(BookPrice1);
     BookPrice1.textContent = this.price;
 }