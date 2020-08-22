import { Component, NgModule, OnInit } from '@angular/core';
import { NgbModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterLink } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@NgModule ({
  imports: [
    NgbModule,
    NgbDropdown,
    RouterLink
  ],
  declarations: [
    HomeComponent,
    ProjectsComponent
  ]
})
export class AppComponent implements OnInit {
  title = 'matthewstaylor-dev';

  ngOnInit() {
    console.log("main page");
  }
} 