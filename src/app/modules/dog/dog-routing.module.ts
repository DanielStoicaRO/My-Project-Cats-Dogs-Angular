import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DogListComponent} from "./components/dog-list/dog-list.component";
import {DogDetailsComponent} from "./components/dog-details/dog-details.component";

const routes: Routes = [
  {path: '', component: DogListComponent},
  {path: 'dogs', component: DogListComponent},

  //creare ruta pentru buton =>
  {path: 'dogs/details/:id', component: DogDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule {
}
