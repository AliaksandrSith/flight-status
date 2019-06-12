# FlightStatus

The current task is time-boxed to 4 hours including diving into the Flight Status API documentation.

The project contains 3 components and 1 service.
The idea behind is that components should only represent the data and services should contain the business logic.

The 'pagination' component and 'flight-status-table' follow the idea behind.
The 'flight-status' component has some business logic inside which can be delegated to a service. So, it is a point for improvement.

The 'flight-status' service is responsible for communication with the backend. The service loads local mock data. If there is no limitation on the number of calls to backend and it is accepted to use backend for testing than service API should be extended.

The 'Departing flights' page displays 50 departure flights on the specific date from Amsterdam. The pagination is used to go across these destinations. Also, 'Destination' filter might be used.

The angular CLI was used to generate the project, components and service.
Several Bootstrap CSS components' were used in the project as well.

The project can't be considered as a 'complete' (mostly because of time limitations).  
But I'd like to underline the job that should be done
- revisit the 'flight-status' component 
- handle backend error scenarios 
- cover all logic at least with unit tests
- make UI more user-friendly

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
