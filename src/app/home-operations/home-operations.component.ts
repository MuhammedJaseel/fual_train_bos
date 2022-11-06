import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-operations',
  templateUrl: './home-operations.component.html',
  styleUrls: ['./home-operations.component.css'],
})
export class HomeOperationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  path = window.location.pathname;
}
