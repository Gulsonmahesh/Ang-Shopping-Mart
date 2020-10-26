import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';

const userRoute: Routes = [
  {path:"", component: LoginComponent}
];

@NgModule({
  declarations: [UserComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoute)
  ]
})
export class UserModule { }
