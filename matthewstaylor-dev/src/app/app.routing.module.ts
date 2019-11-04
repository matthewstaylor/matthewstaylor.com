import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'work-schedule', component: WorkScheduleComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppRoutingModule { }
