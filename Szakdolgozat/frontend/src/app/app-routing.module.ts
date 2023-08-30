import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListThesesesComponent} from "./list-theseses/list-theseses.component";

const routes: Routes = [
  {
    path: 'listTheseses', component: ListThesesesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
