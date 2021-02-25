import { Component, OnInit } from '@angular/core';
import {navList} from '../core/common.constant'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navListData = navList;
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
