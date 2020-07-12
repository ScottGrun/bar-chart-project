let options = {
  width: 800,
  height: 500,
  backgroundColor: "white",
  bars: {
    color: "blue",
    labelColor: "white",
    gap: "8",
  },
};

const drawBarChart = function (data, options, element) {
  let chartBody = document.getElementById(element);
  setSize("#chart", options.width, options.height);
  setBackgroundColor("#chart", options.backgroundColor);
  renderBars(data, options.bars);
  generateYAxisLabels(data);
};

const setSize = function (element, width, height) {
  document.querySelector(element).style.width = width.toString() + "px";
  document.querySelector(element).style.height = height.toString() + "px";
};

const renderBars = function (data, barOptions) {
  for (let i = 0; i < data.length; i++) {
    //Create and Size Bar Element
    let bar = document.createElement("div");
    let barWidth = options.width / data.length;
    let gapBetweenBars = barWidth * (barOptions.gap * 0.01);
    barWidth = barWidth - gapBetweenBars;
    bar.style.width = barWidth.toString() + "px";
    let margin = `0px ${gapBetweenBars.toString()}px`;
    bar.style.margin = margin;
    bar.className = "barElement";

    //Style Bar with User Options
    bar.style.backgroundColor = barOptions.color;
    bar.style.color = barOptions.labelColor;

    //Create  & add data label to bar
    let barValue = document.createElement("p");
    barValue.append(data[i]);
    bar.append(barValue);
    barValue.style.textAlign = "center";

    //Add bar to graph
    document.getElementById("chart").appendChild(bar);
  }

  //Determine bar height based on data value
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
    let barHeight = (data[i] / (Math.ceil(largestElemet / 5) * 5)) * 100;
    bars[i].style.height = barHeight.toString() + "%";
  }
};

const generateYAxisLabels = function (data) {
  let yAxisLabels = document.createElement("div");
  yAxisLabels.id = "yAxisLabels";
  document.getElementById("chart").appendChild(yAxisLabels);
  let largestElemet = data[0];
  for (let i = 0; i < data.length; i++) {
    if (largestElemet < data[i]) {
      largestElemet = data[i];
    }
  }
  //Round to nearest multiple of 5 -- https://stackoverflow.com/questions/18953384/javascript-round-up-to-the-next-multiple-of-5
  largestElemet = Math.ceil(largestElemet / 5) * 5;
  for (let i = largestElemet; i >= 0; i -= 5) {
    let yLabel = document.createElement("p");
    // let yLabelData = Math.trunc(
    //   (largestElemet / (data.length / largestElemet)) * i
    // );

    yLabel.append(i);
    document.getElementById("yAxisLabels").appendChild(yLabel);
  }
};

const setBackgroundColor = function (element, color) {
  document.querySelector(element).style.backgroundColor = color;
};

drawBarChart([1, 2, 4, 12, 30, 42, 21, 5, 6, 7, 8, 10], options, "#chart");

//test zone
//handle negative numbers
