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

const renderBars = function (data) {
  for (let i = 0; i < data.length; i++) {
    let bar = document.createElement("div");
    let barWidth = options.width / data.length;
    let gapBetweenBars = barWidth * 0.05;
    barWidth = barWidth - gapBetweenBars;
    bar.style.width = barWidth.toString() + "px";
    let margin = `0px ${gapBetweenBars.toString()}px`;
    bar.style.margin = margin;
    bar.style.backgroundColor = "red";
    bar.className = "barElement";

    let barValue = document.createElement("p");
    barValue.append(data[i]);
    bar.append(barValue);
    barValue.style.textAlign = "center";
    document.getElementById("chart").appendChild(bar);
  }
  setBarHeight(data);
};

const setBarHeight = function (data) {
  let bars = document.getElementsByClassName("barElement");
  let largestElemet = data[0];
  for (let i = 0; i < data.length; i++) {
    if (largestElemet < data[i]) {
      largestElemet = data[i];
    }
  }

  console.log(`Largest ${largestElemet}`);
  for (let i = 0; i < bars.length; i++) {
    let barHeight = (data[i] / largestElemet) * 100;
    bars[i].style.height = barHeight.toString() + "%";
  }
};

const setBackgroundColor = function (element, color) {
  document.querySelector(element).style.backgroundColor = color;
};

drawBarChart([2, 12, 41, 24, 21, 3, 9, 5, 5, 15, 2], options, "#chart");

//test zone
//handle negative numbers
