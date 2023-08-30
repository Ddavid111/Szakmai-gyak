import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListThesesesComponent } from './list-theseses/list-theseses.component';

@NgModule({
  declarations: [
    AppComponent,
    ListThesesesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule//,
 //   IndexModule,
 //   IndexRoutingModule
    /*,
    MatTableModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    MatExpansionModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
