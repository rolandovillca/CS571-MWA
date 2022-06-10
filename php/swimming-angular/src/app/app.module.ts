import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { GetTeamComponent } from './get-team/get-team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ListTeamComponent,
    GetTeamComponent,
    AddTeamComponent,
    EditTeamComponent,
    DeleteTeamComponent,
    ErrorPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "", component: HomeComponent
      },
      {
        path: "teams/list", component: ListTeamComponent
      },
      {
        path: "teams/add", component: AddTeamComponent
      },
      {
        path: "teams/get/:teamId", component: GetTeamComponent
      },
      {
        path: "teams/delete/:teamId", component: DeleteTeamComponent
      },
      {
        path: "teams/edit/:teamId", component: EditTeamComponent
      },
      {
        path: "**", component: ErrorPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
