import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GetUserComponent } from './get-user/get-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UtilityService } from './service/utility.service';
import { GetUserModule } from './get-user/get-user.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AddUserModule } from './add-user/add-user.module';

@NgModule({
  declarations: [AppComponent, GetUserComponent, AddUserComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AddUserModule,
    ReactiveFormsModule,
    GetUserModule,
    RouterModule.forRoot([])
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
