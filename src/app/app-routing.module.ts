import { EmployeeDataEntrySampleComponent } from './employee-data-entry-sample/employee-data-entry-sample.component';
import { UserDataEntrySampleComponent } from './user-data-entry-sample/user-data-entry-sample.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

// { path: "**", component: NotFoundComponent }


const routes: Routes = [
  {
    path: "home",
    component:UserDataEntrySampleComponent
  },
  {
    path: "employee",
    component:EmployeeDataEntrySampleComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  declarations: [],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
