import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { cardList } from '../core/common.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuresList = cardList;
  minIncome = 100000;
  maxIncome = 300000;
  incomeSliderVal = 100000;
  minExpense = 0;
  maxExpense = 300000;
  expenseSliderVal = 0
  selectedMonth = 3;
  monthsList: number[] = [3, 6, 9, 12, 18, 24, 30, 36];
  emiVal = 0;
  existingLoan: false;
  remaningVal = this.incomeSliderVal;
  disable: boolean = true;
  constructor() {
  }

  ngOnInit(): void {
  }

  /**To calculate EMI
   * @author : shravani
   * @date : 25-feb-2021
  */
  calculate() {
    this.remaningVal = this.incomeSliderVal - this.expenseSliderVal;
    this.emiVal = Number((this.remaningVal / this.selectedMonth).toFixed(0));
    if (this.incomeSliderVal > this.minIncome) {
      this.disable = false;
    } else {
      this.disable = true;
    }
  }

}
