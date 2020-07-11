let options = {
  width: 800,
  height: 500,
  backgroundColor: "white",
};

const drawBarChart = function (data, options, element) {
  let chartBody = document.getElementById(element);
  setSize("#chart", options.width, options.height);
  setBackgroundColor("#chart", options.backgroundColor);
  renderBars(data, chartBody);
};

const setSize = function (element, width, height) {
  document.querySelector(element).style.width = width.toString() + "px";
  document.querySelector(element).style.height = height.toString() + "px";
};

const renderBars = function (data, element) {
  for (let i = 0; i < data.length; i++) {
    let bar = document.createElement("div");
    let barWidth = options.width / data.length;
    let gapBetweenBars = barWidth * 0.05;

    barWidth = barWidth - gapBetweenBars;
    bar.style.width = barWidth.toString() + "px";
    //this is temporary make this dynamic
    bar.style.height = "100px";
    bar.style.margin = gapBetweenBars.toString() + "px";
    bar.style.backgroundColor = "red";
    document.getElementById("chart").appendChild(bar);
  }
};

const setBackgroundColor = function (element, color) {
  document.querySelector(element).style.backgroundColor = color;
};

drawBarChart([1, 2, 3, 4, 5, 5, 1, 2], options, "#chart");

//test zone
