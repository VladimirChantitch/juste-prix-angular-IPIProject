import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessTableComponent } from './guess-table.component';

describe('GuessTableComponent', () => {
  let component: GuessTableComponent;
  let fixture: ComponentFixture<GuessTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessTableComponent]
    });
    fixture = TestBed.createComponent(GuessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
