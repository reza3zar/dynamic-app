# DynamicApp (Easy Peasy)
Dynamic Forms Builder are reusable and make building large-scale applications easier

Dynamic Angular Apps.

Angular version 6.2.5.

## Development server

1-you need a service
I use a mock generator (www.mocky.io) to publish My api
For example In Services you see userManagement.service.ts
it has a method that return user structure.
for instance user form has FirstName & Last Name & History ,etc...
 
## sample
```
[  

   {  

      "type":"text",

      "id":"userFirstNameId",

      "name":"firstName",

      "label":"First Name",

      "placeholder":"Your FirstName",

      "value":"",

      "order":1,

      "class":"col-lg-6",

      "required":"required",

      "minLengthValidation":4

   },

   {  

      "type":"text",

      "id":"userLastNameId",

      "name":"lastName",

      "label":"Last Name",

      "placeholder":"Your LastName",

      "value":"",

      "order":2,

      "class":"col-lg-6",

      "required":""

   },

   {  

      "type":"text",

      "id":"userHistoryId",

      "name":"history",

      "label":"History of Your Account",

      "placeholder":"History of Your Account ...",

      "value":"",

      "order":3,

      "class":"col-lg-12",

      "required":""

   },

   {  

      "type":"textareas",

      "id":"userAddressId",

      "name":"Address",

      "label":"Your Address : ",

      "placeholder":"Address ...",

      "value":"",

      "order":9,

      "class":"col-lg-12",

      "required":""

   },

   {  

      "type":"money",

      "id":"userCreditId",

      "name":"Credit",

      "label":"Your Credit : ",

      "placeholder":"Credit is ...",

      "value":"",

      "order":7,

      "class":"col-lg-12",

      "required":""

   },

   {  

      "type":"dropdown",

      "id":"userCountryId",

      "name":"Country",

      "label":"Your Country : ",

      "placeholder":"Country is ...",

      "value":"",

      "items":[  

         {  

            "value":"100",

            "name":"Canada"

         },

         {  

            "value":"120",

            "name":"Italy"

         },

         {  

            "value":"130",

            "name":"Japan"

         },

         {  

            "value":"104",

            "name":"USA"

         }

      ],

      "order":8,

      "class":"col-lg-12",

      "required":""

   },

   {  

      "type":"datepicker",

      "id":"userRegisterDateId",

      "name":"RegisterDate",

      "label":"Your Register Date : ",

      "placeholder":"Register Date is ...",

      "value":"",

      "order":5,

      "class":"col-lg-12",

      "required":""

   },

   {  

      "type":"text",

      "id":"userEmailId",

      "name":"Email",

      "label":"Your Email : ",

      "placeholder":"Email ...",

      "value":"",

      "order":6,

      "class":"col-lg-12",

      "pattern":"[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$",

      "required":""

   },

 {  

      "type":"radio",

      "id":"userGenderId",

      "name":"Gender",

      "label":"Your Gender : ",
 

      "radiItems":[  

         {  

            "value":"0",

            "name":"Male"

         },

         {  

            "value":"1",

            "name":"Female"

         }

  

      ],

      "order":4,

      "class":"col-lg-12",

      "required":""

   }


]
```
2.you need a componet to create "User Form Management"
in this form, you can inject your service.

3.Next Step, you have to call form-builder and pass your form structure 

4.In form-builder, it use a iteration to read your structure and per element, it call Decider.

5.Decider, make a decision to bind your element base on element type
 
![](https://cdn3.imggmi.com/uploads/2018/12/1/1454083aa3a4c5ce3fe7ce62814ec946-full.png)
 