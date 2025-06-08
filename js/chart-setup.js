// Chart Scripts

// Register plugin
    Chart.register(ChartDataLabels);

    // Bar Chart - Average Repair Cost
    const ctxBar = document.getElementById('repairChart').getContext('2d');
    new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: ['Oil Change', 'Brake Repair', 'Tire Rotation', 'Engine Diagnostics', 'Battery Replacement'],
        datasets: [{
          label: 'Average Cost ($)',
          data: [40, 150, 60, 120, 100],
          backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Average Repair Costs by Type'
          }
        },
        scales: {
          x: {
            ticks: { maxRotation: 45, minRotation: 45, align: 'start' }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Pie Chart - Repair Frequency
    const ctxPie = document.getElementById('repairPieChart').getContext('2d');
    new Chart(ctxPie, {
      type: 'pie',
      data: {
        labels: ['Oil Change', 'Brake Repair', 'Tire Rotation', 'Engine Diagnostics', 'Battery Replacement'],
        datasets: [{
          data: [30, 20, 15, 10, 25],
          backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Repair Type Frequency (Estimated)'
          },
          datalabels: {
            color: '#fff',
            font: { weight: 'bold', size: 14 },
            formatter: value => `${value}%`
          }
        }
      },
      plugins: [ChartDataLabels]
    });
    // Horizontal Bar Chart – Repair Duration
  const ctxDuration = document.getElementById('durationChart').getContext('2d');
  new Chart(ctxDuration, {
  type: 'bar',
  data: {
    labels: ['Oil Change', 'Brake Repair', 'Diagnostics', 'Battery Replacement'],
    datasets: [{
      label: 'Avg Duration (minutes)',
      data: [30, 90, 45, 20],
      backgroundColor: ['#36b9cc', '#f6c23e', '#4e73df', '#1cc88a']
    }]
  },
  options: {
    indexAxis: 'y', // Makes it horizontal
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Average Repair Duration by Type'
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Minutes'
        }
      }
    }
  }
});