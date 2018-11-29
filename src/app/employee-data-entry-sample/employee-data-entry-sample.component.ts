import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomControl } from '../Common/control';
import { UserManagementService } from '../Services/user-management.service';
import { FormGroup } from '@angular/forms';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-data-entry-sample',
  templateUrl: './employee-data-entry-sample.component.html',
  styleUrls: ['./employee-data-entry-sample.component.css']
})
export class EmployeeDataEntrySampleComponent implements OnInit, OnDestroy {
  public pageIsload:boolean=false;
  public fakeLine:any[10];
  public form: FormGroup;
  constructor(private usersService: EmployeeService) { }
  public _collectionControls: CustomControl[] = [];

  ngOnInit() {
    this.usersService.getEmployeeCollection().subscribe(dataResult => {
      this._collectionControls = dataResult.sort((a, b) => a.order - b.order);
      this.pageIsload=true;
    });
  }

   ///To DO unSubscribe
   ngOnDestroy(): void {

  }
  public dataResult:string;
  doWork(data):void{
    this.dataResult=data;
    console.log(data);
  }

  public generateFake(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }

}
