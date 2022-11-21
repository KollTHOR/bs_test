import { Component } from '@angular/core';

interface Person {
  lastName: string;
  fisrtName: string;
  dateOfBirth: string;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  Person: Person[] = [
    {
      lastName: 'Kovács',
      fisrtName: 'András',
      dateOfBirth: '2009'
    },
    {
      lastName: 'Nagy',
      fisrtName: 'Bertalan',
      dateOfBirth: '2002'
    },
    {
      lastName: 'Kiss',
      fisrtName: 'Cili',
      dateOfBirth: '2014'
    },
    {
      lastName: 'Tóth',
      fisrtName: 'Dénes',
      dateOfBirth: '1980'
    },
    {
      lastName: 'Szabó',
      fisrtName: 'Ernő',
      dateOfBirth: '1955'
    },
  ]

  getAge(i: number): number {
    const year: number = new Date().getFullYear()
    return year - Number(this.Person[i].dateOfBirth)
  }

  isAgePrime(n: number): boolean {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n);
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
  }
}
