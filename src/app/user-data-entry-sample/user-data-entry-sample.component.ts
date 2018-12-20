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


     if(ctrlEventCollection.id==='maritalId' && dataResult.value==="1"/* 1===Married */){
      var result= this.collectionControls.concat(this.maritaldatacollection);
       this.collectionControls=result;
     }
     if(ctrlEventCollection.id==='maritalId' && dataResult.value!=="1"/* 1===Married */){
      for(let item of this.maritaldatacollection)
        this.deleteItem(item);
    }


    if(ctrlEventCollection.id==='userCountryId' && dataResult.value!=="100"/* 1===OtherCountry */){
      var result= this.collectionControls.concat(this.countrydatacollection);
       this.collectionControls=result;
       console.log(this.collectionControls)
     }
     if(ctrlEventCollection.id==='userCountryId' && dataResult.value==="100"/* 100===Canada */){
      for(let item of this.countrydatacollection)
        this.deleteItem(item);
    }

    }

    deleteItem(item:CustomControl) {
      const index: number = this.collectionControls.indexOf(item);
      if (index !== -1) {
        this.collectionControls.splice(index, 1);
      }
  }




}
