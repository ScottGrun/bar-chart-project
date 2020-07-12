let options = {
  width: 800,
  height: 500,
  backgroundColor: "white",
  labels: [
    "January",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "aaaaaaaaa",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  bars: {
    color: "blue",
    labelColor: "white",
    gap: "8",
    labelPosition: "center",
  },
};

const checkXLabelReadAbility = function (barWidth, barToCheck) {
  let xLabels = document.getElementsByClassName("xAxisLabel");
  console.log(` ${barWidth} ?< ${getComputedStyle(xLabels[barToCheck]).width}`);
  if (getComputedStyle(xLabels[barToCheck]).width > barWidth) {
    xLabels[barToCheck].style.transform = " rotate(90deg)";
  }
};

const drawBarChart = function (data, options, element) {
  let chartBody = document.getElementById(element);
  setSize("#chart", options.width, options.height);
  setBackgroundColor("#chart", options.backgroundColor);
  generateYAxisLabels(data);

  renderBars(data, options.bars);
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
    bar.style.justifyContent = barOptions.labelPosition;

    //Create  & add data label to bar
    let barValue = document.createElement("p");
    barValue.append(data[i]);
    bar.append(barValue);
    barValue.style.textAlign = "center";
    bar.append(generateXAxisLabels(options.labels, i, data));
    //Add bar to graph
    document.getElementById("chart").appendChild(bar);
    checkXLabelReadAbility(barWidth, i);
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
  let yAxisLabels = document.createElement("p");
  let yAxisDividersContainer = document.createElement("div");
  yAxisDividersContainer.id = "yAxisDividersContainer";
  let chart = document.getElementById("chart");
  yAxisLabels.id = "yAxisLabels";
  chart.appendChild(yAxisLabels);
  chart.appendChild(yAxisDividersContainer);

  let largestElemet = data[0];
  for (let i = 0; i < data.length; i++) {
    if (largestElemet < data[i]) {
      largestElemet = data[i];
    }
  }
  //Round to nearest multiple of 5 -- https://stackoverflow.com/questions/18953384/javascript-round-up-to-the-next-multiple-of-5
  largestElemet = Math.ceil(largestElemet / 5) * 5;
  for (let i = largestElemet; i >= 0; i -= 5) {
    let yLabel = document.createElement("div");
    yLabel.append(i);
    yLabel.className = "yAxisLabel";
    document.getElementById("yAxisLabels").appendChild(yLabel);

    let yAxisDivider = document.createElement("div");
    yAxisDivider.className = "yAxisDivider";
    yAxisDividersContainer.append(yAxisDivider);
  }
};

const generateXAxisLabels = function (labels, barToLabel, data) {
  let xAxisLabel = document.createElement("span");
  xAxisLabel.className = "xAxisLabel";

  if (
    labels === undefined ||
    labels.length === 0 ||
    labels.length < data.length
  ) {
    console.log("Please make sure you provided correctly formatted labels.");
    xAxisLabel.append(barToLabel);
    return xAxisLabel;
  } else {
    xAxisLabel.append(labels[barToLabel]);
    return xAxisLabel;
  }
};

const setBackgroundColor = function (element, color) {
  document.querySelector(element).style.backgroundColor = color;
};

drawBarChart([1, 2, 4, 12, 30, 42, 21, 5, 6, 7, 8, 10], options, "#chart");

//test zone
//handle negative numbers
