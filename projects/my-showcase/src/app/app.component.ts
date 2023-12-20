import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLibRaphaelComponent } from '../../../my-lib-raphael/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyLibRaphaelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'my-showcase';
}
