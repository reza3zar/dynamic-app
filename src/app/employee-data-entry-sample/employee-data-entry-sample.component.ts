import { Component, OnInit, OnDestroy } from "@angular/core";
import { CustomControl } from "../Common/control";
import { UserManagementService } from "../Services/user-management.service";
import { FormGroup } from "@angular/forms";
import { EmployeeService } from "../Services/employee.service";

@Component({
  selector: "app-employee-data-entry-sample",
  templateUrl: "./employee-data-entry-sample.component.html"
})
export class EmployeeDataEntrySampleComponent implements OnInit, OnDestroy {
  public pageIsload: boolean = false;
  public form: FormGroup;
  constructor(private usersService: EmployeeService) {}
  public _collectionControls: CustomControl[] = [];
  public _collectionControlsTemp: CustomControl[] = [];

  ngOnInit() {
    this.usersService.getEmployeeCollection().subscribe(dataResult => {
      this._collectionControlsTemp.push(dataResult as CustomControl)
      // this.collectionControls = dataResult.sort((a, b) => a.order - b.order);
      // console.log(this.collectionControls)
      this.pageIsload=true;

      // console.log(dataResult)
      // for (let item of dataResult)
      // {
      //   console.log(item);
      // this._collectionControls.push(item); //.sort((a, b) => a.order - b.order);
      // }

      this.doWork(this._collectionControlsTemp)
      this.pageIsload = true;
    });

    // var ssss=this.usersService.getdata();
    // console.log(ssss)
  }

  doWork(dataResult){
    console.log(dataResult)
    for (let key of Object.keys(dataResult[0])) {
      console.log(key)

      let mealName = dataResult[0][key];
      console.log(mealName)

      this._collectionControls.push(mealName);
    }
    console.log(this._collectionControls)
  }

  ///To DO unSubscribe
  ngOnDestroy(): void {}
  public dataResult: string;
  saveDataEmployee(data): void {
    this.dataResult = data;
  }
}
