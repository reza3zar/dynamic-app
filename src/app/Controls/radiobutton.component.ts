import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CustomControl } from "../Common/control";

@Component({
  selector: "radio",
  template: `
  <div [formGroup]="form">
  <div  *ngFor="let item of controlValues.radiItems" class="form-check">
    <input class="form-check-input"    [name]="controlValues.name"   [id]="controlValues.name" [attr.type]="controlValues.type"  [formControlName]="controlValues.name" [value]="item.value" >
    <label class="form-check-label">
      {{item.name}}
    </label>
  </div>
</div>



  `
})
export class RadioButtonComponent implements OnInit {
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
