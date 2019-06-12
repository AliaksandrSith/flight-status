import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsStatusComponent } from './flights-status/flights-status.component';

const routes: Routes = [
  { path: '', redirectTo: '/flights-status', pathMatch: 'full' },
  { path: 'flights-status', component: FlightsStatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
