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
          text: 'Nombre de pas par jour sur une semaine'
        },
        xAxis: {
          categories: ['Lundi','Mardi', 'Mercredi', 'Jeudi', 'Vendredi','Samedi', 'Dimanche']
        },
        yAxis: {
          title: {
            text: 'Pas effectué'
          }
        },
        series: [
          {
            name: 'You',
            type: undefined,
            data: [9000, 10000, 15000, 20000,8000,11000,11500]
          }]
      });
     let myChart2 = HighCharts.chart('highcharts2',{
                chart: {
                          type: 'spline'
                        },
                        title: {
                          text: 'Nombre de pas par semaine sur un mois'
                        },
                        xAxis: {
                          categories: ['S1','S2', 'S3', 'S4']
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
                            data: [12071, 15000, 30000, 25000]
                          }]
               });

    }

}
