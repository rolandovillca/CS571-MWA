import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { DatacovidComponent } from './datacovid/datacovid.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    DatacovidComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
