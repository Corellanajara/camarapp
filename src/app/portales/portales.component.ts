import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portales',
  templateUrl: './portales.component.html',
  styleUrls: ['./portales.component.css']
})
export class PortalesComponent implements OnInit {
  items = ['Portal Inmobiliario']
  constructor() { }

  ngOnInit(): void {
  }

}
