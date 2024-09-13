// Daily Bins Collected Chart
const ctxDaily = document.getElementById('daily-chart').getContext('2d');
const dailyChart = new Chart(ctxDaily, {
    type: 'line', // You can change the type to 'bar', 'line', etc.
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Example days
        datasets: [{
            label: 'Bins Collected Per Day',
            data: [30, 45, 35, 50, 40, 60, 55], // Example data
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Monthly Bins Collected Chart
const ctxMonthly = document.getElementById('monthly-chart').getContext('2d');
const monthlyChart = new Chart(ctxMonthly, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Bins Collected Per Month',
            data: [300, 400, 350, 500, 450, 600, 500, 520, 450, 600, 580, 550], // Example data
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Yearly Bins Collected Chart
const ctxYearly = document.getElementById('yearly-chart').getContext('2d');
const yearlyChart = new Chart(ctxYearly, {
    type: 'bar',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024'], // Example years
        datasets: [{
            label: 'Bins Collected Per Year',
            data: [12000, 15000, 13000, 17000, 20000], // Example data
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
