import { UserManagementService } from './Services/user-management.service';
import { FormBuilderModule } from './control-builder/form-builder.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDataEntrySampleComponent } from './user-data-entry-sample/user-data-entry-sample.component';
import { EmployeeDataEntrySampleComponent } from './employee-data-entry-sample/employee-data-entry-sample.component';
import { EmployeeService } from './Services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
    ,UserDataEntrySampleComponent, EmployeeDataEntrySampleComponent
  ],
  imports: [
    BrowserModule
  ,ReactiveFormsModule
  ,FormBuilderModule
  ,HttpClientModule
  ,AppRoutingModule,
  FormsModule

  ],
  providers: [UserManagementService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
