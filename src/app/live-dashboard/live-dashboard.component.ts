import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-live-dashboard',
  templateUrl: './live-dashboard.component.html',
  styleUrls: ['./live-dashboard.component.css']
})

export class LiveDashboardComponent implements OnInit {

  public chart: any;
  public voltage: any;
  public current: any;
  public power: any;
  public powerFactor: any;
  public frequency: any;
  public powerFactorLine: any;
  public powerLine: any;
  public date: any = formatDate(new Date(), 'dd/MM/YYYY hh:mm a', 'en-US');

  constructor() { }

  ngOnInit(): void {
    this.voltageChart();
    this.currentChart();
    this.powerChart();
    this.powerFactorChart();
    this.frequencyChart();
    this.powerLineChart();
    this.powerFactorLineChart();
  }

  voltageChart() {
    this.voltage = new Chart("voltage", {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: 'Voltage',
          data: [],
          backgroundColor: [
            '#48D3AA',
            '#ccc',
          ],
          borderColor: [
            '#48D3AA',
            '#ccc',
          ]
        }]
      },
      options: {
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false,
            yAlign: "bottom",

          },
          title: {
            display: true,
            text: 'Voltage(V)'
          },
          legend: {
            display: false
          },
        },
        aspectRatio: 3.5,
        responsive: true,
        cutout: "95%",
        rotation: 270, // start angle in degrees
        circumference: 180, // sweep angle in degrees
      },
    },
    );
    setInterval(() => {
      this.voltage.data.labels.push(formatDate(new Date(), 'hh:mm:ss', 'en-US'));
      this.voltage.data.datasets[0].data.pop();
      this.voltage.data.datasets[0].data.push(Math.random() * (250 - 220) + 220);
      this.voltage.update();
    }, 2000);
  }

  currentChart() {
    this.current = new Chart("current", {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: 'Current(A)',
          data: [],
          backgroundColor: [
            '#48D3AA',
            '#ccc',
          ],
          borderColor: [
            '#48D3AA',
            '#ccc',
          ]
        }]
      },
      options: {
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          title: {
            display: true,
            text: 'Current(A)'
          },
          legend: {
            display: false
          },
        },
        aspectRatio: 3.5,
        responsive: true,
        cutout: "95%",
        rotation: 270, // start angle in degrees
        circumference: 180, // sweep angle in degrees
      },
    },
    );
    setInterval(() => {
      this.current.data.labels.push(formatDate(new Date(), 'hh:mm:ss', 'en-US'));
      this.current.data.datasets[0].data.pop();
      this.current.data.datasets[0].data.push(Math.random() * (100 - 1) + 1);
      this.current.update();
    }, 2000);
  }

  powerChart() {
    this.power = new Chart("power", {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: 'Current(A)',
          data: [],
          backgroundColor: [
            '#48D3AA',
            '#ccc',
          ],
          borderColor: [
            '#48D3AA',
            '#ccc',
          ]
        }]
      },
      options: {
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          title: {
            display: true,
            text: 'Power(kW)'
          },
          legend: {
            display: false
          },
        },
        aspectRatio: 3.5,
        responsive: true,
        cutout: "95%",
        rotation: 270, // start angle in degrees
        circumference: 180, // sweep angle in degrees
      },
    },
    );
    setInterval(() => {
      this.power.data.labels.push(formatDate(new Date(), 'hh:mm:ss', 'en-US'));
      this.power.data.datasets[0].data.pop();
      this.power.data.datasets[0].data.push(Math.random() * (250 - 220) + 220);
      this.power.update();
    }, 2000);
  }

  powerFactorChart() {
    this.powerFactor = new Chart("powerFactor", {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: 'Current(A)',
          data: [],
          backgroundColor: [
            '#48D3AA',
            '#ccc',
          ],
          borderColor: [
            '#48D3AA',
            '#ccc',
          ]
        }]
      },
      options: {
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          title: {
            display: true,
            text: 'Power Factor'
          },
          legend: {
            display: false
          },
        },
        aspectRatio: 3.5,
        responsive: true,
        cutout: "95%",
        rotation: 270, // start angle in degrees
        circumference: 180, // sweep angle in degrees
      },
    },
    );
    setInterval(() => {
      this.powerFactor.data.labels.push(formatDate(new Date(), 'hh:mm:ss', 'en-US'));
      this.powerFactor.data.datasets[0].data.pop();
      this.powerFactor.data.datasets[0].data.push(Math.random() * (250 - 220) + 220);
      this.powerFactor.update();
    }, 2000);
  }

  frequencyChart() {
    this.frequency = new Chart("frequency", {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: 'Current(A)',
          data: [],
          backgroundColor: [
            '#48D3AA',
            '#ccc',
          ],
          borderColor: [
            '#48D3AA',
            '#ccc',
          ]
        }]
      },
      options: {
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          title: {
            display: true,
            text: 'Frequency(Hz)'
          },
          legend: {
            display: false
          },
        },
        aspectRatio: 3.5,
        responsive: true,
        cutout: "95%",
        rotation: 270, // start angle in degrees
        circumference: 180, // sweep angle in degrees
      },
    },
    );
    setInterval(() => {
      this.frequency.data.labels.push(formatDate(new Date(), 'hh:mm:ss', 'en-US'));
      this.frequency.data.datasets[0].data.pop();
      this.frequency.data.datasets[0].data.push(Math.random() * (250 - 220) + 220);
      this.frequency.update();
    }, 2000);
  }
  scroller(scroll: any) {
    // console.log(scroll);
    const dataLength = this.powerLine.data.labels.length;
    
    
    if(scroll.deltaY > 0){
      if (this.powerLine.options.scales.x.max >= dataLength) {
        console.log(dataLength);
        this.powerLine.options.scales.x.min = dataLength - 7;
      this.powerLine.options.scales.x.max = dataLength - 1;
      }
      else{
        this.powerLine.options.scales.x.min += 1;
      this.powerLine.options.scales.x.max += 1;
      }
      
    }
    else if(scroll.deltaY < 0){
      if( this.powerLine.options.scales.x.min <= 0){
        this.powerLine.options.scales.x.min = 0;
      this.powerLine.options.scales.x.max = 6;
      }else{        
      this.powerLine.options.scales.x.min -= 1;
      this.powerLine.options.scales.x.max -= 1;
      }
    }
    this.powerLine.update();
  }

  powerLineChart() {
    const tooltipLine = {
      id: 'tooltipLine',
    };

    this.powerLine = new Chart("powerLine", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: [],
        datasets: [
          {
            label: "Power",
            data: [],
            // tension:0.4,
            // backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio: 2.8,
        responsive: true,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false,
          },
          title: {
            display: true,
            text: 'Power',
          },
          legend: {
            display: false,
          },
        },
        hover: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            min: 0,
            max: 6
          },
          y: {
            beginAtZero: true
          }
        },
      },
      plugins:[tooltipLine]

    }
    );
    setInterval(() => {
      this.powerLine.data.labels.push((formatDate(new Date(), 'hh:mm:ss', 'en-US')));
      this.powerLine.data.datasets[0].data.push((Math.random() * 10));
      // this.powerLine.options.scales.x.min += 1;
      // this.powerLine.options.scales.x.max += 1;
      this.powerLine.update();
    }, 2000);
    this.powerLine.canvas.addEventListener('wheel', (e: any) => {
      this.scroller(e);
    })
    setTimeout(() => {
      setInterval(() => {
      this.powerLine.options.scales.x.min += 1;
      this.powerLine.options.scales.x.max += 1;
      this.powerLine.update();
    }, 2000);
    }, 14000);
  }

  scrollerPF(scroll: any) {
    // console.log(scroll);
    const dataLength = this.powerFactorLine.data.labels.length;
    
    
    if(scroll.deltaY > 0){
      if (this.powerFactorLine.options.scales.x.max >= dataLength) {
        console.log(dataLength);
        this.powerFactorLine.options.scales.x.min = dataLength - 7;
      this.powerFactorLine.options.scales.x.max = dataLength - 1;
      }
      else{
        this.powerFactorLine.options.scales.x.min += 1;
      this.powerFactorLine.options.scales.x.max += 1;
      }
      
    }
    else if(scroll.deltaY < 0){
      if( this.powerFactorLine.options.scales.x.min <= 0){
        this.powerFactorLine.options.scales.x.min = 0;
      this.powerFactorLine.options.scales.x.max = 6;
      }else{        
      this.powerFactorLine.options.scales.x.min -= 1;
      this.powerFactorLine.options.scales.x.max -= 1;
      }
    }
    this.powerFactorLine.update();
  }
  powerFactorLineChart() {
    this.powerFactorLine = new Chart("powerFactorLine", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [],
        datasets: [
          {
            // fill: false,
            // backgroundColor: "rgba(75,192,192,0.4)",
            // borderColor: "rgba(75,192,192,1)",
            // borderCapStyle: 'butt',
            // borderDash: [],
            // borderDashOffset: 0.0,
            // borderJoinStyle: 'miter',
            // pointBorderColor: "rgba(75,192,192,1)",
            // pointBackgroundColor: "#fff",
            // pointBorderWidth: 1,
            // pointHoverRadius: 5,
            // pointHoverBackgroundColor: "rgba(75,192,192,1)",
            // pointHoverBorderColor: "rgba(220,220,220,1)",
            // pointHoverBorderWidth: 2,
            // pointRadius: 5,
            // pointHitRadius: 10,
            label: "Power Factor",
            data: [],
            // backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio: 2.8,
        responsive: true,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          title: {
            display: true,
            text: 'Power Factor'
          },
          legend: {
            display: false
          },
        },
        hover: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x: {
            min: 0,
            max: 6
          },
          y: {
            beginAtZero: true
          }
        },
        // animation: {
        //   onComplete: () => {
        //     // delayed = true;
        //   },
        //   delay: (context) => {
        //     let delay = 0;
        //     if (context.type === 'data' && context.mode === 'default' && !delay) {
        //       delay = context.dataIndex * 300 + context.datasetIndex * 100;
        //     }
        //     return delay;
        //   },
        // },
      }

    }
    );

    setInterval(() => {
      // console.log('invoking' + Math.random() * 10)
      this.powerFactorLine.data.labels.push((formatDate(new Date(), 'hh:mm:ss', 'en-US')));
      this.powerFactorLine.data.datasets[0].data.push((Math.random() * 10));
      // console.log(this.powerFactorLine.data.labels);
      this.powerFactorLine.update();
    }, 2000);
    this.powerFactorLine.canvas.addEventListener('wheel', (e: any) => {
      this.scrollerPF(e);
    })
    setTimeout(() => {
      setInterval(() => {
      this.powerFactorLine.options.scales.x.min += 1;
      this.powerFactorLine.options.scales.x.max += 1;
      this.powerFactorLine.update();
    }, 2000);
    }, 14000);
  }

}
