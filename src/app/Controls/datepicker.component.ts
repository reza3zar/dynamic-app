

import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CustomControl } from "../Common/control";
import { NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "datepicker",
  template: `
  <div [formGroup]="form">
    <div class="input-group">
      <input class="form-control" [id]="controlValues.id"  [placeholder]="controlValues.placeholder"
             [name]="controlValues.name"
             [formControlName]="controlValues.name" [attr.required]="controlValues.required"
             [(ngModel)]="controlValues.value"
             ngbDatepicker #d="ngbDatepicker" [footerTemplate]="footerTemplate" >
      <div class="input-group-append">
        <button class="btn btn-outline-secondary calendar" (click)="d.toggle()" type="button"></button>
      </div>
    </div>

    <ng-template #footerTemplate>
    <hr class="my-0">
    <button class="btn btn-primary btn-sm m-2 float-left" (click)="model = today; d.close()">Today</button>
    <button class="btn btn-secondary btn-sm m-2 float-right" (click)="d.close()">Close</button>
  </ng-template>

    </div>
  `
})
export class DatePickerComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlValues: CustomControl = {};

  model: NgbDateStruct;
  today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar) {}

  get isDirtyContol() {
    return this.form.controls[this.controlValues.name].dirty;
  }
  get isValidContol() {
    return this.form.controls[this.controlValues.name].valid;
  }

  ngOnInit() {
      this.controlValues.value=this.today
  }
}
