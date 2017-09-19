import { RouterModule,Routes } from '@angular/router';
import { GithubService } from './github.service';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SearchRepoComponent } from './search-repo/search-repo.component';
// import { AppRoutingModule} from './app-routing.module';
// import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SearchUserComponent } from './search-user/search-user.component'



@NgModule({
  declarations: [
    AppComponent,
    SearchRepoComponent,
    NavComponent,
    FooterComponent,
    SearchUserComponent ],
  imports: [
    BrowserModule, HttpModule, FormsModule, 
    RouterModule.forRoot([
      {path:'', component:SearchUserComponent},
      {path: 'search_user', component:SearchUserComponent},
      {path: 'search_repo', component:SearchRepoComponent}
    ])
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
