import { TimeFromNowPipe } from './pipes/date.pipe';
import { HttpModule } from '@angular/http';
import { GitHubServiceService } from './services/git-hub-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GitHubComponent } from './components/git-hub/git-hub.component';


@NgModule({
  declarations: [
    AppComponent,
    GitHubComponent,
    TimeFromNowPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GitHubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
