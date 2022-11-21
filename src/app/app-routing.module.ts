import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { PersonComponent } from './person/person.component';
import { NumbersInWordsComponent } from './numbers-in-words/numbers-in-words.component';
import { CalcComponent } from './calc/calc.component';

const routes: Routes = [
  {
    path: '', component:InputComponent,
  },
  {
    path: 'person', component:PersonComponent,
  },
  {
    path: 'numbers', component:NumbersInWordsComponent,
  },
  {
    path: 'calc', component:CalcComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
