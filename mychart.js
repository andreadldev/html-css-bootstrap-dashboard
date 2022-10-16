window.onload=function(){
    var ctx = document.getElementById("myChart").getContext("2d");
    var data = {
        labels: ["Never", "Every few hours", "Every hour", "Muliple times per hour", "Constantly"],
        datasets: [
            {
                backgroundColor: "#3e76d3",
                borderWidth: 0,
                hoverBackgroundColor: "#3a3b74",
                data: [2.4, 5, 1.4, 1.8, 1.1],
            },
        ]
    };
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            tooltips: false,
            scales: {
             xAxes: [{
                barPercentage:1,
                categoryPercentage:0.5,
                gridLines:{
                   display:false
                },
                ticks: {
                   fontColor:"#8f9092",
                   maxRotation: 65,
                }
             }],
             yAxes: [{
                display: true,
                scaleLabel: {
                   show: true
                },
                gridLines:{
                   color:"#ecedef"
                },
                ticks: {
                   max: 7,
                   beginAtZero:true,
                   stepSize: 1.3,
                   fontColor:"#8f9092",
                   callback:function(value) {
                       var x = ["0%", "10%", "20%", "30%", "40%", "50%", "60%"];
                         return x[value | 0];
                   }
                }
             }]
            },
          legend: {
            display: false
           }
        }
    });
        }
    