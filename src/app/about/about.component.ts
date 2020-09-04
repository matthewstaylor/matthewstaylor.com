import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pdfSrc = "https://raw.githubusercontent.com/matthewstaylor/matthewstaylor.com/master/src/assets/AugustResumePublic.pdf"

  constructor() { }

  ngOnInit() {
  }

}
