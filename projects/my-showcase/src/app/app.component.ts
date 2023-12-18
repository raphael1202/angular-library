import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLibComponent } from '../../../my-lib/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'my-showcase';
}
