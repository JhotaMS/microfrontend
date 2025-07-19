import {  Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonsLib } from 'commons-lib';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonsLib],
  templateUrl: './app.html',
  styleUrl: './app.scss',

})
export class App {
  protected readonly title = signal('mftenantexampleuno');
}
