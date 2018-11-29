import { CustomControl } from "./../Common/control";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  public getEmployeeCollection():Observable<CustomControl[]>{
    return this.http.get<CustomControl[]>("http://www.mocky.io/v2/5c00079f3200006400b2864f");
  }
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
