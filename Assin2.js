//initialising a variable name data
var data = 0;
var data1 = 0;
var data2 = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
function increment1() {
    data1= data1 + 1;
    document.getElementById("counting1").innerText = data1;
}
function increment2() {
    data2 = data2 + 1;
    document.getElementById("counting2").innerText = data2;
}
//creation of decrement function
