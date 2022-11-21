import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-in-words',
  templateUrl: './numbers-in-words.component.html',
  styleUrls: ['./numbers-in-words.component.scss']
})
export class NumbersInWordsComponent {

convertedString: string = ''

ones = ['', 'egy', 'kettő', 'három', 'négy', 'öt', 'hat', 'hét', 'nyolc', 'kilenc'];
tens = ['', '', 'húsz', 'harminc', 'negyven', 'ötven', 'hatvan', 'hetven', 'nyolcvan', 'kilencven'];
teens = ['tíz', 'tizenegy', 'tizenkettő', 'tizenhárom', 'tizennégy', 'tizenöt', 'tizenhat', 'tizenhét', 'tizennyolc', 'tizenkilenc'];

getConvertedNumbersAsString(numAsString: string): void {
  this.convertedString = this.convertInput(numAsString)
}


convertInput(numAsString: string): string {
  const num = Number(numAsString)
  if (isNaN(num)) {
    return "Please enter a number"
  }
  if (num < 0) {
    return "mínusz " + this.convertMilliards(num*-1);
  }
  return this.convertMilliards(num)
}

convertMilliards(num: number): string {
  if (num >= 1000000000) {
    return this.convertMilliards(Math.floor(num / 1000000000)) + " milliárd " + this.convertMillions(num % 1000000000);
  }
  return this.convertMillions(num);
}

convertMillions(num: number): string {
  if (num >= 1000000) {
    return this.convertMillions(Math.floor(num / 1000000)) + "millió-" + this.convertThousands(num % 1000000);
  } 
  return this.convertThousands(num);
}

convertThousands(num: number): string {
  if (num >= 1000) {
    return this.converHundreds(Math.floor(num / 1000)) + "ezer-" + this.converHundreds(num % 1000);
  } else {
    return this.converHundreds(num);
  }
}

converHundreds(num: number): string {
  if (num > 99) {
    return this.ones[Math.floor(num / 100)] + "száz-" + this.convertTeens(num % 100);
  } else {
    return this.convertTeens(num);
  }
}

convertTeens(num: number): string {
  if (num < 10) return this.ones[num];
  else if (num >= 10 && num < 20) return this.teens[num - 10];
  else if (num > 20 && num < 30) return "huszon"+ "-" + this.ones[num % 10];
  else {
    return this.tens[Math.floor(num / 10)] + "-" + this.ones[num % 10];
  }
}

convert(num: number): string {
  if (num == 0) return "nulla";
  else return this.convertMillions(num);
}

}

