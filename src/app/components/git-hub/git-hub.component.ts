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
  comments: any;
  tempCommentUrl: string;
  noComments: boolean;
  gitHubUrl: string;
  selectedRepo: string[];
  gitRepo: any;

  constructor(private gitHubService: GitHubServiceService) { }

  ngOnInit() {
    this.gitHubUrl = 'https://github.com/';
    this.comments = [];
    this.selected = false;
    this.noComments = false;
    this.getRepositories();
  }

  /**
   * Gets initial array with repos info
   */
  getRepositories() {
    this.gitHubService.getRepositories().subscribe(res => {
      this.data = res;
      this.reposList = res;
    });
  }

  /**
   * Filter the repos array returning a list
   * @param param {string}
   */
  search(param: string): void {
    this.data = this.reposList.filter((item: any) => {
      return item.name.includes(param);
    });
  }

  /**
   * Calls the comments service and set variables to show comments info
   * @param repo {string}
   */
  showComments(repo: string): void {
    if (this.tempCommentUrl !== repo) {
      this.selectedRepo = repo.split('/');
      this.selected = true;
      this.tempCommentUrl = repo;
      this.gitHubService.getComments(repo).subscribe(res => {
        this.comments = res.reverse();
        this.noComments = this.comments.length === 0;
      });
    } else {
      this.selected = false;
      this.tempCommentUrl = null;
    }
  }

  /**
   * Sets search target to its initial value
   */
  resetSearch(): void {
    this.target = '';
  }

  /**
   * Search for specific repo
   * @param param {string}
   */
  searchRepo(param): any {
    this.gitHubService.gitSearch(param).subscribe(res => {
      this.data = res.items;
    });
  }

}
