import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portales',
  templateUrl: './portales.component.html',
  styleUrls: ['./portales.component.css']
})
export class PortalesComponent implements OnInit {
  items = [{title:'Portal Inmobiliario',url:'portalinmobiliario.com'},{title:'Yapo',url:'https://www.portalinmobiliario.com/'},{title:'Yapo',url:'https://www.portalinmobiliario.com/'},{title:'Portal Inmobiliario',url:'portalinmobiliario.com'},{title:'Yapo',url:'https://www.portalinmobiliario.com/'},{title:'Yapo',url:'https://www.portalinmobiliario.com/'}]
  portal = '';
  selectionFlag = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item){
    this.portal = item;
  }
}
