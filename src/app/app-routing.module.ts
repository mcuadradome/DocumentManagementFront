import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/guard.guard';
import { HomeComponent } from './components/home/home.component';
import { AccessComponent } from './components/user/access/access.component';
import { RecoveryComponent } from './components/user/recovery/recovery.component';

const routes: Routes = [
  { path: '', component: AccessComponent },
  { path: 'home', component: HomeComponent},
  { path: 'user/password-recovery', component: RecoveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
