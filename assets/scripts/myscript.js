console.log("hello");

//Insert canvas tag for chart 1 Crime (Table1) 

let target = document.getElementById("table1");
let canva1 = document.createElement("canvas");
canva1.id = "myChart1";
target.parentNode.insertBefore(canva1, target).innerHTML;
canva1.style.height = "500px";
canva1.style.width = "100%";


// Get table elements chart 1 Crime (Table1) 
const tableArray = [...document.querySelectorAll('table#table1>*>tr')]
  .map(row => [...row.querySelectorAll('td,th')].map(cell => cell.innerText) );
  
  console.table(tableArray);


//create Array of country label chart 1 Crime (Table1) 

const countryLabels = tableArray.map(column => column[1]);
countryLabels.splice(0,2); //return second column datas

console.log(countryLabels);


//transform tableARray into data numbers chart 1 Crime (Table1) 

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


//Création du graphique chart 1 Crime (Table1) 

const ctx = document.getElementById('myChart1').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: datas[1],
      datasets: [{
          data: datas[2],
          label: countryLabels[0],
          fill: false,
          borderColor: '#F56'},
        {data: datas[3],
          label: countryLabels[1],
          fill: false,
          borderColor: '#B56'},
        {data: datas[4],
          label: countryLabels[2],
          fill: false,
          borderColor: '#E74C3C'},
        {data: datas[5],
          label: countryLabels[3],
          fill: false,
          borderColor: '#9B59B6'},
        {data: datas[6],
          label: countryLabels[4],
          fill: false,
          borderColor: '#8E44AD'},
        {data: datas[7],
          label: countryLabels[5],
          fill: false,
          borderColor: '#2980B9'},
        {data: datas[8],
          label: countryLabels[6],
          fill: false,
          borderColor: '#3498DB '},
        {data: datas[9],
          label: countryLabels[7],
          fill: false,
          borderColor: '#1ABC9C'},
        {data: datas[10],
          label: countryLabels[8],
          fill: false,
          borderColor: '#16A085'},
        {data: datas[11],
          label: countryLabels[9],
          fill: false,
          borderColor: '#2ECC71'},
        {data: datas[12],
          label: countryLabels[10],
          fill: false,
          borderColor: '#F1C40F'},
        {data: datas[13],
          label: countryLabels[11],
          fill: false,
          borderColor: '#F39C12'},
        {data: datas[14],
          label: countryLabels[12],
          fill: false,
          borderColor: '#E67E22 '},
        {data: datas[15],
          label: countryLabels[13],
          fill: false,
          borderColor: '#D35400'},
        {data: datas[16],
          label: countryLabels[14],
          fill: false,
          borderColor: '#F44336'},
        {data: datas[17],
          label: countryLabels[15],
          fill: false,
          borderColor: '#EC407A'},
        {data: datas[18],
          label: countryLabels[16],
          fill: false,
          borderColor: '#AB47BC'},
        {data: datas[19],
          label: countryLabels[17],
          fill: false,
          borderColor: '#26C6DA'},
        {data: datas[20],
          label: countryLabels[18],
          fill: false,
          borderColor: '#C6C6DA'},
        {data: datas[21],
          label: countryLabels[19],
          fill: false,
          borderColor: '#F59'},
        {data: datas[22],
          label: countryLabels[20],
          fill: false,
          borderColor: '#CB47BC'},
        {data: datas[23],
          label: countryLabels[21],
          fill: false,
          borderColor: '#B56'},
        {data: datas[24],
          label: countryLabels[22],
          fill: false,
          borderColor: '#CE93D8'},
        {data: datas[25],
          label: countryLabels[23],
          fill: false,
          borderColor: '#CE93D3'},
        {data: datas[26],
          label: countryLabels[24],
          fill: false,
          borderColor: '#F44336'},
        {data: datas[27],
          label: countryLabels[25],
          fill: false,
          borderColor: '#F56'},
        {data: datas[28],
          label: countryLabels[26],
          fill: false,
          borderColor: '#F56'},
        {data: datas[29],
          label: countryLabels[27],
          fill: false,
          borderColor: '#F56'},
        {data: datas[30],
          label: countryLabels[28],
          fill: false,
          borderColor: '#F56'},
        {data: datas[31],
          label: countryLabels[29],
          fill: false,
          borderColor: '#F56'},
        {data: datas[32],
          label: countryLabels[30],
          fill: false,
          borderColor: '#F56'},
        {data: datas[33],
          label: countryLabels[31],
          fill: false,
          borderColor: '#F56'},
        {data: datas[34],
          label: countryLabels[32],
          fill: false,
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

        scales: {
          xAxes: [{
             gridLines: {
               display: false,
              },
              ticks: {
                beginAtZero: true
                }

            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
                }
            }]
          }
        }
      }   
});
 //Fin graphique 1

//insert canvas for chart 2 - Homicide (table2) 


let target2 = document.getElementById("table2");
let canva2 = document.createElement("canvas");
canva2.id = "myChart2";
target2.parentNode.insertBefore(canva2, target2).innerHTML;
canva2.style.height = "400px";
canva2.style.width = "100%";


// Get table elements Homicide (table2)
const tableArray2 = [...document.querySelectorAll('table#table2>*>tr')]
  .map(row => [...row.querySelectorAll('td,th')].map(cell => cell.innerText) );
  
  console.table(tableArray2);


//create Array of country label2 - Homicide (table2)

const countryLabels2 = tableArray2.map(column => column[1]);
countryLabels2.shift(); //return second column datas
console.log(countryLabels2);

//loop through Array Homicide (table2)

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

//Création chart Homicide (table2)

const ctx2 = document.getElementById('myChart2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: [2007, 2010],
      datasets: [{
          data: datas2[2],
          label: countryLabels2[0],
          fill: false,
          borderColor: '#B56'},
        {data: datas2[3],
          label: countryLabels2[1],
          fill: false,
          borderColor: '#E74C3C'},
        {data: datas2[4],
          label: countryLabels2[2],
          fill: false,
          borderColor: '#9B59B6'},
        {data: datas2[5],
          label: countryLabels2[3],
          fill: false,
          borderColor: '#8E44AD'},
        {data: datas2[6],
          label: countryLabels2[4],
          fill: false,
          borderColor: '#2980B9'},
        {data: datas2[7],
          label: countryLabels2[5],
          fill: false,
          borderColor: '#3498DB '},
        {data: datas2[8],
          label: countryLabels2[7],
          fill: false,
          borderColor: '#1ABC9C'},
        {data: datas2[9],
          label: countryLabels2[8],
          fill: false,
          borderColor: '#16A085'},
        {data: datas2[10],
          label: countryLabels2[9],
          fill: false,
          borderColor: '#2ECC71'},
        {data: datas2[11],
          label: countryLabels2[10],
          fill: false,
          borderColor: '#F1C40F'},
        {data: datas2[12],
          label: countryLabels2[11],
          fill: false,
          borderColor: '#F1C30F'},
        {data: datas2[13],
          label: countryLabels2[12],
          fill: false,
          borderColor: '#F39C12'},
        {data: datas2[14],
          label: countryLabels2[13],
          fill: false,
          borderColor: '#E67E22 '},
        {data: datas2[15],
          label: countryLabels2[14],
          fill: false,
          borderColor: '#D35400'},
        {data: datas2[16],
          label: countryLabels2[15],
          fill: false,
          borderColor: '#F44336'},
        {data: datas2[17],
          label: countryLabels2[16],
          fill: false,
          borderColor: '#EC407A'},
        {data: datas2[18],
          label: countryLabels2[17],
          fill: false,
          borderColor: '#AB47BC'},
        {data: datas2[19],
          label: countryLabels2[18],
          fill: false,
          borderColor: '#26C6DA'},
        {data: datas2[20],
          label: countryLabels2[19],
          fill: false,
          borderColor2: '#C6C6DA'},
        {data: datas2[21],
          label: countryLabels2[20],
          fill: false,
          borderColor: '#F59'},
        {data: datas2[22],
          label: countryLabels2[21],
          fill: false,
          borderColor: '#CB47BC'},
        {data: datas2[23],
          label: countryLabels2[22],
          fill: false,
          borderColor: '#B56'},
        {data: datas2[24],
          label: countryLabels2[23],
          fill: false,
          borderColor: '#CE93D8'},
        {data: datas2[25],
          label: countryLabels2[24],
          fill: false,
          borderColor: '#CE93D3'},
        {data: datas2[26],
          label: countryLabels2[25],
          fill: false,
          borderColor: '#F44336'},
        {data: datas2[27],
          label: countryLabels2[26],
          fill: false,
          borderColor: '#26C6DA'},
        {data: datas2[28],
          label: countryLabels2[27],
          fill: false,
          borderColor: '#26C6DC'},
        {data: datas2[29],
          label: countryLabels2[28],
          fill: false,
          borderColor: '#FF536C'},
        {data: datas2[30],
          label: countryLabels2[29],
          fill: false,
          borderColor: '#9B59B2'},
        {data: datas2[31],
          label: countryLabels2[30],
          fill: false,
          borderColor: '#9B59B6'}
        
      ]
    },
    options: {
      legend:{

        display: true,

        labels:{
          boxwidth: 3,
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false,
            ticks:{
              beginAtZero: true,
              steps: 100,
              stepValue: 25,
              max: 350
            
            },
              }
            }]
          }
        }
      }
    });     
  //Fin chart Homicide (table2)

//Création du graphique chart 3 Crime (Table1) 
//insert canvas for heading chart (canva3)

let target3 = document.getElementById("bodyContent");
let canva3 = document.createElement("canvas");
canva3.id = "myChart3";
target3.parentNode.insertBefore(canva3, target3).innerHTML;
canva3.style.height = "300px";
canva3.style.width = "100%";

//fetch json library for heading chart3


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
    console.table(dataPoints);

 // 2d array into 2 arrays
   
    let LabelsHead = dataPoints.map(function(tuple) {
      return tuple[0];
  });
  let dataHead  = dataPoints.map(function(tuple) {
      return tuple[1];
  });

    console.log(LabelsHead);
    console.log(dataHead);

    const ctx3 = document.getElementById("myChart3").getContext('2d');
    const chart3 = new Chart(ctx3, {
        // The type of chart we want to create
        type: 'line',
        data: {
            labels: LabelsHead,
            datasets: [{
                label: LabelsHead,
                borderColor: 'rgb(255, 99, 132)',
                data: dataHead,
            }]
        },

        // Configuration options go here
        options: {
          legend:{
            display: false
        }
      }

      });
          function updateScale(chart3) {
            chart3.options.scales.yAxes[0] = {
                type: 'logarithmic'
            };
            chart3.update();
        }

  }); 

// create chart3 for heading 

