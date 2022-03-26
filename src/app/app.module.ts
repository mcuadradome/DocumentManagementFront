import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessComponent } from './components/user/access/access.component';
import { RecoveryComponent } from './components/user/recovery/recovery.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { Constants } from './common/Constants';
import { AuthGuard } from './auth/guard/guard.guard';


import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    RecoveryComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [HttpClientModule,Constants,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
