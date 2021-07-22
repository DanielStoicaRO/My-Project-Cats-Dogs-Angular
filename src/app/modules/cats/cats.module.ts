import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import { CatsListElementComponent } from './components/cats-list-element/cats-list-element.component';


@NgModule({
  declarations: [
    CatsListComponent,
    CatsListElementComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,

  ]
})
export class CatsModule { }
