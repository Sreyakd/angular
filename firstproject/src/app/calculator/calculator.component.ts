import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  form=new FormGroup(
    {
      "num1":new FormControl(),
      "num2":new FormControl()
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

  multiplyNumber(){
    console.log("here");
    console.log();
    
    
  }

}
