import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  sameAsInput: string = ''
  inputColor: string = ''

  getValue(input: string): void {
    this.sameAsInput = input;
  }

  getColor(color: string): void {
    this.inputColor = color;
  }
}
