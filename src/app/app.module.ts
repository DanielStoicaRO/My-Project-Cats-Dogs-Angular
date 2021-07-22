import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DogModule} from "./modules/dog/dog.module";
import {CatsModule} from "./modules/cats/cats.module";
import {TakemehomeModule} from "./modules/takemehome/takemehome.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DogModule,
    CatsModule,
    TakemehomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
