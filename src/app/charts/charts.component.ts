import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  // Pie
  public pieChartLabels: string[]
  public pieChartData: any[]
  public pieChartType: string = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private _movieService: MoviesService) {

  }

  ngOnInit() {
    this._movieService.getMovies().subscribe(
      res => {
        console.log(res.map(res => res.Genre));
      }
    )
  }

}
