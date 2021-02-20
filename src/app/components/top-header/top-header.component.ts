import { Component, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faInstagramSquare = faInstagramSquare;
  faClock = faClock;
  constructor() { }

  ngOnInit(): void {
  }

}
