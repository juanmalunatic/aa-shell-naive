import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoAttendantComponent } from './auto-attendant.component';

const routes: Routes = [{ path: '', component: AutoAttendantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoAttendantRoutingModule { }
