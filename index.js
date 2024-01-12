google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);


function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Genre', 'Employer: K73,500', 'Employee: K52,500', 'Total Interest: K244313'
       ],
    ['20',20, 20, 30,],
    [' ', 25, 25, 35 ],
    ['25',30, 30, 40],
    [' ', 35, 35, 45],
    ['30',40, 40, 50],
    [' ', 45, 45, 55],
    ['35',50, 55, 60],
    [' ', 60 ,65, 65],
    ['40',65, 75, 75],
    [' ', 70, 80, 80],
    ['60',75, 85, 85],
    [' ', 85, 90, 95],
    ['65',90, 95, 115]

  ]);

  var colors = [
    { color: '#00008B' },  
    { color: '#0437F2' },      
    { color: '#87CEEB' },   
    ]

  var options = {
    width: 750,
    height: 250,
    legend: { position: 'top', maxLines: 1,textStyle:{fontSize:12,color:"grey"} },
    bar: { groupWidth: '40%' },
    vAxis:{ format:'currency'},
    vAxis: { gridlines: { count: 3 } },
    isStacked: true,
    series:colors
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}


var slider= document.getElementById("myRange")
var output= document.getElementById("demo")

output.innerHTML = slider.value

slider.oninput=function(){
  output.innerHTML=this.value
}

