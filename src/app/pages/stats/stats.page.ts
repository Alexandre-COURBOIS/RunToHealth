import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage {

   constructor() { }

    ionViewDidEnter() {
      this.plotSimpleBarChart();
    }

    plotSimpleBarChart() {
      let myChart = HighCharts.chart('highcharts', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Nombre de pas'
        },
        xAxis: {
          categories: ['Jour', 'Semaine', 'Mois']
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
            data: [10000, 50000, 980000]
          }]
      });
    }

}
