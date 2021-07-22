import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DogListComponent} from "../dog/components/dog-list/dog-list.component";
import {TakemehomeListComponent} from "./components/takemehome-list/takemehome-list.component";

const routes: Routes = [

  {path:'takemehome', component:TakemehomeListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakemehomeRoutingModule { }
