import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakemehomeRoutingModule } from './takemehome-routing.module';
import { TakemehomeListComponent } from './components/takemehome-list/takemehome-list.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    TakemehomeListComponent
  ],
    imports: [
        CommonModule,
        TakemehomeRoutingModule,
        NgbModule
    ]
})
export class TakemehomeModule { }
