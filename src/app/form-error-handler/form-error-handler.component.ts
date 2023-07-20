import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, NgModel} from '@angular/forms';

@Component({
  selector: 'app-form-error-handler',
  templateUrl: './form-error-handler.component.html',
  styleUrls: ['./form-error-handler.component.scss']
})
export class FormErrorHandlerComponent {
  @Input() control!: AbstractControl | NgModel;
  @Input() controlLabel!: string;

  constructor() {

  }

  ngOnInit(): void {
  }
}
