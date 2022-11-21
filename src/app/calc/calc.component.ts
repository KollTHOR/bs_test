import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  subText: string = ''; // The text that should appear in the sub-display
  mainText: string = ''; // The text that should appear in the main display
  operand1: number = 0 // The first operand
  operand2: number = 0 // The second operand
  operator: string = ''; // The operator
  calculationString: string = ''; 
  answered: boolean = false; 
  operatorSet: boolean = false;

  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
       const lastKey = this.mainText[this.mainText.length - 1];
       if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
         this.operatorSet = true;
       }
       if ((this.operatorSet) || (this.mainText === '')) {
         return;
       }
       this.operand1 = parseFloat(this.mainText);
       this.operator = key;
       this.operatorSet = true;
    }
    if (this.mainText.length === 10) {
      return;
    }
    this.mainText += key;
 }

 getAnswer() {
  this.calculationString = this.mainText;
  this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
  if (this.operator === '/') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 / this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = this.mainText.substr(0, 9);
    }
  } else if (this.operator === 'x') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 * this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Range Exceeded';
    }
  } else if (this.operator === '-') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 - this.operand2).toString();
    this.subText = this.calculationString;
  } else if (this.operator === '+') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 + this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Range Exceeded';
    }
  } else {
    this.subText = 'ERROR: Invalid Operation';
  }
  this.answered = true;
}

allClear(): void {
  this.subText = ''; 
  this.mainText = ''; 
  this.operand1 = 0 
  this.operand2 = 0 
  this.operator = ''; 
  this.calculationString = ''; 
  this.answered = false; 
  this.operatorSet = false;
}
}
