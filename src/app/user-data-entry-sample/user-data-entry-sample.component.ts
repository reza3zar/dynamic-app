import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserManagementService } from '../Services/user-management.service';
import { CustomControl } from '../Common/control';

@Component({
  selector: 'app-user-data-entry-sample',
  templateUrl: './user-data-entry-sample.component.html'
})

export class UserDataEntrySampleComponent implements OnInit, OnDestroy {
  public pageIsload:boolean=false;
  public form: FormGroup;
  constructor(private usersService: UserManagementService) { }
  public collectionControls: CustomControl[] = [];

  public maritaldatacollection: CustomControl[] = [];

  public countrydatacollection: CustomControl[] = [];

  public showmartialCtrls=false;
  ngOnInit() {
    this.usersService.getUsersCollection().subscribe(dataResult => {
      this.collectionControls = dataResult.sort((a, b) => a.order - b.order);
      console.log(this.collectionControls)
      this.pageIsload=true;
    });

    this.usersService.getMaritalCollection().subscribe(dataResult => {
      this.maritaldatacollection = dataResult.sort((a, b) => a.order - b.order);;

    });

    this.usersService.getCountryCollection().subscribe(dataResult => {
      this.countrydatacollection = dataResult.sort((a, b) => a.order - b.order);
    });


  }

   ///To DO unSubscribe
   ngOnDestroy(): void {

  }
  public dataResult:string;
  saveDataUser(data):void{
    this.dataResult=data;
  }

  eventChanged(dataResult){
    let ctrlEventCollection:CustomControl=dataResult.ctrlInfo;

///todo
     if(ctrlEventCollection.id==='maritalId' && dataResult.value==="1"/* 1===Married */){
      // var result= this.collectionControls.concat(this.maritaldatacollection);
      //  this.collectionControls=result;

      //To Do null and undefind Check

      var partnerFirstNameId2 = this.collectionControls.filter(
        ctrl => ctrl.id === 'partnerFirstNameId');
        ((partnerFirstNameId2[0] as CustomControl).visible=true)

        console.log(partnerFirstNameId2);
        // this.pushToArray(this.collectionControls,partnerFirstNameId);

      var partnerLastName2 = this.collectionControls.filter(
        ctrl => ctrl.id=== 'partnerLastNameId');
        ((partnerLastName2[0] as CustomControl).visible=true)

        console.log(partnerLastName2);

        // this.pushToArray(this.collectionControls,partnerLastName);

     }
     if(ctrlEventCollection.id==='maritalId' && dataResult.value!=="1"/* 1===Married */){
      // for(let item of this.maritaldatacollection)
      //   this.deleteItem(item);
      var partnerFirstNameId3 = this.collectionControls.filter(
        ctrl => ctrl.id=== 'partnerFirstNameId');
        ((partnerFirstNameId3[0] as CustomControl).visible=false)
        this.pushToArray(this.collectionControls,partnerFirstNameId3);

      var partnerLastName4 = this.collectionControls.filter(
        ctrl => ctrl.id=== 'partnerLastNameId');
        ((partnerLastName4[0] as CustomControl).visible=false)
        this.pushToArray(this.collectionControls,partnerLastName4);
    }


    if(ctrlEventCollection.id==='userCountryId' && dataResult.value!=="100"/* 1===OtherCountry */){
      // var result= this.collectionControls.concat(this.countrydatacollection);
      //  this.collectionControls=result;


      var res = this.collectionControls.filter(
        ctrl => ctrl.id=== 'passportNumberId');
        ((res[0] as CustomControl).visible=true)
        this.pushToArray(this.collectionControls,res);
     }
     if(ctrlEventCollection.id==='userCountryId' && dataResult.value==="100"/* 100===Canada */){
      // for(let item of this.countrydatacollection)
      //   this.deleteItem(item);

      var res = this.collectionControls.filter(
        ctrl => ctrl.id=== 'passportNumberId');
        ((res[0] as CustomControl).visible=false)
        this.pushToArray(this.collectionControls,res);
    }

    }

     pushToArray(arr, obj) {
      const index = arr.findIndex((e) => e.id === obj.id);

      if (index === -1) {
          arr.push(obj);
      } else {
          arr[index] = obj;
      }
  }

    deleteItem(item:CustomControl) {
      const index: number = this.collectionControls.indexOf(item);
      if (index !== -1) {
        this.collectionControls.splice(index, 1);
      }
  }




}
