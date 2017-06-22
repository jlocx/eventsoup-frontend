import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppRoutingModule }     from './core/app-routing.module';
import { HomePageRoutingModule } from './homepage/homepage.routing.module';

import { AppComponent }         from './app.component';
import { FornecedorModule }     from './fornecedor/fornecedor.module';
import { HomepageModule }       from './homepage/homepage.module';
import { OrganizerModule }      from './organizer/organizer.module';
import { EventService }         from './event/event.service';
import { LoginComponent } from './core/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FornecedorModule,
    HomepageModule,
    OrganizerModule,
    //AppRoutingModule
    HomePageRoutingModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
