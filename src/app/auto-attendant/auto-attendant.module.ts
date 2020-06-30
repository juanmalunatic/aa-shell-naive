import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoAttendantRoutingModule } from './auto-attendant-routing.module';
import { AutoAttendantComponent } from './auto-attendant.component';


@NgModule({
  declarations: [AutoAttendantComponent],
  imports: [
    CommonModule,
    AutoAttendantRoutingModule
  ]
})
export class AutoAttendantModule { }
