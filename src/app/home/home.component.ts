import { Component, OnInit } from '@angular/core';
import { cardList } from '../core/common.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuresList = cardList;
  constructor() { }

  ngOnInit(): void {
  }

}
