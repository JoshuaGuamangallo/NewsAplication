import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalComponent } from './local/local.component';
import { RemotePlusComponent } from './remote-plus/remote-plus.component';
import { RemoteComponent } from './remote/remote.component';


const routes: Routes = [
  {
    path:"local",
    component: LocalComponent,
    
  },
  {
    path:"",
    redirectTo:"local",
    pathMatch: 'full'
  },
  {
    path:"remote",
    component: RemoteComponent,
  },
  {
    path:"remote+",
    component: RemotePlusComponent,
  },
  {
    path:"login",
    component: LoginComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
