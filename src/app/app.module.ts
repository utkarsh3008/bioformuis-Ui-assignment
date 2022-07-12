import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {CommonService} from "./common.service";
import { AddDomainComponent } from './add-domain/add-domain.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SiteDetailsComponent,
    SidebarComponent,
    AddDomainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient , CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
