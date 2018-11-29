# DynamicApp

This project is a Dynamic Form Builder 

Angular version 6.2.5.

## Development server

1-you need a service
I use a mock generator (www.mocky.io) to publish api

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## sample
```
[
  {
      "type": "text",
          "id":"userFirstNameId",
    "name": "firstName",
    "label": "First Name",
    "placeholder":"Your FirstName",
    "value": "",
    "order":1,
    "class":"col-lg-6",
    "required":"required",
    "minLengthValidation":4

  },
      {
      "type": "text",
          "id":"userLastNameId",
    "name": "lastName",
    "label": "Last Name",
    "placeholder":"Your LastName",
    "value": "",
    "order":2,
    "class":"col-lg-6",
    "required":""

  },
      {
      "type": "text",
          "id":"userHistoryId",
    "name": "history",
    "label": "History of Your Account",
    "placeholder":"History of Your Accoun ...",
    "value": "",
    "order":3,
    "class":"col-lg-12",
    "required":""

  },
      {
      "type": "textareas",
          "id":"userAddressId",
    "name": "Address",
    "label": "Your Address : ",
    "placeholder":"Address ...",
    "value": "",
    "order":6,
    "class":"col-lg-12",
    "required":""

  }
  ,
      {
      "type": "money",
    "id":"userCreditId",
    "name": "Credit",
    "label": "Your Credit : ",
    "placeholder":"Credit is ...",
    "value": "",
    "order":4,
    "class":"col-lg-12",
    "required":""
  }
  ,
      {
      "type": "dropdown",
    "id":"userCountryId",
    "name": "Country",
    "label": "Your Country : ",
    "placeholder":"Country is ...",
    "value": "",
    "items":[
        {"value":"100","name":"Canada"},
          {"value":"120","name":"Italy"},
            {"value":"130","name":"Japan"},
              {"value":"104","name":"USA"}
        ],
    "order":5,
    "class":"col-lg-12",
    "required":""
  }
]
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
