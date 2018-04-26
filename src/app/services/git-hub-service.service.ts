import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GitHubServiceService {

  API = 'https://api.github.com/';

  constructor(private http: Http) { }

  getRepositories() {
    return this.http.get(this.API + 'repositories').map(res => res.json());
  }

  getComments(param) {
    return this.http.get(this.API + 'repos/' + param + '/comments').map(res => res.json());
  }
}
