import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from '../Controls/textbox.component';
import { FormsBuilder } from './forms-builder.component';
import { DeciderComponent } from './Decider/decider.component';
import { TextareaComponent } from '../Controls/textarea.component';
import { MoneyComponent } from '../Controls/money.component';
import { ComboBoxComponent } from '../Controls/combobox.component';
import { DatePickerComponent } from 'src/app/Controls/datepicker.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RadioButtonComponent } from '../Controls/radiobutton.component';
import {NgxMaskModule} from 'ngx-mask'
import { MaskTextboxComponent } from '../Controls/masktextbox.component';
import { NumericTextboxComponent } from '../Controls/numerictextbox.component';
import { NumberDirective } from './numbersOnly.directive';
import { DatepickerfaComponent } from '../Controls/datepickerfa.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgbPaginationModule,
    NgbAlertModule,
    NgxMaskModule.forRoot(),
    DpDatePickerModule
  ],
  declarations: [
    FormsBuilder,
    DeciderComponent,
    TextboxComponent,
    MoneyComponent,
    TextareaComponent,
    ComboBoxComponent,
    DatePickerComponent,
    RadioButtonComponent,
    MaskTextboxComponent,
    NumericTextboxComponent,
    DatepickerfaComponent,
    NumberDirective

  ],
  exports:[
    FormsBuilder
  ]
})
export class FormBuilderModule { }
