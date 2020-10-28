import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import ApexCharts from 'apexcharts'

interface portalInmobiliario{
  'Baños' : string,
  'Dormitorios' : string,
  'Superficie total' : number,
  'Superficie útil' : number,
  'code' : string,
  'delta' : number
  'kind' : string,
  'title' : string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  data = undefined;

  baths = [];
  rooms = [];
  costComun = [];
  totalSuperficie = [];
  totalUtil = [];
  codes = [];
  deltas = [];
  kinds = []
  titles = [];
  elements = [
    /*{id:1,name:'charmeleon',size:'small',type:'textCard', title:'Titulos',subtitle:'Subtitulos'},
    {id:2,name:'charmeleon',size:'small',type:'sparkline',sparklineType:'bar', title:'Titulo', subtitle:'Subtitulo',series:[23, 11, 29, 50, 23, 12, 77, 51, 44, 22, 30]},
    {id:3,name:'charmeleon',size:'small',type:'sparkline',sparklineType:'area', title:'Titulo', subtitle:'Subtitulo',series:[87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]},
    {id:4,name:'charmeleon',size:'small',type:'sparkline',sparklineType:'line', title:'Titulo', subtitle:'Subtitulo', series:[35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]},           
    {id:5,name:'charmeleon',size:'bigger',type:'bar',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},
    {id:6,name:'charmeleon',size:'bigger',type:'donut', series:[1,2,3,4,5,6,7,8], labels:['Area 1','Area 2','Area 3','Area 4','Area 5','Area 6','Area 7','Area 8']},
    {id:7,name:'charmeleon',size:'bigger',type:'progress',series:[30], labels:['Progreso']},
    {id:8,name:'charmeleon',size:'bigger',type:'area', title:"Titulo area chart", subtitle: "Subtitulo area chart", series:[78,80,35,20,28,46,87,90]},
    {id:9,name:'charmeleon',size:'bigger',type:'polar',series:[20,50,90,120],labels:['Area 1','Area 2', 'Area 3','Area 4']},
    */
   /*
   */
   {id:5,name:'charmeleon',size:'bigger',type:'bar',series:[8,2,6,4,12],categories:['uno','dos','tres','cuatro','cinco']},
   
    {id:10,name:'charmeleon',size:'bigger',type:'tripleLine',
    series:
      [{
        name: "Area A",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: "Area B",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Area C',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
    categories:['01 Jan', '02 Jan', '03 Jan',
                '04 Jan', '05 Jan', '06 Jan', 
                '07 Jan', '08 Jan', '09 Jan',
                '10 Jan', '11 Jan', '12 Jan'
    ],
    title:"Triple line chart",
    },
    {id:23,name:'charmeleon',size:'medium',type:'tripleLine',
    series:
      [{
        name: "Area A",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
    ],categories:['uno','dos','tres','cuatro','cinco']},     
    {id:23,name:'charmeleon',size:'medium',type:'tripleLine',series:
    [{
      name: "Area A",
      data: [45, 52,  51, 32, 35,26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Area B",
      data: [35, 41, 62, 42, 13, 18,45, 52, 38, 24, 33, 26]
    },],categories:['uno','dos','tres','cuatro','cinco']},     
    /*
    {id:13,name:'charmeleon',size:'big',type:'donut', series:[1,2,3,4,5,6,7,8], labels:['Area 1','Area 2','Area 3','Area 4','Area 5','Area 6','Area 7','Area 8']},
    */
    /*
    {id:11,name:'charmander',size:'bigger',type:'bar',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},        
    {id:12,name:'charmeleon',size:'big',type:'mixed',
        series:
        [{name: 'AREA A',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
          name: 'AREA B',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
          name: 'AREA C',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        },
        {
          name: 'AREA A',
          type: 'column',
          data: [23, 11, 29, 50, 23, 12, 77, 51, 44, 22, 30]
        }],
        labels:['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', 
                    '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003',
                    '09/01/2003', '10/01/2003', '11/01/2003'],
        yTitle: ['Titulo'], 
    },
    {id:13,name:'charmeleon',size:'big',type:'donut', series:[1,2,3,4,5,6,7,8], labels:['Area 1','Area 2','Area 3','Area 4','Area 5','Area 6','Area 7','Area 8']},
    {id:14,name:'charmeleon',size:'big',type:'progress',series:[60], labels:['Progreso']},
    {id:15,name:'charmeleon',size:'big',type:'area', title:"Titulo area chart", subtitle: "Subtitulo area chart", series:[78,80,35,20,28,46,87,90]},
    {id:16,name:'charmeleon',size:'big',type:'polar',series:[20,50,90,120],labels:['Area 1','Area 2', 'Area 3','Area 4']},
    {id:17,name:'charmeleon',size:'bigger',type:'line',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},                      
    {id:18,name:'charmeleon',size:'medium',type:'bar',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},
    {id:19,name:'charmeleon',size:'medium',type:'donut', series:[1,2,3,4,5,6,7,8], labels:['Area 1','Area 2','Area 3','Area 4','Area 5','Area 6','Area 7','Area 8']},
    {id:20,name:'charmeleon',size:'medium',type:'progress',series:[100], labels:['Progreso']},
    {id:21,name:'charmeleon',size:'medium',type:'area', title:"Titulo area chart", subtitle: "Subtitulo area chart", series:[78,80,35,20,28,46,87,90]},
    {id:22,name:'charmeleon',size:'medium',type:'polar',series:[20,50,90,120],labels:['Area 1','Area 2', 'Area 3','Area 4']},
    {id:23,name:'charmeleon',size:'medium',type:'line',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},     
    */
];

  constructor(public dataService:DataService) {
    dataService.getData().subscribe(result => {
    this.data = result;    

     result.map(propiedad=>{
       this.baths.push(parseInt(propiedad['Baños']) || 0);
       this.rooms.push(parseInt(propiedad['Dormitorios']) || 0);
       this.costComun.push(parseInt(propiedad['Gastos comunes']) || 0)
       this.totalSuperficie.push(parseInt(propiedad['Superficie total'] || 0))
       this.totalUtil.push(parseInt(propiedad['Superficie útil']) || 0 )
       this.codes.push(parseInt(propiedad['code']) || 'no definido' )
       this.deltas.push(parseInt(propiedad['delta']) || 0)
       this.kinds.push(propiedad['kind'] || 'Arrienda') 
       this.titles.push(propiedad['title'] || 'Sin titulo')
     })
     
     console.log("baños",this.baths);
     console.log("Habitaciones",this.rooms);
     console.log("superficies totales",this.totalSuperficie);
     console.log("Superficies utiles",this.totalUtil);
     console.log("Titulos",this.titles);     
   });  
   console.log("elements",this.elements);
 }

  ngOnInit(): void {
  }

}
