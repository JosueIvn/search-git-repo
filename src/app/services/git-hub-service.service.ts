import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GitHubServiceService {

  private username = 'josueivn';
  private clientId = '2d02bd6b14c58c7a11b2';
  private clientSecret = '6b966200a56caf5d3b82c852a5c0458b7670fb5a';
  URL = 'https://api.github.com/repositories';
  constructor(private http: Http) { }

  getRepositories() {
    return this.http.get(this.URL).map(res => res.json());
  }
}
