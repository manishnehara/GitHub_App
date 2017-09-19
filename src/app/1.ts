import { AppComponent } from './app.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import{UserComponent} from './user/user.component';

const routes:Routes=[
    // {path : 'search_user', component:UserComponent},
    {path: 'search_repo', component:SearchRepoComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}