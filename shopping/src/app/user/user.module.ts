import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
const userRoute: Routes = [
  {path: '', component: LoginComponent},
];

@NgModule({
  declarations: [UserComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoute)
  ]
})
export class UserModule { }
