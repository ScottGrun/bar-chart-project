let options = {
  width: 500,
  height: 500,
  backgroundColor: "#eb4034",
};

const drawBarChart = function (options) {
  let chartBody = document.getElementById("#chart");
  setSize("#chart", options.width, options.height);
  setBackgroundColor("#chart", options.backgroundColor);
};

const setSize = function (element, width, height) {
  document.querySelector(element).style.width = (width.toString() + "px");
  document.querySelector(element).style.height = (height.toString() + "px");
};

const setBackgroundColor = function(element, color){
  document.querySelector(element).style.backgroundColor = "blue";
}

drawBarChart(options);
