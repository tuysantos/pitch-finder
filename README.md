# PitchFinder

This project uses an API End Point, Interceptor, Cache service to search for pitches by defining the pitch Id and the start and end dates.

There is a validation whenever we click on search to make sure that:

1. All fields are mandatory
2. Pitch Id is numeric
3. Date range cannot be greater than 14 days

If there is no data the result will be a 400 - No records

If there is a server error, then a Server error message is displayed

The implemented cache service with and interceptor guarantees that in the event of two identical consecutive calls, the second call reads from the cache.

Finally, the pagination allows us to navigate through the pages or to jump to the next set of pages `(<< and >>)`. The max number of records to display per page is 10, but configurable through the PitchesComponent variable `pageSize`. It is also possible to change the exchange rate and the converted currency by changing the variables `exchangeRate` and `convertedCurrency` inside the PitchesComponent.

## Development environment

after cloning this project, please run the command `npm install` to install all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
