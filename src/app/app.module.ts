import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/guard/guard.guard';
import { Constants } from './common/Constants';
import { CreateRolesComponent } from './components/administration/create-roles/create-roles.component';
import { CreateModifyComponent } from './components/administration/create-users/create-modify/create-modify.component';
import { CreateUsersComponent } from './components/administration/create-users/create-users.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { AccessComponent } from './components/user/access/access.component';
import { RecoveryComponent } from './components/user/recovery/recovery.component';






@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    RecoveryComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    CreateUsersComponent,
    CreateRolesComponent,
    CreateModifyComponent

  ],
  entryComponents: [
    CreateModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    MatDialogModule,
    NoopAnimationsModule
  ],
  providers: [HttpClientModule,Constants,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
