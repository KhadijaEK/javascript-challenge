console.log("hello");

//Insert canvas tag into Table 1 

let target = document.getElementById("table1");
let canva1 = document.createElement("canvas");
canva1.id = "myChart1";
target.parentNode.insertBefore(canva1, target).innerHTML;
canva1.style.height = "300px";
canva1.style.width = "100%";
canva1.style.backgroundColor = "lightblue";

// Get table elements 
const tableArray = [...document.querySelectorAll('table#table1>*>tr')]
  .map(row => [...row.querySelectorAll('td,th')].map(cell => cell.innerText) );
  console.table(tableArray);

 
//create Array of YearsAxis
let yearAxis = tableArray.slice(1, 2);

yearAxis.push.apply(yearAxis, tableArray[1]);
yearAxis.splice(0,3);

console.log(yearAxis);



//create Array of country label

const countryLabels = tableArray.map(column => column[1]);
countryLabels.splice(0,2);

console.log(countryLabels);


//transform tableARray into data numbers

    for (let i = 0; i < tableArray.length; i++){
            const datas = tableArray[i].splice(2,12); //return row without 2 first columns, yey!
                console.log(datas); 
            }

    for(let j = 0; j < datas.length; j++){
        let numdatas = parseFloat(datas.replace(",","."));
            console.log(numdatas);
            }

    /* for(let i = 0; i < DataArray.length; i++){
      DataArray[i].splice(0,3);
      for(let j = 0; j < DataArray[i].length; j++){
        DataArray[j] = parseFloat(document.getElementById("table1").innerText.replace(",","."));
           console.log(DataArray[i][j]);
       }
      
}
 */
// var fValue = parseFloat(document.getElementById("textfield").value.replace(",","."))
// var floatValue = +(str.replace(/,/,'.'));


//Création du graphique 

var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: yearAxis,
        datasets: [{
            label: countryLabels,
            data: datas,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
