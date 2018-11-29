import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomControl } from "../Common/control";

@Component({
  selector: "forms-builder",
  template: `
    <form
      (ngSubmit)="onSubmitOccoured.emit(this.form.value)"
      [formGroup]="form"
    >
      <div class="row">
        <div
          *ngFor="let controlValue of controls"
          class="{{controlValue.class}}"
        >
          <decider [inputControl]="controlValue" [form]="form"></decider>
        </div>
      </div>
      <div class="form-row"></div>

      <div class="col-md-12">
        <button
          style="margin:2px"
          type="submit"
          [disabled]="!form.valid"
          class="btn btn-primary"
        >
          Save Data... !
        </button>
        <button style="margin:2px" class="btn btn-danger">
          Oops,Cancel ME !
        </button>
      </div>
    </form>
  `
})
export class FormsBuilder implements OnInit {
  @Output() onSubmitOccoured = new EventEmitter();
  @Input() controls: CustomControl[] = [];
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    console.log(this.controls);
    let fieldsCtrls = {};
    for (let f of this.controls) {

        if (f.required)
          fieldsCtrls[f.name] = new FormControl(
            f.value || "",
            [Validators.required,Validators.minLength(f.minLengthValidation)]
          );
        else fieldsCtrls[f.name] = new FormControl(f.value);

        // fieldsCtrls[f.name] = new FormGroup(opts)

    }
    console.log(fieldsCtrls);
    this.form = new FormGroup(fieldsCtrls);
  }
}
