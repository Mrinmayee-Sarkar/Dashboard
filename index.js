google.charts.load("current", { packages: ["corechart"] });

google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
  let data1 = google.visualization.arrayToDataTable([
    [
      "Genre",
      "Employer: K73,500",
      "Employee: K52,500",
      "Total Interest: K244313",
    ],
    ["20", 20, 20, 30],
    [" ", 25, 25, 35],
    ["25", 30, 30, 40],
    [" ", 35, 35, 45],
    ["30", 40, 40, 50],
    [" ", 45, 45, 55],
    ["35", 50, 55, 60],
    [" ", 60, 65, 65],
    ["40", 65, 75, 75],
    [" ", 70, 80, 80],
    ["60", 75, 85, 85],
    [" ", 85, 90, 95],
    ["65", 90, 95, 115],
  ]);

  let colors1 = [
    { color: "#00008B" },
    { color: "#0437F2" },
    { color: "#87CEEB" },
  ];

  let options1 = {
    width: "48.82vw",
    height: "16.27vw",
    legend: {
      position: "top",
      maxLines: 1,
      textStyle: { fontSize: "0.78vw", color: "grey" },
    },
    bar: { groupWidth: "40%" },
    vAxis: { format: "currency" },
    vAxis: { gridlines: { count: 3 } },
    isStacked: true,
    series: colors1,
  };

  let chart1 = new google.visualization.ColumnChart(
    document.getElementById("chart_div1")
  );
  chart1.draw(data1, options1);
}

/************************************************************************* */
google.charts.load("current", { packages: ["corechart"] });

google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
  let data2 = google.visualization.arrayToDataTable([
    ["Genre", "Employer", "Employee", "Total Interest"],
    ["20", 20, 20, 30],
    ["25", 30, 30, 40],
    ["30", 40, 40, 50],
    ["35", 50, 55, 60],
    ["40", 65, 75, 75],
    ["60", 75, 85, 85],
    ["65", 90, 95, 115],
  ]);

  let colors2 = [
    { color: "#00008B" },
    { color: "#0437F2" },
    { color: "#87CEEB" },
  ];

  let options2 = {
    width: "15vw",
    height: "15vw",
    legend: {
      position: "top",
      maxLines: 1,
      textStyle: { fontSize: "0.78vw", color: "grey" },
    },
    bar: { groupWidth: "20%" },
    vAxis: { format: "currency" },
    vAxis: { gridlines: { count: 3 } },
    isStacked: true,
    series: colors2,
  };

  let chart2 = new google.visualization.ColumnChart(
    document.getElementById("chart_div2")
  );
  chart2.draw(data2, options2);
}

$(window).resize(function () {
  drawChart1();
});

$(window).resize(function () {
  drawChart2();
});

/********************************************************** */

document.addEventListener("DOMContentLoaded", function () {
  let range = document.getElementById("myRange");
  let demo = document.getElementById("demo");
  range.addEventListener("input", function () {
    demo.textContent = range.value;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let range1 = document.getElementById("myRange1");
  let demo1 = document.getElementById("demo1");
  range1.addEventListener("input", function () {
    demo1.textContent = range1.value;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#menu");
  const close = document.querySelector("#close");
  const sidebar = document.querySelector("aside");

  menu.addEventListener("click", () => {
    sidebar.style.display = "block";
  });

  close.addEventListener("click", () => {
    sidebar.style.display = "none";
  });
});
