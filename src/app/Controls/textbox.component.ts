import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CustomControl } from "../Common/control";

@Component({
  selector: "textbox",
  template: `
    <div [formGroup]="form">
      <input
        [attr.type]="controlValues.type"
        class="form-control"
        [id]="controlValues.id"
        [name]="controlValues.name"
        [formControlName]="controlValues.name"
        [placeholder]="controlValues.placeholder"
        [(ngModel)]="controlValues.value"
        [attr.required]="controlValues.required"
        [pattern]="controlValues.pattern"
        (blur)="onBlur($event)"
        (change)="onChange($event)"
        (focus)="onFocus($event)"/>
    </div>

    <div class="row col-md-12">
    <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValidContol && isDirtyContol && (controlValues.value?.length==0)">{{controlValues.label}} is required !!!</div>
    </div>

    <div class="row col-md-12">
    <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValidContol && isDirtyContol && (controlValues.value?.length<controlValues.minLengthValidation)">{{controlValues.label}} Min Lentgh is : {{controlValues.minLengthValidation}}!!!</div>
    </div>

  `
})
export class TextboxComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlValues: CustomControl = {};
  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();
  constructor() {}

  get isDirtyContol() {
    return this.form.controls[this.controlValues.name].dirty;
  }
  get isValidContol() {
    return this.form.controls[this.controlValues.name].valid;
  }

  onBlur(event){
    console.log(event);
  }

  onChange(event){
    console.log(event);
  }

  onFocus(event){
    console.log(event);
  }

  ngOnInit() {


  }
}
