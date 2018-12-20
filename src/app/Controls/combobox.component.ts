import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CustomControl } from "../Common/control";

@Component({
  selector: "dropdown",
  template: `
  <div [formGroup]="form">
        <select class="form-control" [id]="controlValues.id" (change)="changeSelectedItem($event.target.value,this.controlValues)" [formControlName]="controlValues.name">
          <option *ngFor="let comboItem of controlValues.items"  [value]="comboItem.value">{{comboItem.name}}</option>
        </select>
      </div>
  `
})

export class ComboBoxComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlValues: CustomControl = {};
  @Output() onSelectedItemChanged = new EventEmitter();
  constructor() {}

  get isDirtyContol() {
    return this.form.controls[this.controlValues.name].dirty;
  }
  get isValidContol() {
    return this.form.controls[this.controlValues.name].valid;
  }
  ngOnInit() {
  }

  changeSelectedItem(value,ctrlInfo){
    this.onSelectedItemChanged.emit({
      value,
      ctrlInfo
    });
  }

}
