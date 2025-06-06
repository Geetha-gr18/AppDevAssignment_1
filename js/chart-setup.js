// chart-setup.js

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('repairChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Oil Change', 'Brake Repair', 'Tire Rotation', 'Engine Diagnostics', 'Battery Replacement'],
        datasets: [{
          label: 'Average Cost ($)',
          data: [40, 150, 60, 120, 100],
          backgroundColor: [
            '#4e73df',
            '#1cc88a',
            '#36b9cc',
            '#f6c23e',
            '#e74a3b'
          ]
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
            ticks: {
              maxRotation: 45,
              minRotation: 45,
              align: 'start'
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  