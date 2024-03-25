const ctx = document.getElementById('columnChart')

let labelsX = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
let values = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsX,
      datasets: [{
        label: '',
        data: values,
        borderWidth: 0,
        backgroundColor: 'hsl(10, 79%, 65%)',
        borderRadius: 5,
        barPercentage: 1,
      }],
    },
    options: {
        indexAxis: 'x',
      scales: {
        y: {
            display: false,
            beginAtZero: true,
            grid: {
                display: false,
            },
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: 'hsl(28, 10%, 53%)',
                font: {
                    size: 15, 
                    family: 'DM Sans', 
                  },
                align: 'center',
            },
        },
      },
      plugins: {
        legend: {
            display: false,
        },
      },
    },
  })