import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-home-reports',
  templateUrl: './home-reports.component.html',
  styleUrls: ['./home-reports.component.css']
})
export class HomeReportsComponent implements OnInit {
  selectedIndex: number = 0;
  cardData: { cardName: string; cardDesc: string; }[] = [];
  cardSelectedIndex: number = 0;
  breadCrum!: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  navbarData = [
    {
      name: "All Reports",
      subMenu: [{
        cardName: "Equipment wise alarm",
        cardDesc: "Description"
      },
      {
        cardName: "Field officer inspection",
        cardDesc: "Description"
      },

      ]
    },
    {
      name: "Trends Report",
      subMenu: [{
        cardName: "Equipment wise alarm",
        cardDesc: "Description"
      },
      ]
    },
    {
      name: "Transactions",
      subMenu: [{
        cardName: "Test",
        cardDesc: "test"
      },
      ]
    },
    {
      name: "Deliveries",
      subMenu: [{
        cardName: "Test",
        cardDesc: "test"
      },
      ]
    },
    {
      name: "Report builder",
      subMenu: [{
        cardName: "Test",
        cardDesc: "test"
      },
      ]
    },
    {
      name: "Custom Report",
      subMenu: [{
        cardName: "Test",
        cardDesc: "test"
      },
      ]
    },
    {
      name: "Data Reconcilation Report",
      subMenu: [{
        cardName: "Test",
        cardDesc: "test"
      },
      ]
    },
  ]

  onNavIconClick = (k: number) => {
    this.selectedIndex = k;
    this.cardData = this.navbarData[k].subMenu;
  }

  onCardClick = (k: number) => {
    this.cardSelectedIndex = k + 1;
    this.breadCrum = this.navbarData[this.selectedIndex].subMenu[k].cardName;
  }
  reportScreen() {
    this.cardSelectedIndex = 0;

  }

}
