import { Component } from '@angular/core';
import {Personne} from "./classes/personne";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning';

  personne: Personne = new Personne(100, 'Wick', 'john');
  tab: number[] = [2, 3, 5, 8];

  direBonjour(): string {
    return 'bonjour Angular';
  }
  nom = 'wick';
  couleur = 'blue';

  getColor(): string {
    return 'white';
  }
  getBackgroundColor(): string {
    return 'red';
  }

  constructor() {}
}
