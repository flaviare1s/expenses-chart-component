const ctx = document.getElementById('columnChart')
const total = document.getElementById('total')

let labelsX = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
let values = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]

let totalValue = values.reduce((acc, value) => {
    return acc + value
},0)
total.innerText = totalValue

const currentDate = new Date()
const currentDay = currentDate.getDay()

const backgroundColors = [
    'hsl(10, 79%, 65%)', // Monday
    'hsl(10, 79%, 65%)', // Tuesday
    'hsl(10, 79%, 65%)', // Wednesday
    'hsl(10, 79%, 65%)', // Thursday
    'hsl(10, 79%, 65%)', // Friday
    'hsl(10, 79%, 65%)', // Saturday
    'hsl(10, 79%, 65%)' // Sunday
]
backgroundColors[currentDay - 1] = 'hsl(186, 34%, 60%)'

const hoverBackgroundColors = [
    '#FF9B86',
    '#FF9B86',
    '#FF9B86',
    '#FF9B86',
    '#FF9B86',
    '#FF9B86',
    '#FF9B86',
]
hoverBackgroundColors[currentDay - 1] = '#B4E0E5'


  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsX,
      datasets: [{
        label: '',
        data: values,
        borderWidth: 0,
        backgroundColor: backgroundColors,
        hoverBackgroundColor: hoverBackgroundColors,
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
        tooltip: {
            backgroundColor: 'hsl(25, 47%, 15%)',
            displayColors: false,
            cornerRadius: 5,
            callbacks: {
                title: function () {
                    return ''
                },
                label: function (context) {
                    let label = context.dataset.label || ''
                    if (label) {
                        label += ': '
                    }
                    label += "$" + context.formattedValue
                    return label
                },
            },
            bodyFont: {
                size: 18,
                family: 'DM Sans',
            },
        },
      },
    },
  })

