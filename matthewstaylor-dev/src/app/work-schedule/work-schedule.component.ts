import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.scss']
})

export class WorkScheduleComponent implements OnInit {
  title = 'matthewstaylor-dev';

  ngOnInit() {
    console.log("work schedule");
  }
}
