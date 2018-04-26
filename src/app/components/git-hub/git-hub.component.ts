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
  selected: boolean;
  comments: any[];
  tempCommentUrl: string;
  noComments: boolean;

  constructor(private gitHubService: GitHubServiceService) { }

  ngOnInit() {
    this.comments = [];
    this.selected = false;
    this.noComments = false;
    this.getRepositories();
  }

  getRepositories() {
    this.gitHubService.getRepositories().subscribe(res => {
      this.data = res;
      this.reposList = res;
    });
  }

  search(param: string): void {
    this.data = this.reposList.filter((item: any) => {
      return item.name.includes(param);
    });
  }

  showComments(repo: any): void {
    if (this.tempCommentUrl !== repo) {
      this.selected = true;
      this.tempCommentUrl = repo;
      this.gitHubService.getComments(repo).subscribe(res => {
        this.comments = res;
        this.noComments = this.comments.length === 0;
        console.log(this.comments);
      });
    } else {
      this.selected = false;
      this.tempCommentUrl = null;
    }
  }

}
