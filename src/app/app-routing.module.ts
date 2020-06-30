import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from '../app.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';

const routes: Routes = [
  {
    path: 'sample-one',
    component: Sample1Component,
  },
  {
    path: 'sample-two',
    component: Sample2Component,
  },
  {
    path: 'auto-attendant',
    loadChildren: () => import('./auto-attendant/auto-attendant.module').then(m => m.AutoAttendantModule)
  },
  // Override the base url "/" with a component
  {
    path: '',
    loadChildren: () => import('./auto-attendant/auto-attendant.module').then(m => m.AutoAttendantModule),
    pathMatch: 'full'
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
