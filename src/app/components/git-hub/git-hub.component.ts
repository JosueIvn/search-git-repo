import { Component, OnInit } from '@angular/core';
// Services
import { GitHubServiceService } from '../../services/git-hub-service.service';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.scss'],
  providers: []
})
export class GitHubComponent implements OnInit {

  data: any[];
  target: string;
  reposList: any[];

  constructor(private gitHubService: GitHubServiceService) { }

  ngOnInit() {
    this.getRepositories();
  }

  getRepositories() {
    this.gitHubService.getRepositories().subscribe(res => {
      this.data = res;
      this.reposList = res;
      console.log(res);
    });
  }

  search(param): void {
    this.data = this.reposList.filter((item: any) => {
      return item.name.includes(param);
    });
    console.log(param);
  }

}
