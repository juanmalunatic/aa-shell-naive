import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  // Override the base url "/" with a component
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  // We export the RouterModule to indicate that our module has a dependency on this module.
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
