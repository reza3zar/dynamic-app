import { CustomControl } from "./../Common/control";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserManagementService {

  constructor(private http:HttpClient) { }

  public getUsersCollection():Observable<CustomControl[]>{
    return this.http.get<CustomControl[]>("http://www.mocky.io/v2/5c0388723000004700bb9442");
  }
}

//https://www.mocky.io/

// [
//   {
//       "type": "text",
//           "id":"userFirstNameId",
//     "name": "firstName",
//     "label": "First Name",
//     "placeholder":"Your FirstName",
//     "value": "",
//     "order":1,
//     "class":"col-lg-6",
//     "required":"required",
//     "minLengthValidation":4

//   },
//       {
//       "type": "text",
//           "id":"userLastNameId",
//     "name": "lastName",
//     "label": "Last Name",
//     "placeholder":"Your LastName",
//     "value": "",
//     "order":2,
//     "class":"col-lg-6",
//     "required":""

//   },
//       {
//       "type": "text",
//           "id":"userHistoryId",
//     "name": "history",
//     "label": "History of Your Account",
//     "placeholder":"History of Your Accoun ...",
//     "value": "",
//     "order":3,
//     "class":"col-lg-12",
//     "required":""

//   },
//       {
//       "type": "textareas",
//           "id":"userAddressId",
//     "name": "Address",
//     "label": "Your Address : ",
//     "placeholder":"Address ...",
//     "value": "",
//     "order":6,
//     "class":"col-lg-12",
//     "required":""

//   }
//   ,
//       {
//       "type": "money",
//     "id":"userCreditId",
//     "name": "Credit",
//     "label": "Your Credit : ",
//     "placeholder":"Credit is ...",
//     "value": "",
//     "order":4,
//     "class":"col-lg-12",
//     "required":""
//   }
//   ,
//       {
//       "type": "dropdown",
//     "id":"userCountryId",
//     "name": "Country",
//     "label": "Your Country : ",
//     "placeholder":"Country is ...",
//     "value": "",
//     "items":[
//         {"value":"100","name":"Canada"},
//           {"value":"120","name":"Italy"},
//             {"value":"130","name":"Japan"},
//               {"value":"104","name":"USA"}
//         ],
//     "order":5,
//     "class":"col-lg-12",
//     "required":""
//   }
// ]
