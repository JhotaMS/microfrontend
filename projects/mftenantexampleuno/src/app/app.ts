import {  Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Policyholder } from 'commons-lib';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Policyholder],
  templateUrl: './app.html',
  styleUrl: './app.scss',

})
export class App {
  protected readonly title = signal('mftenantexampleuno');
}
