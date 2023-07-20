import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionInteractionComponent } from './correction-interaction.component';

describe('CorrectionInteractionComponent', () => {
  let component: CorrectionInteractionComponent;
  let fixture: ComponentFixture<CorrectionInteractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrectionInteractionComponent]
    });
    fixture = TestBed.createComponent(CorrectionInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
