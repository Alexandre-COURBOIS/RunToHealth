import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage {
constructor() { }

    ionViewDidEnter() {
      this.plotSimpleBarChart();
    }

    plotSimpleBarChart() {
      let myChart = HighCharts.chart('highcharts', {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Nombre de pas'
        },
        xAxis: {
          categories: ['Heure','Jour', 'Semaine', 'Mois']
        },
        yAxis: {
          title: {
            text: 'Pas effectué'
          }
        },
        series: [
          {
            name: 'Jane',
            type: undefined,
            data: [9000, 10000, 50000, 980000]
          }]
      });
    }

}
