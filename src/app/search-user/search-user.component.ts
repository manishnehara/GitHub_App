import { GithubService } from './../github.service';
import { Component, OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/map';
@Component({
  selector: 'search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
  providers:[GithubService]
})
export class SearchUserComponent {

  constructor(private githubService: GithubService){}
  
  @Input() username: string;
  userdata:any;
  userrepo:any;
reposkey:Array<Object> = [];
  load_userdata():void {
    this.githubService.get_data(this.username).subscribe((res) => {this.userdata= res.json();})
  }

  load_userdata_repos():void{
    this.githubService.get_repos(this.username).subscribe((res)=> {this.userrepo=res.json();})
  }

}

