import { CustomControl } from './../../Common/control';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'decider',
  templateUrl: './decider.component.html'
})
export class DeciderComponent implements OnInit {
  @Input() inputControl:CustomControl;
  @Input() form:any;

  get isDirtyContol() {
    return this.form.controls[this.inputControl.name].dirty;
  }
  get isValidContol() {
    return this.form.controls[this.inputControl.name].valid;
  }

  constructor() { }

  ngOnInit() {
  }

}
