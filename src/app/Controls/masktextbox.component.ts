import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CustomControl } from "../Common/control";

@Component({
  selector: "masktextbox",
  template: `
    <div [formGroup]="form">
    <input class="form-control" type='text' [prefix]="controlValues?.maskText?.prefix " [sufix]="controlValues?.maskText?.sufix " [mask]="controlValues?.maskText?.mask"
    [id]="controlValues.id"
        [name]="controlValues.name"
        [formControlName]="controlValues.name"
        [placeholder]="controlValues.placeholder"
        [(ngModel)]="controlValues.value"
        [attr.required]="controlValues.required"
    >
    </div>

  `
})
export class MaskTextboxComponent implements OnInit {
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
