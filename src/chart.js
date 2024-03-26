const ctx = document.getElementById('columnChart')
const total = document.getElementById('total')

const fetchChartData = async () => {
    try {
        const response = await fetch('../data.json')
        const data = await response.json()
        return data;
    } catch (error) {
        console.error('Error fetching data:', error)
        return null;
    }
};

const updateChart = async () => {
    const data = await fetchChartData()
    if (!data || !Array.isArray(data)) {
        console.error('Invalid data format')
        return;
    }

    const labelsX = data.map(entry => entry.day)
    const values = data.map(entry => entry.amount)

    const totalValue = values.reduce((acc, value) => acc + value, 0)
    total.innerText = totalValue.toFixed(2)

    const currentDate = new Date();
    const currentDay = currentDate.getDay()

    const backgroundColors = Array(7).fill('hsl(10, 79%, 65%)')
    backgroundColors[currentDay - 1] = 'hsl(186, 34%, 60%)'

    const hoverBackgroundColors = Array(7).fill('#FF9B86')
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
                            return '';
                        },
                        label: function (context) {
                            let label = context.dataset.label || ''
                            if (label) {
                                label += ': '
                            }
                            label += '$' + context.formattedValue;
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
}

updateChart()

