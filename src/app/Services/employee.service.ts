import { CustomControl } from "./../Common/control";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  public getEmployeeCollection():Observable<any[]>{
    return this.http.get<any[]>("http://www.mocky.io/v2/5c1ba11933000050007fd8e9");
  }

//   public getdata(){http://www.mocky.io/v2/5c0214313500006400ad0aba
//     this.http.get('http://www.mocky.io/v2/5c0d270d2f00005b00e2e538')
//     .pipe(
//       map(ress => console.log(ress)) // or any other operator
//     )
//     .subscribe(res => { return res});
// }

}
// [
//   {
//       "type": "text",
//           "id":"employeeFirstNameId",
//     "name": "employeeFirstName",
//     "label": "Employee First Name",
//     "placeholder":"Your FirstName",
//     "value": "",
//     "order":1,
//     "class":"col-lg-12"


//   },
//       {
//       "type": "text",
//           "id":"employeeLastNameId",
//     "name": "employeelastName",
//     "label": "Employee Last Name",
//     "placeholder":"Your LastName",
//     "value": "",
//     "order":2,
//     "class":"col-lg-12",
//     "required":""

//   }

// ]
