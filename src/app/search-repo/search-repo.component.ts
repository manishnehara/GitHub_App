import { GithubService } from './../github.service';

import { Component, OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css'],
  providers:[GithubService]
})
export class SearchRepoComponent implements OnInit {

  ngOnInit() {
  }


  constructor(private githubService: GithubService){}
  
  @Input() username: string;
  userdata:any;
  userrepo:any;
reposkey:Array<Object> = [];
  load_repodata():void{
    this.githubService.get_repo_tech(this.username).map(res => res.json()).subscribe(res=> this.reposkey=res.items);
  }
}
