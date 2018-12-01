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

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgbPaginationModule,
    NgbAlertModule
  ],
  declarations: [
    FormsBuilder,
    DeciderComponent,
    TextboxComponent,
    MoneyComponent,
    TextareaComponent,
    ComboBoxComponent,
    DatePickerComponent,
    RadioButtonComponent
  ],
  exports:[
    FormsBuilder
  ]
})
export class FormBuilderModule { }
