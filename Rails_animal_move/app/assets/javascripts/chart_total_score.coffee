window.draw_graph2 = ->
  ctx = document.getElementById("myChart2").getContext('2d')
  barNum = 7
  labels = new Array(barNum)
  bgColors = new Array(barNum)
  bdColors = new Array(barNum)
  for i in [0...barNum]
    if i == 6
      labels[i] = 'today'
    else if i == 5
      labels[i] = 6 - i + 'day ago'
    else
      labels[i] = 6 - i + 'days ago'
  #bgColors[i] = 'rgba(75, 192, 192, 0.2)'
  #bdColors[i] = 'rgba(75, 192, 192, 1)'
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: '# Total level',
        data: gon.data4,
#backgroundColor: bgColors,
#borderColor: bdColors,
        backgroundColor: 'rgba(30, 30, 192, 0.2)',
        borderColor: 'rgba(30, 30, 192, 1)',
        lineTension: 0,
        borderWidth: 1
      }],
      labels: labels,
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })