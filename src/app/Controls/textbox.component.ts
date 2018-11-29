import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CustomControl } from "../Common/control";

@Component({
  selector: "textbox",
  template: `
    <div [formGroup]="form">
      <input
        [attr.type]="controlValues.type"
        class="form-control"
        [id]="controlValues.name"
        [name]="controlValues.name"
        [formControlName]="controlValues.name"
        [placeholder]="controlValues.placeholder"
        [(ngModel)]="controlValues.value"
        [attr.required]="controlValues.required"
      />
    </div>

    <div class="row col-md-12">
    <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValidContol && isDirtyContol && (controlValues.value?.length==0)">{{controlValues.label}} is required !!!</div>
    </div>


  `
})
export class TextboxComponent implements OnInit {
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
