import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessRowComponent } from './guess-row.component';

describe('GuessRowComponent', () => {
  let component: GuessRowComponent;
  let fixture: ComponentFixture<GuessRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessRowComponent]
    });
    fixture = TestBed.createComponent(GuessRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
