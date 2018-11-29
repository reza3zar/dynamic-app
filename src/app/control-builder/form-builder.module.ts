import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from '../Controls/textbox.component';
import { FormsBuilder } from './forms-builder.component';
import { DeciderComponent } from './Decider/decider.component';
import { TextareaComponent } from '../Controls/textarea.component';
import { MoneyComponent } from '../Controls/money.component';
import { ComboBoxComponent } from '../Controls/combobox.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormsBuilder,
    DeciderComponent,
    TextboxComponent,
    MoneyComponent,
    TextareaComponent,
    ComboBoxComponent,
  ],
  exports:[
    FormsBuilder
  ]
})
export class FormBuilderModule { }
