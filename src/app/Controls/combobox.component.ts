import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CustomControl } from "../Common/control";

@Component({
  selector: "dropdown",
  template: `
  <div [formGroup]="form">
        <select class="form-control" [id]="controlValues.name" [formControlName]="controlValues.name">
          <option *ngFor="let comboItem of controlValues.items" [value]="comboItem.value">{{comboItem.name}}</option>
        </select>
      </div>
  `
})

export class ComboBoxComponent implements OnInit {
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
