import { UserManagementService } from './Services/user-management.service';
import { FormBuilderModule } from './control-builder/form-builder.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
 import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDataEntrySampleComponent } from './user-data-entry-sample/user-data-entry-sample.component';
import { EmployeeDataEntrySampleComponent } from './employee-data-entry-sample/employee-data-entry-sample.component';
import { EmployeeService } from './Services/employee.service';
import { FakeLoaderComponent } from './fake-loader/fake-loader.component';
import { GlobalErrorHandlerService } from './GlobalErrorHandlerService';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
    ,UserDataEntrySampleComponent, EmployeeDataEntrySampleComponent, FakeLoaderComponent
  ],
  imports: [
    BrowserModule
  ,ReactiveFormsModule
  ,FormBuilderModule
  ,HttpClientModule
  ,AppRoutingModule,
  FormsModule

  ],
  providers: [UserManagementService,EmployeeService,GlobalErrorHandlerService,
    ,{ provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
