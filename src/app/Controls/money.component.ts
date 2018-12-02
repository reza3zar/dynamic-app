import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CustomControl } from "../Common/control";

@Component({
  selector: "money",
  template: `
    <div [formGroup]="form" class="input-group">
    <span class="input-group-addon">$</span>
      <input
        [attr.type]="controlValues.type"
        class="form-control"
        [id]="controlValues.id"
        [name]="controlValues.name"
        [formControlName]="controlValues.name"
        [placeholder]="controlValues.placeholder"
        [(ngModel)]="controlValues.value"
        [attr.required]="controlValues.required"
      />

    </div>
  `
})
export class MoneyComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlValues: CustomControl = {};
  constructor() {}

  get isDirtyContol() {
    return this.form.controls[this.controlValues.name].dirty;
  }
  get isValidContol() {
    return this.form.controls[this.controlValues.name].valid;
  }
  ngOnInit() {
  }
}
