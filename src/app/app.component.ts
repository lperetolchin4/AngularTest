import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnotherTestComponentComponent } from './another-test-component/another-test-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    AnotherTestComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lessonAngular';
}
