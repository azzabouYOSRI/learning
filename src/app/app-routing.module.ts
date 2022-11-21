import { Routes, RouterModule } from '@angular/router';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import {NgModule} from "@angular/core";
const routes: Routes = [
  { path: 'stagiaire', component: StagiaireComponent },
{ path: 'adresse', component: AdresseComponent },
  { path: 'stagiaire', component: StagiaireComponent },
{ path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
{ path: 'adresse', component: AdresseComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
