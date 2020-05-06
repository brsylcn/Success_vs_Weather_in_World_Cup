function filterYears(data){
  return parseInt(data.release_year) > 2019
}


var query = "http://127.0.0.1:5000/data2"

d3.json(query).then(function(data){

var myPlot = document.getElementById('myDiv'),
   budget = data.map(d => d.budget)
   gross = data.map(d => d.gross)
   title = data.map(d => d.movie_title)
   imdb = data.map(d => d.imdb_score)
   roi = []
   for(var i=0; i< gross.length; i++) {
    roi.push(((i - budget[i]) / budget[i]))
}
   console.log(roi);
trace = {
  x: budget,
  y: gross,
  mode:'markers', marker:{size: 3, color: "red"},
  type: 'scatter',
  text: title 
};

data = [trace];

// 7. Define our plot layout
layout = {
  title: "Budget vs Gross",
  xaxis: { title: "Budget" },
  yaxis: { title: "Gross"},
  hovermode:'closest'
};

Plotly.newPlot('myDiv', data, layout)

myPlot.on()

});






// Create the Trace
// var trace1 = {
//   x: data.,
//   y: data.duration,
//   type: "bar"
// };
//
// // Create the data array for the plot
// var data = [trace1];
//
// // Define the plot layout
// var layout = {
//   title: "Eye Color vs Flicker",
//   xaxis: { title: "Eye Color" },
//   yaxis: { title: "Flicker Frequency" }
// };
//
// // Plot the chart to a div tag with id "bar-plot"
// Plotly.newPlot("bar-plot", data, layout);
// })
