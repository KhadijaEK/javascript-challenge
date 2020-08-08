console.log("hello");

//Insert canvas tag into Table 1 

let target = document.getElementById("table1");
let canva1 = document.createElement("canvas");
canva1.id = "myChart1";
target.parentNode.insertBefore(canva1, target).innerHTML;
canva1.style.height = "500px";
canva1.style.width = "100%";


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
countryLabels.splice(0,2); //return second column datas

console.log(countryLabels);


//transform tableARray into data numbers

    
    let datas = [];
    for (let i = 0; i < tableArray.length; i++) {
        let currentArray = tableArray[i].splice(2,12);
        for (let j = 0; j < currentArray.length; j++) {
            if(!datas[i]){
               datas[i]=[];
            }
            datas[i][j] = parseFloat(currentArray[j].replace(",","."));
        }
    }
    console.log(datas);

    




//Création du graphique 

const ctx = document.getElementById('myChart1').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: yearAxis,
      datasets: [{
          data: datas[2],
          label: countryLabels[0],
          borderColor: '#F56'},
        {data: datas[3],
          label: countryLabels[1],
          borderColor: '#B56'},
        {data: datas[4],
          label: countryLabels[2],
          borderColor: '#E74C3C'},
        {data: datas[5],
          label: countryLabels[3],
          borderColor: '#9B59B6'},
        {data: datas[6],
          label: countryLabels[4],
          borderColor: '#8E44AD'},
        {data: datas[7],
          label: countryLabels[5],
          borderColor: '#2980B9'},
        {data: datas[8],
          label: countryLabels[6],
          borderColor: '#3498DB '},
        {data: datas[9],
          label: countryLabels[7],
          borderColor: '#1ABC9C'},
        {data: datas[10],
          label: countryLabels[8],
          borderColor: '#16A085'},
        {data: datas[11],
          label: countryLabels[9],
          borderColor: '#2ECC71'},
        {data: datas[12],
          label: countryLabels[10],
          borderColor: '#F1C40F'},
        {data: datas[13],
          label: countryLabels[11],
          borderColor: '#F39C12'},
        {data: datas[14],
          label: countryLabels[12],
          borderColor: '#E67E22 '},
        {data: datas[15],
          label: countryLabels[13],
          borderColor: '#D35400'},
        {data: datas[16],
          label: countryLabels[14],
          borderColor: '#F44336'},
        {data: datas[17],
          label: countryLabels[15],
          borderColor: '#EC407A'},
        {data: datas[18],
          label: countryLabels[16],
          borderColor: '#AB47BC'},
        {data: datas[19],
          label: countryLabels[17],
          borderColor: '#26C6DA'},
        {data: datas[20],
          label: countryLabels[18],
          borderColor: '#C6C6DA'},
        {data: datas[21],
          label: countryLabels[19],
          borderColor: '#F59'},
        {data: datas[22],
          label: countryLabels[20],
          borderColor: '#CB47BC'},
        {data: datas[23],
          label: countryLabels[21],
          borderColor: '#B56'},
        {data: datas[24],
          label: countryLabels[22],
          borderColor: '#CE93D8'},
        {data: datas[25],
          label: countryLabels[23],
          borderColor: '#CE93D3'},
        {data: datas[26],
          label: countryLabels[24],
          borderColor: '#F44336'},
        {data: datas[27],
          label: countryLabels[25],
          borderColor: '#F56'},
        {data: datas[28],
          label: countryLabels[26],
          borderColor: '#F56'},
        {data: datas[29],
          label: countryLabels[27],
          borderColor: '#F56'},
        {data: datas[30],
          label: countryLabels[28],
          borderColor: '#F56'},
        {data: datas[31],
          label: countryLabels[29],
          borderColor: '#F56'},
        {data: datas[32],
          label: countryLabels[30],
          borderColor: '#F56'},
        {data: datas[33],
          label: countryLabels[31],
          borderColor: '#F56'},
        {data: datas[34],
          label: countryLabels[32],
          borderColor: '#F56'
        }
      ]
    },
    
    
    options: {
      legend:{
        display: true,
        position: 'right',
        
        labels:{
          boxwidth: 10,
        },
        ticks:{
          precision: 200
        },
        scales: {
          xAxes: [{
             gridLines: {
               display: false
              }
            }],
            yAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
      }
      
      
        
  //Fin graphique 1
 
});

//insert canvas for heading chart (canva3)

let target3 = document.getElementById("bodyContent");
let canva3 = document.createElement("canvas");
canva3.id = "myChart3";
target3.parentNode.insertBefore(canva3, target3).innerHTML;
canva3.style.height = "300px";
canva3.style.width = "100%";

//fetch json library for heading chart 

let dataPoints = [];
let jsonFile = fetch("https://canvasjs.com/services/data/datapoints.php")
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(json => {
  
    json.map(entry => {
      return dataPoints.push(entry);
    })
    console.log(dataPoints);
  });



 /*  const ctx2 = document.getElementById('myChart3').getContext('2d');
  let myLineChart = new Chart(ctx2, {
    type: 'line',
    data: dataPoints,
    options: options
});
 */


//insert canvas for chart 2 (table2)


let target2 = document.getElementById("table2");
let canva2 = document.createElement("canvas");
canva2.id = "myChart2";
target2.parentNode.insertBefore(canva2, target2).innerHTML;
canva2.style.height = "400px";
canva2.style.width = "100%";


// Get table elements TABLE 2
const tableArray2 = [...document.querySelectorAll('table#table2>*>tr')]
  .map(row => [...row.querySelectorAll('td,th')].map(cell => cell.innerText) );
  
  console.table(tableArray2);


//create Array of country label2

const countryLabels2 = tableArray2.map(column => column[1]);
countryLabels2.shift(); //return second column datas
console.log(countryLabels2);

//loop through Array

let datas2 = [];
    for (let k = 0; k < tableArray2.length; k++) {
        let currentArray2 = tableArray2[k].splice(2, 3);
        for (let l = 0, c = currentArray2.length; l < c; l++) {
            if(!datas2[k]){
               datas2[k]=[];
            }
            datas2[k][l] = parseInt(currentArray2[l]);
        }
    }
    console.table(datas2);

//Création du graphique TABLE2

const ctx2 = document.getElementById('myChart2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: [2007, 2010],
      datasets: [{
          data: datas2[2],
          label: countryLabels2[0],
          borderColor: '#B56'},
        {data: datas2[3],
          label: countryLabels2[1],
          borderColor: '#E74C3C'},
        {data: datas2[4],
          label: countryLabels2[2],
          borderColor: '#9B59B6'},
        {data: datas2[5],
          label: countryLabels2[3],
          borderColor: '#8E44AD'},
        {data: datas2[6],
          label: countryLabels2[4],
          borderColor: '#2980B9'},
        {data: datas2[7],
          label: countryLabels2[5],
          borderColor: '#3498DB '},
        {data: datas2[8],
          label: countryLabels2[7],
          borderColor: '#1ABC9C'},
        {data: datas2[9],
          label: countryLabels2[8],
          borderColor: '#16A085'},
        {data: datas2[10],
          label: countryLabels2[9],
          borderColor: '#2ECC71'},
        {data: datas2[11],
          label: countryLabels2[10],
          borderColor: '#F1C40F'},
        {data: datas2[12],
          label: countryLabels2[10],
          borderColor: '#F1C30F'},
        {data: datas2[13],
          label: countryLabels2[11],
          borderColor: '#F39C12'},
        {data: datas2[14],
          label: countryLabels2[12],
          borderColor: '#E67E22 '},
        {data: datas2[15],
          label: countryLabels2[13],
          borderColor: '#D35400'},
        {data: datas2[16],
          label: countryLabels2[14],
          borderColor: '#F44336'},
        {data: datas2[17],
          label: countryLabels2[15],
          borderColor: '#EC407A'},
        {data: datas2[18],
          label: countryLabels2[16],
          borderColor: '#AB47BC'},
        {data: datas2[19],
          label: countryLabels2[17],
          borderColor: '#26C6DA'},
        {data: datas2[20],
          label: countryLabels2[18],
          borderColor2: '#C6C6DA'},
        {data: datas2[21],
          label: countryLabels2[19],
          borderColor: '#F59'},
        {data: datas2[22],
          label: countryLabels2[20],
          borderColor: '#CB47BC'},
        {data: datas2[23],
          label: countryLabels2[21],
          borderColor: '#B56'},
        {data: datas2[24],
          label: countryLabels2[22],
          borderColor: '#CE93D8'},
        {data: datas2[25],
          label: countryLabels2[23],
          borderColor: '#CE93D3'},
        {data: datas2[26],
          label: countryLabels2[24],
          borderColor: '#F44336'},
        {data: datas2[27],
          label: countryLabels2[25],
          borderColor: '#F56'},
        {data: datas2[28],
          label: countryLabels2[26],
          borderColor: '#F56'},
        {data: datas2[29],
          label: countryLabels2[27],
          borderColor: '#F56'},
        {data: datas2[30],
          label: countryLabels2[28],
          borderColor: '#F56'},
        {data: datas2[31],
          label: countryLabels2[29],
          borderColor: '#F56'}
        
      ]
    },
    
    
    options: {
      legend:{
        display: true,

        labels:{
          boxwidth: 10,
        },
        ticks:{
          precision: 200
        },
        scales: {
          xAxes: [{
             gridLines: {
               display: false
              }
            }],
            yAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
      }
    });     
      
        
  //Fin graphique TABLE2