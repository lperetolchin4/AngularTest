import { Component } from '@angular/core';
import { Test2AngularComponent } from '../test2-angular/test2-angular.component';

@Component({
  selector: 'app-another-test-component',
  imports: [Test2AngularComponent],
  templateUrl: './another-test-component.component.html',
  styleUrl: './another-test-component.component.css'
})
export class AnotherTestComponentComponent {

}
