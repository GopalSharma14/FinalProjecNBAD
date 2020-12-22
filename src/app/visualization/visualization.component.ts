import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../data.service';
import axios from "axios";

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {

  // private dataSource: BudgetData[] = [];
  public  dataSource = {
    datasets: [{
        data: [],
        backgroundColor: ['#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#F82D0D',
        '#2F895E']
    }],
    labels: []
};


  colGen = function () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };


//    chart = [];
//      category = [];
//  amount = [];

constructor(private dataservice: DataService) {
  }


  ngOnInit(): void {

    axios({
      method: "post",
      headers: { Pragma: "no-cache" },
      url: "http://localhost:3000/catData",
      data: {
         username: localStorage.getItem("currentUser")
      },
    }).then(function (res) {
      var budgetExpenses = [];
      // let chart: any[];
      let category = [];
      let amount = [];
      let color = [];
      for (var i = 0; i < res.data.length; i++) {
        budgetExpenses[i] = res.data[i];
      }
      console.log("Vis", budgetExpenses[1].total);
      for (var i = 0; i < budgetExpenses.length; i++){
        category.push(budgetExpenses[i]._id)
        amount.push(budgetExpenses[i].total)
      }
      let pieChart = new Chart('myPie', {
        type: 'pie',
        data: {
          labels: category,
          datasets: [
            {
              data: amount,
              borderColor: '#3cba9f',
              backgroundColor: [
                "#F22020",
                "#CCFFE5",
                "#FFE5CC",
                "#FF6666",
                "#606060",
                "#0F479C"
              ],
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }

      });
      let barChart = new Chart('myBarChart', {
        type: 'bar',
        data: {
          labels: category,
          datasets: [
            {
              data: amount,
              borderColor: '#3cba9f',
              backgroundColor: [
                "#F22020",
                "#CCFFE5",
                "#0F479C",
                "#606060",
                "#FFE5CC",
                "#FF6666"
              ],
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
            }],
          }
        }

      });
      let doughnutChart = new Chart('myDoughNut', {
        type: 'doughnut',
        data: {
          labels: category,
          datasets: [
            {
              data: amount,
              borderColor: '#3cba9f',
              backgroundColor: [
                "#F22020",
                "#CCFFE5",
                "#FFE5CC",
                "#FF6666",
                "#606060",
                "#0F479C"
              ],
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }

      });

    });
  }
}
