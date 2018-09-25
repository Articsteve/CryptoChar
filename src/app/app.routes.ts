import { RouterModule, Routes } from '@angular/router';

import { UncryptComponent } from './components/uncrypt/uncrypt.component';
import { GKeyComponent } from './components/g-key/g-key.component';
import { HomeComponent } from './components/home/home.component';
import { CryptComponent } from './components/crypt/crypt.component';

const app_routes: Routes = [

  { path: 'home', component: HomeComponent },
  //{ path: 'generate_keys', component: GKeyComponent },
  //{ path: 'uncrypt_message', component: UncryptComponent },
  { path: 'crypt', component: CryptComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
