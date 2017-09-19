import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
@Injectable()
export class GithubService {
  constructor(private http: Http) { }
  private gitUrl = "https://api.github.com/users";
  private repourl="https://api.github.com/search/repositories?q=";
  private repos='repos';
  private data:any;

  

  private top='&per_page=10';

  private data_string:any; 
  get_data(username: string):any{
    const url = `${this.gitUrl}/${username}`;
    return this.http.get(url);
  }
  get_repos(username:string):any{
    const url=`${this.gitUrl}/${username}/${this.repos}`;
    this.data=this.http.get(url);
    return this.data;
  }
  get_repo_tech(username:string){
    const url=`${this.repourl}/${username}/${this.top}`;
     return this.http.get(url)
     
    
  }
}