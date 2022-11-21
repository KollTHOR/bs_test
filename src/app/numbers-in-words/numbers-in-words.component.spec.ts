import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersInWordsComponent } from './numbers-in-words.component';

describe('NumbersInWordsComponent', () => {
  let component: NumbersInWordsComponent;
  let fixture: ComponentFixture<NumbersInWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersInWordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersInWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
