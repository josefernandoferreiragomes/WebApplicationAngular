import { Component } from '@angular/core';

@Component({
  selector: 'app-sum-component',
  templateUrl: './sum.component.html'
})
export class SumComponent {
  currentCount : number= 0;
  firstNumber : number =1;
  secondNumber : number =2;
  public performSum() {
    this.currentCount = Number(this.firstNumber) + Number(this.secondNumber);
  }
}

