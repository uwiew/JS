export default {
  type: 'doughnut',
  data: {
    labels: ['iPhone 7 256G', 'iPhone 5C 32G', 'iPhone 7 128G', 'iPhone 7 128G', 'iPhone 7 Plus 32G'],
    datasets: [{
      label: '剁手排行',
      data: [100, 80, 66, 60, 59],
      backgroundColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  }
}
