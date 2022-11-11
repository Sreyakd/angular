import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { InterestComponent } from './interest/interest.component';
import { SmartsubComponent } from './smartsub/smartsub.component';

const routes: Routes = [
  {path:"add",component:AddComponent},
  {path:"smartsub",component:SmartsubComponent},
  {path:"interest",component:InterestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
