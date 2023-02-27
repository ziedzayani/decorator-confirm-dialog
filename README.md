# DecoratorDialogMaterial


## 

This is a simple Angular application that displays a static list of users and includes a delete button for each row.

I have implemented a **decorator** that use Angular Material to display a Confirm dialog whenever a critical action is required in the application

So when you need to show Confirm Dialog before action you have just to add :

      @needConfirmation()
      deleteUser(element:User) {
        this.dataSource = this.dataSource.filter(user => user.id != element.id);
      }

Or

    
      @needConfirmation({
        title : "Delete Confirmation",
        message : "Are you sure you want to delete this user ?"
      })






This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
