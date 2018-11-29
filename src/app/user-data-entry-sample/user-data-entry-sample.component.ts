import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserManagementService } from '../Services/user-management.service';
import { CustomControl } from '../Common/control';

@Component({
  selector: 'app-user-data-entry-sample',
  templateUrl: './user-data-entry-sample.component.html',
  styleUrls: ['./user-data-entry-sample.component.css']
})

export class UserDataEntrySampleComponent implements OnInit, OnDestroy {
  public pageIsload:boolean=false;
  public fakeLine:any[10];
  public form: FormGroup;
  constructor(private usersService: UserManagementService) { }
  public _collectionControls: CustomControl[] = [];

  ngOnInit() {
    this.usersService.getUsersCollection().subscribe(dataResult => {
      this._collectionControls = dataResult.sort((a, b) => a.order - b.order);;
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
