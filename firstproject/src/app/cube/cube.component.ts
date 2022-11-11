import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
  cube:Number=1

  constructor() { }

  ngOnInit(): void {
  }
findCube(num:any){
  console.log(num.value);
  let n1=Number(num.value)
  this.cube=n1**3
  
}
}
