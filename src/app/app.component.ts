import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnotherTestComponentComponent } from './another-test-component/another-test-component.component';
import { TestAngularComponent } from './test-angular/test-angular.component';
import { Test2AngularComponent } from './test2-angular/test2-angular.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    AnotherTestComponentComponent, TestAngularComponent, Test2AngularComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lessonAngular';
}
