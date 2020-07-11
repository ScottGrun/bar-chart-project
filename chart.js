let options = {
  width: 800,
  height: 500,
  backgroundColor: "white",
};

const drawBarChart = function (data, options, element) {
  let chartBody = document.getElementById(element);
  setSize("#chart", options.width, options.height);
  setBackgroundColor("#chart", options.backgroundColor);
};

const setSize = function (element, width, height) {
  document.querySelector(element).style.width = (width.toString() + "px");
  document.querySelector(element).style.height = (height.toString() + "px");
};

const renderBar = function(){

}

const setBackgroundColor = function(element, color){
  document.querySelector(element).style.backgroundColor = color;
}

drawBarChart([1, 2, 3, 4, 5], options, "#chart");
