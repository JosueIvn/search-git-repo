import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';

@Injectable()
export class GitHubServiceService {

  API = 'https://api.github.com/';

  constructor(private http: Http) { }

  /**
   * Gets repositories
   */
  getRepositories(): Observable<any[]> {
    return this.http.get(this.API + 'repositories').map(res => res.json());
  }

  /**
   * Gets comments as per repo
   * @param param {string}
   */
  getComments(param: string): Observable<any[]> {
    return this.http.get(this.API + 'repos/' + param + '/comments').map(res => res.json());
  }

  /**
   * Gets especific list of repos
   * @param param {string}
   */
  gitSearch(param: string): Observable<any> {
    return this.http.get(this.API + 'search/repositories?q=' + param).map(res => res.json());
  }
}
