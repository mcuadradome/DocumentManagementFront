import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRolesComponent } from './components/administration/create-roles/create-roles.component';
import { CreateUsersComponent } from './components/administration/create-users/create-users.component';
import { HomeComponent } from './components/home/home.component';
import { AccessComponent } from './components/user/access/access.component';
import { RecoveryComponent } from './components/user/recovery/recovery.component';

const routes: Routes = [
  { path: '', component: AccessComponent },
  { path: 'home', component: HomeComponent},
  { path: 'user/password-recovery', component: RecoveryComponent },
  { path: 'administration/users', component: CreateUsersComponent },
  { path: 'administration/roles', component: CreateRolesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
