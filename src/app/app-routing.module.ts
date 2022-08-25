import { LoginComponent } from './login/login.component';
import { ChatTestComponent } from './chat-test/chat-test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"chat",component:ChatTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
