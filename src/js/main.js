import _ from 'reflect-metadata';
import {ComponentAnnotation, ViewAnnotation, bootstrap} from 'angular2/angular2';

export class AppComponent {
  static annotations = [
    new ComponentAnnotation({
      selector: 'my-app'
    }),
    new ViewAnnotation({
      template: '<h1>My first Angular 2 App</h1>'
    })
  ];
}

bootstrap(AppComponent);
