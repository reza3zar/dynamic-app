import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";
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
          <decider [inputControl]="controlValue" *ngIf="controlValue?.visible!==false" (contorlEventChanged)="evenChangeMethod($event)" [form]="form"></decider>
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
export class FormsBuilder implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log('destroy...')
  }
  @Output() onSubmitOccoured = new EventEmitter();
  @Input() controls: CustomControl[] = [];
  @Output() contorlEventChanged = new EventEmitter();
  form: FormGroup;
  constructor() {}

  ngOnInit() {

    let fieldsCtrls = {};
    for (let f of this.controls) {


        if (f.required)
      {
        fieldsCtrls[f.name] = new FormControl(
          f.value || "",
          [Validators.required,Validators.minLength(f.minLengthValidation)]
        );

      }

        else

         fieldsCtrls[f.name] = new FormControl(f.value);

        // fieldsCtrls[f.name] = new FormGroup(opts)

    }

    this.form = new FormGroup(fieldsCtrls);

    console.log(this.form)
  }
  evenChangeMethod(value){

    this.contorlEventChanged.emit(value);
  }


}
