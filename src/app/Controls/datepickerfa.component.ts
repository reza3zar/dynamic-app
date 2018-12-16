import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CustomControl } from "../Common/control";

@Component({
  selector: "datepeickerfa",
  template: `
    <div [formGroup]="form">
      <dp-date-picker
      class="form-control"
      [id]="controlValues.id"
        [formControlName]="controlValues.name"
        dir="rtl"
        [(ngModel)]="controlValues.value"
        mode="day"
        [attr.required]="controlValues.required"
        ([placeholder])="controlValues.placeholder"
        theme="dp-material">
      </dp-date-picker>
    </div>

    <div class="row col-md-12">
      <div
        class="alert alert-danger my-1 p-2 fadeInDown animated"
        *ngIf="
          !isValidContol && isDirtyContol && controlValues.value?.length == 0
        "
      >
        {{ controlValues.label }} is required !!!
      </div>
    </div>


  `
})
export class DatepickerfaComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlValues: CustomControl = {};
  constructor() {}

  get isDirtyContol() {
    return this.form.controls[this.controlValues.name].dirty;
  }
  get isValidContol() {
    return this.form.controls[this.controlValues.name].valid;
  }

  ngOnInit() {}
}
