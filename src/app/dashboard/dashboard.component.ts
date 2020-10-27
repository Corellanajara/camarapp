import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data = undefined;

  constructor(public dataService:DataService) {
    dataService.getData().subscribe(result => {
     this.data = result;
     console.log('data:',this.data);
   });
 }

  ngOnInit(): void {
  }

}
