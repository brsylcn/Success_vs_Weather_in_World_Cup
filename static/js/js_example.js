var query = "/data"

d3.json(query).then(function(data){
var duration = data.map(d => {
  var dur = d.duration.split(" ");
  var dura = parseInt(dur[0]);
  return dura})
  console.log(duration);
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